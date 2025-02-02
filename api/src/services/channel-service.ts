import { Author, Subscriber } from '@iota/streams/node/streams_wasm';
import { StreamsService } from './streams-service';
import { Subscription } from '../models/types/subscription';
import { AccessRights, SubscriptionType } from '../models/schemas/subscription';
import { ChannelLogRequestOptions, Topic } from '../models/types/channel-info';
import { ChannelInfoService } from './channel-info-service';
import { SubscriptionService } from './subscription-service';
import * as ChannelDataDb from '../database/channel-data';
import { ChannelData, ChannelLog } from '../models/types/channel-data';
import { StreamsConfig } from '../models/config';
import { CreateChannelResponse, ValidateResponse } from '../models/types/request-response-bodies';
import { randomBytes } from 'crypto';
import { ILock, Lock } from '../utils/lock';
import { getDateStringFromDate } from '../utils/date';
import { ChannelLogTransformer } from '../utils/channel-log-transformer';
import { ILogger } from '../utils/logger';

export class ChannelService {
	private readonly password: string;
	private lock: ILock;

	constructor(
		private readonly streamsService: StreamsService,
		private readonly channelInfoService: ChannelInfoService,
		private readonly subscriptionService: SubscriptionService,
		config: StreamsConfig,
		private readonly logger: ILogger
	) {
		this.lock = Lock.getInstance();
		this.password = config.statePassword;
	}

	async create(params: {
		identityId: string;
		topics: Topic[];
		hasPresharedKey: boolean;
		seed?: string;
		presharedKey?: string;
		subscriptionPassword?: string;
	}): Promise<CreateChannelResponse> {
		const { presharedKey, seed, hasPresharedKey, identityId, topics } = params;
		let key = presharedKey;
		if (hasPresharedKey && !key) {
			key = randomBytes(16).toString('hex');
		}

		const res = await this.streamsService.create(seed, key);

		if (!res?.seed || !res?.channelAddress || !res?.author) {
			throw new Error('could not create the channel');
		}

		const subscription: Subscription = {
			identityId,
			type: SubscriptionType.Author,
			channelAddress: res.channelAddress,
			subscriptionLink: res.channelAddress,
			state: this.streamsService.exportSubscription(res.author, this.password),
			accessRights: AccessRights.ReadAndWrite,
			isAuthorized: true,
			publicKey: res.publicKey,
			keyloadLink: res.keyloadLink,
			pskId: res.pskId,
			sequenceLink: res.sequenceLink
		};

		await this.subscriptionService.addSubscription(subscription);
		await this.channelInfoService.addChannelInfo({
			topics,
			authorId: identityId,
			channelAddress: res.channelAddress
		});

		return {
			channelAddress: res.channelAddress,
			presharedKey: res.presharedKey,
			seed: res.seed
		};
	}

	async fetchLogs(channelAddress: string, identityId: string, sub: Author | Subscriber): Promise<ChannelData[]> {
		if (!sub) {
			throw new Error(`no author/subscriber found with channelAddress: ${channelAddress} and identityId: ${identityId}`);
		}
		const messages = await this.streamsService.getMessages(sub);

		if (!messages) {
			return [];
		}
		await this.subscriptionService.updateSubscriptionState(
			channelAddress,
			identityId,
			this.streamsService.exportSubscription(sub, this.password)
		);

		const channelData: ChannelData[] = ChannelLogTransformer.transformStreamsMessages(messages);
		// store logs in database
		if (channelData?.length > 0) {
			await ChannelDataDb.addChannelData(channelAddress, identityId, channelData, this.password);
		}

		return channelData;
	}

	async getHistory(channelAddress: string, presharedKey: string): Promise<ChannelData[]> {
		const seed: string = undefined;
		const { subscriber } = await this.streamsService.requestSubscription(channelAddress, seed, presharedKey);
		const messages = await this.streamsService.getMessages(subscriber);
		return ChannelLogTransformer.transformStreamsMessages(messages);
	}

	async getLogs(channelAddress: string, identityId: string, options: ChannelLogRequestOptions) {
		const lockKey = channelAddress + identityId;

		return this.lock.acquire(lockKey).then(async (release) => {
			try {
				const subscription = await this.subscriptionService.getSubscription(channelAddress, identityId);
				if (!subscription || !subscription?.keyloadLink) {
					throw new Error('no subscription found!');
				}
				if (subscription.accessRights === AccessRights.Write) {
					throw new Error('not allowed to get logs from the channel');
				}

				const isAuthor = subscription.type === SubscriptionType.Author;
				const sub = await this.streamsService.importSubscription(subscription.state, isAuthor);

				await this.fetchLogs(channelAddress, identityId, sub);
				return await ChannelDataDb.getChannelData(channelAddress, identityId, options, this.password);
			} finally {
				release();
			}
		});
	}

	async addLogs(channelAddress: string, identityId: string, channelLog: ChannelLog): Promise<ChannelData> {
		const lockKey = channelAddress + identityId;

		return this.lock.acquire(lockKey).then(async (release) => {
			try {
				const log: ChannelLog = { created: getDateStringFromDate(new Date()), ...channelLog };
				const subscription = await this.subscriptionService.getSubscription(channelAddress, identityId);

				if (!subscription || !subscription?.keyloadLink) {
					throw new Error('no subscription found!');
				}

				const isAuthor = subscription.type === SubscriptionType.Author;
				const sub = await this.streamsService.importSubscription(subscription.state, isAuthor);

				if (!sub) {
					throw new Error(`no author/subscriber found with channelAddress: ${channelAddress} and identityId: ${identityId}`);
				}
				const { accessRights, keyloadLink } = subscription;

				// check access rights
				if (subscription.accessRights === AccessRights.Read || subscription.accessRights === AccessRights.Audit) {
					throw new Error('not allowed to add logs to the channel');
				} else if (accessRights === AccessRights.Write) {
					if (sub) {
						await sub.clone().sync_state();
					}
				} else {
					// fetch prev logs before writing new data to the channel
					await this.fetchLogs(channelAddress, identityId, sub);
				}

				const { maskedPayload, publicPayload } = ChannelLogTransformer.getPayloads(log);
				const res = await this.streamsService.publishMessage(keyloadLink, sub, publicPayload, maskedPayload);

				// store newly added log
				const newLog: ChannelData = { link: res.link, messageId: res.messageId, log };
				await ChannelDataDb.addChannelData(channelAddress, identityId, [newLog], this.password);

				await this.subscriptionService.updateSubscriptionState(
					channelAddress,
					identityId,
					this.streamsService.exportSubscription(sub, this.password)
				);
				return newLog;
			} finally {
				release();
			}
		});
	}

	async reimport(channelAddress: string, identityId: string, _seed: string, _subscriptionPassword?: string): Promise<void> {
		const lockKey = channelAddress + identityId;

		return this.lock.acquire(lockKey).then(async (release) => {
			try {
				const subscription = await this.subscriptionService.getSubscription(channelAddress, identityId);

				if (!subscription || !subscription?.keyloadLink || !subscription.publicKey) {
					throw new Error('no subscription found!');
				}

				if (subscription.accessRights === AccessRights.Write) {
					throw new Error('not allowed to reimport the logs from the channel');
				}

				const isAuthor = subscription.type === SubscriptionType.Author;
				const sub = await this.streamsService.importSubscription(subscription.state, isAuthor);
				const newSub = await this.streamsService.resetState(channelAddress, sub, isAuthor);
				const newPublicKey = newSub.clone().get_public_key();

				if (newPublicKey !== subscription.publicKey) {
					throw new Error('wrong seed inserted');
				}

				await ChannelDataDb.removeChannelData(channelAddress, identityId);
				await this.fetchLogs(channelAddress, identityId, newSub);
			} finally {
				release();
			}
		});
	}

	async validate(channelAddress: string, identityId: string, logs: ChannelData[]): Promise<ValidateResponse> {
		const lockKey = channelAddress + identityId;

		return this.lock.acquire(lockKey).then(async (release) => {
			try {
				const subscription = await this.subscriptionService.getSubscription(channelAddress, identityId);

				// TODO check when no publicKey is needed....
				if (!subscription || !subscription?.keyloadLink) {
					throw new Error('no subscription found!');
				}

				if (subscription.accessRights === AccessRights.Write) {
					throw new Error('not allowed to validate the logs from the channel');
				}

				const isAuthor = subscription.type === SubscriptionType.Author;
				const sub = await this.streamsService.importSubscription(subscription.state, isAuthor);

				if (!sub) {
					throw new Error(`no author/subscriber found with channelAddress: ${channelAddress} and identityId: ${identityId}`);
				}
				await sub.clone().sync_state();

				const streamsMessages = await Promise.all(
					logs.map(async (log) => {
						const key = 'get-message-' + channelAddress + identityId;
						return await this.lock.acquire(key).then(async (release) => {
							try {
								return await this.streamsService.getMessage(sub.clone(), log?.link);
							} catch (e) {
								this.logger.error(`could not validate message with link: ${log?.link}`);
								this.logger.error(e);
							} finally {
								release();
							}
						});
					})
				);
				const tangleLogs = ChannelLogTransformer.transformStreamsMessages(streamsMessages);
				return ChannelLogTransformer.validateLogs(logs, tangleLogs);
			} finally {
				release();
			}
		});
	}
}

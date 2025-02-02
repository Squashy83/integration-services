import { Static } from '@sinclair/typebox';
import { TopicSchema, ChannelInfoSchema, ChannelInfoSearchSchema, ChannelLogRequestOptionsSchema } from '../schemas/channel-info';

export type Topic = Static<typeof TopicSchema>;

export type ChannelInfo = Static<typeof ChannelInfoSchema>;

type OmitedChannelInfo = Omit<ChannelInfo, 'created' | 'latestMessage'>;

export interface ChannelInfoPersistence extends OmitedChannelInfo {
	created: Date | null;
	latestMessage?: Date;
}

type ChannelInfoSearchDate = Static<typeof ChannelInfoSearchSchema>;
export type ChannelInfoSearch = Omit<ChannelInfoSearchDate, 'created' | 'latestMessage'> & { created: Date, latestMessage: Date }

export type ChannelLogRequestOptions = Static<typeof ChannelLogRequestOptionsSchema>;
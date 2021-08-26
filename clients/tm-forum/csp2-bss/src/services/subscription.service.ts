import { CONFIG } from '../config/config';
import { csp2Client } from '../utils/client';

export const checkSubscriptionState = async (channelAddress: string, identityId: string) => {
	console.log('Checking subscription state...');
	const apiKey = CONFIG.apiKey ? `?api-key=${CONFIG.apiKey}` : '';
	return new Promise((resolve) => {
		const interval = setInterval(async () => {
			const res = await csp2Client.get(`${CONFIG.baseUrl}/subscriptions/${channelAddress}/${identityId}${apiKey}`);
			if (res?.status === 200) {
				if (res.data === '') {
					const subscriptionLink = await requestSubscription(channelAddress);
					console.log(`Subscription requested. Please authorize subscription link: ${subscriptionLink}`);
				} else if (!res.data.isAuthorized) {
					console.log(`Subscription already requested. Please authorize subscription link: ${res.data.subscriptionLink}`);
				} else {
					clearInterval(interval);
					console.log('Subscription authorized!');
					resolve(null);
				}
			}
		}, 10000);
	});
};

export const requestSubscription = async (channelAddress: string) => {
	const apiKey = CONFIG.apiKey ? `?api-key=${CONFIG.apiKey}` : '';
	const body = {
		accessRights: 'ReadAndWrite'
	};
	console.log('Requesting subscription...');
	const res = await csp2Client.post(`${CONFIG.baseUrl}/subscriptions/request/${channelAddress}${apiKey}`, JSON.stringify(body));
	if (res?.status === 201) {
		return res.data.subscriptionLink;
	}
};

import fetch from 'node-fetch';

export const getPhotos = async (user_id, accessToken) => {
	const baseUrl = 'https://graph.instagram.com';

	try {
		const response = await fetch(
			baseUrl + '/me/media?fields=media_url&access_token=' + accessToken
		);

		const { data, paging } = await response.json();

		return data;
	} catch (err) {
		res.send(err);
	}
};

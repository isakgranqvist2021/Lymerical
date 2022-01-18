import fetch from 'node-fetch';

import { downloadPhoto } from './download-photo';

export const getPhotos = async (user_id, accessToken) => {
	const baseUrl = 'https://graph.instagram.com';

	try {
		const response = await fetch(
			baseUrl + '/me/media?fields=media_url&access_token=' + accessToken
		);

		const { data, paging } = await response.json();

		const promises = data.map(async (media) => {
			const fileName = media.id;

			const ext = await downloadPhoto(media.media_url, fileName);

			const isVideo = media.media_url.includes('video');

			return {
				media_url:
					process.env.SERVER_ADDR + '/public/photos/' + fileName + '.' + ext,
				id: media.id,
				isVideo,
			};
		});

		return await Promise.all(promises);
	} catch (err) {
		res.send(err);
	}
};

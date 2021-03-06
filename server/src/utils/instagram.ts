import fetch from 'node-fetch';

import { downloadPhoto } from './download-photo';

const prepareMediaObject = async (media: Media) => {
	const fileName = media.id;

	const ext = await downloadPhoto(media.media_url, fileName);

	const isVideo = media.media_url.includes('video');

	return {
		media_url:
			process.env.SERVER_ADDR + '/public/photos/' + fileName + '.' + ext,
		id: media.id,
		isVideo,
	};
};

export const getPhotos = async (accessToken: string) => {
	const baseUrl = 'https://graph.instagram.com';

	try {
		const response = await fetch(
			baseUrl + '/me/media?fields=media_url&access_token=' + accessToken
		);

		const { data }: any = await response.json();

		const promises = data.map(prepareMediaObject);

		return await Promise.all(promises);
	} catch (err) {
		return null;
	}
};

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

import { getPhotos } from '../utils';

export const authorize = async (req, res) => {
	try {
		const { code } = req.query;

		const redirect_uri = process.env.SERVER_ADDR + '/api/authorize';

		const payload = [
			'&client_id=' + process.env.INSTAGRAM_APP_ID,
			'&client_secret=' + process.env.INSTAGRAM_APP_SECRET,
			'&grant_type=' + 'authorization_code',
			'&redirect_uri=' + redirect_uri,
			'&code=' + code.replace('#_', ''),
		].join('');

		const response = await fetch(
			'https://api.instagram.com/oauth/access_token',
			{
				method: 'POST',
				body: payload,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);

		const { user_id, access_token } = await response.json();

		const photos = await getPhotos(user_id, access_token);

		fs.writeFileSync(
			path.resolve('./data/photos.json'),
			JSON.stringify(photos)
		);

		res.send('OK');
	} catch (err) {
		res.send(err);
	}
};

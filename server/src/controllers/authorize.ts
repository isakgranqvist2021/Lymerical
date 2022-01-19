import { Request, Response } from 'express';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

import { getPhotos, clearOldPhotos } from '../utils';

export const authorize = async (
	req: Request<any, any, any, any>,
	res: Response
) => {
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

		clearOldPhotos();

		const { access_token } = (await response.json()) as {
			user_id: string;
			access_token: string;
		};

		const photos = await getPhotos(access_token);

		fs.writeFileSync(
			path.resolve('./data/photos.json'),
			JSON.stringify(photos)
		);

		res.send('OK');
	} catch (err) {
		res.send(err);
	}
};

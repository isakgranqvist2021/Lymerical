import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';

export const downloadPhoto = async (url, fileName) => {
	const response = await fetch(url);

	const ext = response.headers.get('content-type').split('/')[1];

	const dest = './public/photos/' + fileName + '.' + ext;

	response.body.pipe(fs.createWriteStream(dest));

	return ext;
};

import fs from 'fs';
import fetch from 'node-fetch';

export const downloadPhoto = async (url: string, fileName: string) => {
	const response = await fetch(url);

	const ext = response.headers.get('content-type')?.split('/')[1];

	const dest = process.env.UPLOAD_DIR + '/' + fileName + '.' + ext;

	response.body?.pipe(fs.createWriteStream(dest));

	return ext;
};

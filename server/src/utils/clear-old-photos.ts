import path from 'path';
import fs from 'fs';

export const clearOldPhotos = () => {
	if (!process.env.UPLOAD_DIR) return;

	const photos = fs.readdirSync(process.env.UPLOAD_DIR);

	console.log(photos);

	photos.forEach((photo) => {
		if (process.env.UPLOAD_DIR)
			fs.unlinkSync(path.join(process.env.UPLOAD_DIR, photo));
	});
};

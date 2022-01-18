import path from 'path';
import fs from 'fs';

export const clearOldPhotos = () => {
	const photos = fs.readdirSync('./public/photos');

	photos.forEach((photo) => {
		fs.unlinks(path.join('./public/photos', photo));
	});
};

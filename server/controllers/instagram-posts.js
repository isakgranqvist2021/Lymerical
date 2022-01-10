import fs from 'fs';
import path from 'path';

export const getInstaPosts = async (req, res) => {
	try {
		const buffer = fs.readFileSync(path.resolve('./data/photos.json'));
		const data = JSON.parse(buffer.toString());

		if (!data.length) throw new Error('empty array');

		return res.json({
			message: '',
			success: true,
			data: data.slice(0, 3),
		});
	} catch (err) {
		return res.json({
			message: err.message,
			success: false,
			data: null,
		});
	}
};

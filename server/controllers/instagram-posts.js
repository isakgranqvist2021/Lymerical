const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
	try {
		const buffer = fs.readFileSync(path.resolve('./data/instagram.json'));
		const data = JSON.parse(buffer.toString());

		if (!data.length) throw new Error('empty array');

		return res.json({
			message: '',
			success: true,
			data: [],
		});
	} catch (err) {
		return res.json({
			message: err.message,
			success: false,
			data: null,
		});
	}
};

const express = require('express');
const ig = require('instagram-scraping');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/update-cache/:username', async (req, res) => {
	try {
		const result = await ig.scrapeUserPage(req.params.username);

		const data = result.medias.map(({ node }) => {
			return node.thumbnail_src;
		});

		fs.writeFileSync(
			path.resolve('./data/instagram.json'),
			JSON.stringify(data)
		);

		return res.send('Updated');
	} catch (err) {
		console.log(err);
		return res.json('Error');
	}
});

router.get('/instagram', async (req, res) => {
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
});

router.post('/contact', (req, res) => {
	return res.json({
		message: 'ditt meddelande har skickats',
		success: true,
		data: null,
	});
});

module.exports = router;

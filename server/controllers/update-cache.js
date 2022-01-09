const ig = require('instagram-scraping');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
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
};

const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
	try {
		const { email, name, inquiry, message } = req.body;

		const msg = {
			to: 'test@example.com', // Change to your recipient
			from: 'test@example.com', // Change to your verified sender
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		};

		const response = await sgMail.send(msg);

		console.log(response);

		return res.json({
			message: 'ditt meddelande har skickats',
			success: true,
			data: null,
		});
	} catch (err) {
		console.log(err);
		return res.json({
			message: 'internal server error',
			success: false,
			data: null,
		});
	}
};

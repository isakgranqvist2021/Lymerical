const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
	try {
		const { email, name, inquiry, message } = req.body;

		let testAccount = await nodemailer.createTestAccount();

		let transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: testAccount.user, // generated ethereal user
				pass: testAccount.pass, // generated ethereal password
			},
		});

		await transporter.sendMail({
			from: '"Fred Foo 👻" <foo@example.com>', // sender address
			to: 'bar@example.com, baz@example.com', // list of receivers
			subject: 'Hello ✔', // Subject line
			text: 'Hello world?', // plain text body
			html: '<b>Hello world?</b>', // html body
		});

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

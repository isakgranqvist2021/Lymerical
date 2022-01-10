import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const contact = async (req, res) => {
	try {
		const { email, name, inquiry, message } = req.body;

		const msg = {
			to: 'lymercial@gmail.com', // Change to your recipient
			from: 'lymercial@gmail.com', // Change to your verified sender
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: `
				<div>
					<ul>
						<li>Email: ${email}</li> 
						<li>Namn: ${name}</li>
						<li>Kontakt Orsak: ${inquiry}</li>
					</ul>
				</div>
				<div>
					<p>${message}</p>
				</div>
			`,
		};

		const response = await sgMail.send(msg);

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

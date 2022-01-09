import { validateEmail } from '../email';
import { ErrorModel } from '../error';

import { ContactModel } from './contact.model';

export const contactSchema = (data: ContactModel): ErrorModel | null => {
	const { email, name, message, inquiry } = data;

	if (!email)
		return {
			message: 'Du måste ange din mail',
			reason: 'string.empty',
			field: 'email',
		};

	if (!validateEmail(email))
		return {
			message: 'Du måste ange en giltig mail',
			reason: 'string.invalid',
			field: 'email',
		};

	if (!email.trim().length)
		return {
			message: 'Du måste ange din mail',
			reason: 'string.empty',
			field: 'email',
		};

	if (!name)
		return {
			message: 'Du måste ange ditt namn',
			reason: 'string.empty',
			field: 'name',
		};

	if (!name.trim().length)
		return {
			message: 'Du måste ange ditt namn',
			reason: 'string.empty',
			field: 'name',
		};

	if (!message)
		return {
			message: 'Du måste skriva ett meddelande',
			reason: 'string.empty',
			field: 'message',
		};

	if (!message.trim().length)
		return {
			message: 'Du måste skriva ett meddelande',
			reason: 'string.empty',
			field: 'message',
		};

	if (!inquiry.trim().length)
		return {
			message: 'Du måste välja en kontakt orsak',
			reason: 'string.empty',
			field: 'inquiry',
		};

	return null;
};

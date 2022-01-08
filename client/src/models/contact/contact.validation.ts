import { validateEmail } from '../email';
import { ErrorModel } from '../error';

import { ContactModel } from './contact.model';

export const contactSchema = (data: ContactModel): ErrorModel | null => {
	const { email, name, message } = data;

	if (!email)
		return {
			message: 'Please enter an email',
			reason: 'string.empty',
			field: 'email',
		};

	if (!validateEmail(email))
		return {
			message: 'Please a valid email address',
			reason: 'string.invalid',
			field: 'email',
		};

	if (!email.trim().length)
		return {
			message: 'Please enter an email',
			reason: 'string.empty',
			field: 'email',
		};

	if (!name)
		return {
			message: 'Please enter your name',
			reason: 'string.empty',
			field: 'name',
		};

	if (!name.trim().length)
		return {
			message: 'Please enter your name',
			reason: 'string.empty',
			field: 'name',
		};

	if (!message)
		return {
			message: 'Please enter a message',
			reason: 'string.empty',
			field: 'message',
		};

	if (!message.trim().length)
		return {
			message: 'Please enter a message',
			reason: 'string.empty',
			field: 'message',
		};

	return null;
};

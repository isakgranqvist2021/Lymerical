import { getAccessTokenUrl } from '../utils';

export const getAccessToken = async (req, res) => {
	const url = getAccessTokenUrl();

	return res.send(`<a href="${url}">Click here to Authorize</a>`);
};

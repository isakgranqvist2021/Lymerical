import { Request, Response } from 'express';

import { getAccessTokenUrl } from '../utils';

export const getAccessToken = async (req: Request, res: Response) => {
	const url = getAccessTokenUrl();

	return res.send(`<a href="${url}">Click here to Authorize</a>`);
};

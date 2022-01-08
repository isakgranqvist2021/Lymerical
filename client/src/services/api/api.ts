import { ContactModel } from 'models';

import { GET, POST } from 'services/http';

import { GetProjects, PostContact } from './api.types';

export const getProjects = async (
	signal?: AbortSignal
): Promise<GetProjects> => {
	return await GET({
		endpoint: '/projects',
		signal,
	});
};

export const postContact = async (
	body: ContactModel,
	signal?: AbortSignal
): Promise<PostContact> => {
	return await POST({
		endpoint: '/contact',
		body,
		signal,
	});
};

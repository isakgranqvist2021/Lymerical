import { ContactModel } from 'models';

import { GET, POST } from 'services/http';

import { PostContact, GetInstagramPosts } from './api.types';

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

export const fetchInstagramPhotos = async (): Promise<GetInstagramPosts> => {
	return await GET({ endpoint: '/instagram' });
};

import { Media } from 'models';

export interface HttpRequest {
	message: string;
	success: boolean;
}

export interface PostContact extends HttpRequest {
	data: null;
}

export interface GetInstagramPosts extends HttpRequest {
	data: Media[];
}

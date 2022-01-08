export interface HttpRequest {
	message: string;
	success: boolean;
}

export interface PostContact extends HttpRequest {
	data: null;
}

export interface GetProjects extends HttpRequest {
	data: any;
}

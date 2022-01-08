interface HttpRequest {
	endpoint: string;
	signal?: AbortSignal;
}

export interface GetRequestOptions extends HttpRequest {}
export interface PostRequestOptions extends HttpRequest {
	body: Record<string, any>;
}

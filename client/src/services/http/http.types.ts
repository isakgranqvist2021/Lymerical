interface HttpRequest {
	endpoint: string;
	signal?: AbortSignal;
	baseUrl?: string;
	headers?: Record<string, string>;
}

export interface GetRequestOptions extends HttpRequest {}
export interface PostRequestOptions extends HttpRequest {
	body: Record<string, any>;
}

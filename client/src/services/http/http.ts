import { GetRequestOptions, PostRequestOptions } from './http.types';

const serverAddr = process.env.REACT_APP_SERVER_ADDR + '/api';

export const GET = async (options: GetRequestOptions) => {
	const { endpoint, signal, baseUrl = serverAddr, headers } = options;

	const url = baseUrl + endpoint;

	try {
		const response = await fetch(url, {
			method: 'GET',
			signal,
			headers: {
				'Content-Type': 'application/json',
				...headers,
			},
		});

		return await response.json();
	} catch (err: any) {
		return Promise.reject({
			message: err.message,
			success: false,
			data: null,
		});
	}
};

export const POST = async (options: PostRequestOptions) => {
	const { endpoint, signal, body, baseUrl = serverAddr, headers } = options;

	const url = baseUrl + endpoint;

	try {
		const response = await fetch(url, {
			method: 'POST',
			signal,
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
				...headers,
			},
		});

		return await response.json();
	} catch (err: any) {
		return Promise.reject({
			message: err.message,
			success: false,
			data: null,
		});
	}
};

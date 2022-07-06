import { API } from './config.js';

export function api(method, resource, data) {
	return fetch(`${API}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}

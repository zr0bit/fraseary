import { getAll } from '$q/list-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function get({ params }) {
	return getAll().then((lists) => {
		return {
			body: {
				lists
			}
		};
	});
}

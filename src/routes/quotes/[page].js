import { getPagQuotes } from '$q/quote-query.js';

/** @type {import('./__types/[id]').RequestHandler} */
export function get({ params }) {
	const nPage = parseInt(params.page, 10);
	const nItems = 10;
	return getPagQuotes({}, nItems, nPage).then((data) => {
		return {
			body: data
		};
	});
}

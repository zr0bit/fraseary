import { quotesByTag } from '$q/quote-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function GET({ params }) {
	const slug = params.slug;

	return quotesByTag(slug).then((data) => {
		return {
			body: {
				data
			}
		};
	});
}

import { getQuoteBy } from '$q/quote-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function GET({ params }) {
	const slug = params.slug;
	return getQuoteBy({ slug: slug }).then((quote) => {
		return {
			body: {
				quote
			}
		};
	});
}

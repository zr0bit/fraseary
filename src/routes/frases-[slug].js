import { quotesByList } from '$q/quote-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function GET({ params }) {
	let slug = params.slug;
	slug = `frases-${slug}`;

	return quotesByList(slug).then((data) => {
		return {
			body: {
				data
			}
		};
	});
}

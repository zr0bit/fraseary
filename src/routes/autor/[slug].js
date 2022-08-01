import { getAuthorBy } from '$q/author-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function GET({ params }) {
	const slug = params.slug;
	return getAuthorBy({ slug: slug }).then((author) => {
		return {
			body: {
				author
			}
		};
	});
}

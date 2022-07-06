import { getPagQuotes } from '$q/quote-query.js';
import { getPopularTags } from '$q/tag-query.js';

/** @type {import('./__types/[id]').RequestHandler} */
export function get({ params }) {
	return Promise.all([getPagQuotes({}, 10, 1), getPopularTags()]).then(
		([quotes, tags]) => {
			return {
				body: {
					quotes,
					tags
				}
			};
		}
	);
}

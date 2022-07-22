import authors from './_authors.json';

/** @type {import('./__types/[slug]').RequestHandler} */
export function get() {
	return {
		body: {
			authors
		}
	};
}

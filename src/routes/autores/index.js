import authors from './_authors.json';

/** @type {import('./__types/[slug]').RequestHandler} */
export function GET() {
	return {
		body: {
			authors
		}
	};
}

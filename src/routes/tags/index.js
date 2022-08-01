import tags from './_tags.json';

/** @type {import('./__types/[slug]').RequestHandler} */
export function GET() {
	return {
		body: {
			tags
		}
	};
}

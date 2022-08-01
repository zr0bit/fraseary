import { getAllByLetter } from '$q/author-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function GET({ params }) {
	const letter = params.letter;
	return getAllByLetter(letter, null).then((authors) => {
		return {
			body: {
				authors,
				letter
			}
		};
	});
}

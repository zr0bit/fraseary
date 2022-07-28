import { getAllByLetter } from '$q/author-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function get({ params }) {
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

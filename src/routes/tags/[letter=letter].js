import { getAllByLetter } from '$q/tag-query.js';

/** @type {import('./__types/[slug]').RequestHandler} */
export function get({ params }) {
	const letter = params.letter;
	return getAllByLetter(letter, null).then((tags) => {
		return {
			body: {
				tags,
				letter
			}
		};
	});
}

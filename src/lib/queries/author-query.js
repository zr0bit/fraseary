import Author from '../models/author.js';
import { letters } from '../utils.js';

export function countAuthors(arg = {}) {
	return Author.estimatedDocumentCount(arg).exec();
}

export function getAuthorBy(arg = {}) {
	return Author.findOne(arg)
		.select('name slug bio metas')
		.populate({
			path: 'quotes',
			select: 'author size slug content tags -_id',
			populate: {
				path: 'tags',
				select: 'slug name -_id'
			}
		})
		.exec();
}

export function getAllByLetter(letter = 'a', limit = 10) {
	let regExp = new RegExp(`^${letter}`);
	let arg = { name: { $regex: regExp, $options: 'i' }, score: { $gte: -1 } };

	return Author.find(arg)
		.limit(limit)
		.sort('name')
		.select('name slug -_id')
		.exec();
}

export function getMainAuthors(limit = 10) {
	let letterFns = letters.map((a) => getAllByLetter(a, limit));

	return Promise.all(letterFns).then((authors) => {
		return letters.map((a, i) => {
			return { letter: a, authors: authors[i] };
		});
	});
}

// Admin queries
export function getAuthorsAdmin(
	arg = {},
	start = 0,
	end = 10,
	sort = '-createdAt'
) {
	return Author.find(arg)
		.limit(end - start)
		.sort(sort)
		.skip(start)
		.select('name slug createdAt')
		.exec();
}

export function getAuthorByIdAdmin(id) {
	return Author.findOne({ _id: id }).exec();
}

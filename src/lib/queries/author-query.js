import Author from '../models/author.js';

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

import List from '../models/list.js';

export function count(arg = {}) {
	return List.estimatedDocumentCount(arg).exec();
}

export function listBySlug(slug) {
	return List.findOne({ slug }).select('title slug _id').exec();
}

export function idBySlug(slug) {
	return List.findOne({ slug }).select('_id').exec();
}

export function getAll(arg = {}, nItems = 10, nPage = 1) {
	return List.find(arg)
		.limit(nItems)
		.sort({ createdAt: -1 })
		.skip((nPage - 1) * nItems)
		.select('title slug detail')
		.exec();
}

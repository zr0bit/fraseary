import Tag from '../models/tag.js';

export function countTags(arg = {}) {
	return Tag.estimatedDocumentCount(arg).exec();
}

export function getTagBySlug(slug) {
	return Tag.findOne({ slug }).select('name slug _id').exec();
}

export function getPopularTags() {
	return Tag.find().limit(10).select('name slug').exec();
}

// Admin queries
export function getTagsAdmin(
	arg = {},
	start = 0,
	end = 10,
	sort = '-createdAt'
) {
	return Tag.find(arg)
		.limit(end - start)
		.sort(sort)
		.skip(start)
		.select('name slug recurrence createdAt')
		.exec();
}

export function getTagByIdAdmin(id) {
	return Tag.findOne({ _id: id }).exec();
}

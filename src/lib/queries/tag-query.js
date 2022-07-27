import Tag from '../models/tag.js';
import { letters } from '../utils.js';

export function countTags(arg = {}) {
	return Tag.estimatedDocumentCount(arg).exec();
}

export function getTagBySlug(slug) {
	return Tag.findOne({ slug }).select('name slug _id').exec();
}

export function getPopularTags() {
	return Tag.find().limit(10).select('name slug').exec();
}

export function getAllByLetter(letter = 'a', limit = 10) {
	let regExp = new RegExp(`^${letter}`);
	let arg = { name: { $regex: regExp, $options: 'i' }, score: { $gte: -1 } };

	return Tag.find(arg)
		.limit(limit)
		.sort('name')
		.select('name slug -_id')
		.exec();
}

export function getMainTags(limit = 10) {
	let letterFns = letters.map((a) => getAllByLetter(a, limit));

	return Promise.all(letterFns).then((tags) => {
		return letters.map((a, i) => {
			return { letter: a, tags: tags[i] };
		});
	});
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

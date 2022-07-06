import Quote from '../models/quote.js';
import { getTagBySlug } from './tag-query.js';

export function countQuotes(arg = {}) {
	return Quote.estimatedDocumentCount(arg).exec();
}

export function getQuoteBy(arg = {}) {
	return Quote.findOne(arg)
		.select('slug content tags author size metas')
		.populate('author', 'name slug')
		.populate('tags', 'name slug')
		.exec();
}

export function getQuotes(arg = {}, nItems = 10, nPage = 1) {
	return Quote.find(arg)
		.limit(nItems)
		.sort({ createdAt: -1 })
		.skip((nPage - 1) * nItems)
		.select('slug content author tags size')
		.populate('tags', 'name slug')
		.populate('author', 'name slug')
		.exec();
}

export function getPagQuotes(arg = {}, nItems = 10, nPage = 1) {
	return Promise.all([getQuotes(arg, nItems, nPage), countQuotes(arg)]).then(
		([quotes, count]) => {
			const next = count > nItems * nPage ? nPage + 1 : null;
			return {
				count,
				next,
				quotes
			};
		}
	);
}

export function getPagQuotesByTag(slug, nItems = 10, nPage = 1) {
	return new Promise((resolve) => {
		getTagBySlug(slug).then((tag) => {
			getPagQuotes({ tags: tag._id }, nItems, nPage).then((quotes) => {
				resolve({
					tag,
					quotes: quotes.quotes,
					next: quotes.next,
					count: quotes.count
				});
			});
		});
	});
}
// Collection query
export function getQuotes2(arg = {}, start = 0, end = 0) {
	return Quote.find(arg)
		.limit(end - start)
		.skip(start)
		.sort({ sizeInt: 1, score: 1 })
		.select('slug content author tags size')
		.populate('tags', 'name slug')
		.populate('author', 'name slug')
		.exec();
}
export function getPagShortQuotes(arg = {}, start = 0, end = 10, page = 0) {
	return Promise.all([getQuotes2(arg, start, end), countQuotes(arg)]).then(
		([quotes, count]) => {
			const next = count > end ? page + 1 : 1;
			return {
				count,
				next,
				quotes
			};
		}
	);
}

// Admin queries
export function getQuotesAdmin(
	arg = {},
	start = 0,
	end = 10,
	sort = '-createdAt'
) {
	return Quote.find(arg)
		.limit(end - start)
		.sort(sort)
		.skip(start)
		.select('slug content sizeInt author createdAt')
		.exec();
}

export function getQuoteByIdAdmin(id) {
	return Quote.findOne({ _id: id }).exec();
}

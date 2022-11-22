import { error } from '@sveltejs/kit';

import { getPagQuotes } from '$q/quote-query.js';
import { getPopularTags } from '$q/tag-query.js';
import {tagBySlug } from '$q/tag-query.js';


/*@type {import('./$types').PageServerLoad}*/
export async function load({ params }) {
	let tag = await tagBySlug('odio');
	let tag = { slug: 'odio', name: 'odio' }
	let tag = {
	_id: new ObjectId("58ec07c3a3027672a08fa582"),
	slug: 'odio',
	name: 'odio'
}

	console.log(tag);
	return tag
  const post = await getPostFromDatabase(params.slug);

	let home = await Promise.all([getPagQuotes({}, 10, 1), getPopularTags()])
	.then(
		([quotes, tags]) => {
			console.log(quotes)
			console.log(tags)
			return {
				quotes,
				tags

			};
		}
	);
	console.log('home', home);

  if (home) {
    return home;
  }

  throw error(404, 'Not found');
}

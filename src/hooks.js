import svg from '$lib/html.js';
import '$lib/db.js';

export function handle({ event, resolve }) {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%svg%', svg)
	});
}

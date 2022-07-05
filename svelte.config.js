import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			precompress: true
		}),
		alias: {
			$ui: 'src/ui',
			$q: 'src/lib/queries',
			$utils: 'src/utils'
		}
	}
};

export default config;

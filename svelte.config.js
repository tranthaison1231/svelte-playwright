import serverless from '@yarbsemaj/adapter-lambda';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: serverless()
	}
};

export default config;

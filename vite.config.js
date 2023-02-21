import unocss from 'unocss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { extractorSvelte } from 'unocss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		unocss({
			extractors: [extractorSvelte]
		})
	],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.ts'],
		setupFiles: ['./setupTest.js']
	}
};

export default config;

import { sveltekit } from '@sveltejs/kit/vite';
import unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), unocss()],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.ts'],
		setupFiles: ['./setupTest.js']
	}
};

export default config;

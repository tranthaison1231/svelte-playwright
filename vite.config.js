import unocss from 'unocss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import {
	extractorSvelte,
	presetAttributify,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		unocss({
			presets: [
				presetUno({
					attributifyPseudo: true
				}),
				presetTypography(),
				presetAttributify()
			],
			transformers: [transformerDirectives(), transformerVariantGroup()],
			extractors: [extractorSvelte],
			theme: {
				colors: {
					primary: 'blue'
				},
				maxWidth: {
        	container: '1240px',
      	},
			}
		}),
		sveltekit()
	],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.ts'],
		setupFiles: ['./setupTest.js']
	}
};

export default config;

import {
	defineConfig,
	presetAttributify,
	presetUno,
	presetTypography,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	presets: [
		presetAttributify(),
		presetUno({
			attributifyPseudo: true
		}),
		presetTypography()
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
});

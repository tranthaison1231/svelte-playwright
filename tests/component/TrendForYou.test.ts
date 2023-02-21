import { test, expect } from '@playwright/experimental-ct-svelte';
import TrendForYou from '$lib/TrendForYou.svelte';

test('Test TrendForYou.svelte', async ({ mount }) => {
	const component = await mount(TrendForYou);
	await expect(component).toContainText('Trend for you');
});

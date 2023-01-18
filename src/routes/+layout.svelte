<script context="module" lang="ts">
	import '../app.css';
	import 'uno.css';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import Sidebar from '$lib/Sidebar.svelte';
	import TrendForYou from '$lib/TrendForYou.svelte';
</script>

<div class="grid grid-cols-3 gap-3 w-full h-screen">
	<Sidebar />
	<slot />
	<TrendForYou />
</div>

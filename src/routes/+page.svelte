<script lang="ts">
	import NewFeeds from '$lib/NewFeeds.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import TrendForYou from '$lib/TrendForYou.svelte';
</script>

<div class="grid grid-cols-3 gap-3 w-full h-screen">
	<Sidebar />
	<NewFeeds />
	<TrendForYou />
</div>

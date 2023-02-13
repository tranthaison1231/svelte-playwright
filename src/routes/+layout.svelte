<script context="module" lang="ts">
	import 'uno.css';
	import '../app.css';
</script>

<script lang="ts">
	import RightSideBar from '$lib/RightSideBar.svelte';
	import LeftSidebar from '$lib/LeftSidebar.svelte';
</script>

<div class="grid grid-cols-3 gap-3 w-full h-screen">
	<LeftSidebar />
	<slot />
	<RightSideBar />
</div>

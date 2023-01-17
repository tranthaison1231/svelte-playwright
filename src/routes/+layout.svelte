<script context="module" lang="ts">
	import '../app.css';
	import 'uno.css';
</script>

<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<slot />
{:else}
	<div class="flex items-center h-screen w-full justify-center">
		<button> <a href="/auth/signin" data-sveltekit-preload-data="off">Sign in</a> </button>
	</div>
{/if}

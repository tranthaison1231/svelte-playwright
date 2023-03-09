<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if !$page.data.session}
	<div absolute bg-sky-500 bottom-0 w-screen flex justify-around p-2>
		<p>Don't miss what's happening</p>
		<button> <a href="/auth/signin" data-sveltekit-preload-data="off">Sign in</a> </button>
	</div>
{/if}

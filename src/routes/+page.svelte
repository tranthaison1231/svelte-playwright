<script context="module" lang="ts">
	import Header from '$lib/header/Header.svelte';
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
	<Header />
	<h1>
		<span class="block relative w-full">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img class="absolute w-full h-full block top-0" src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>
	</h1>
	<Counter />
</section>

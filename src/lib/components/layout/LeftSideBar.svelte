<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import NavigationItem from '../common/NavigationItem.svelte';
</script>

<div flex="~ col" p-3 h-full gap-6>
	<a href="/">
		<img alt="Logo" src="/twitter-logo.png" width="32" />
	</a>
	<NavigationItem title="Explore" url="/explore">
		<div slot="icon">aaa</div>
	</NavigationItem>
	{#if $page.data.session}
		<NavigationItem title="Messages" url="/messages">
			<div slot="icon">aaa</div>
		</NavigationItem>
		<NavigationItem title="Notifications" url="/notifications">
			<div slot="icon">aaa</div>
		</NavigationItem>
		<NavigationItem title="Profile" url="/profile">
			<div slot="icon">aaa</div>
		</NavigationItem>
		<li>
			<div>
				<div>{$page.data.session?.user?.name}</div>
				<button on:click={() => signOut()}> logout </button>
			</div>
		</li>
	{:else}
		<NavigationItem title="Settings" url="aa">
			<div slot="icon">aaa</div>
		</NavigationItem>
	{/if}
</div>

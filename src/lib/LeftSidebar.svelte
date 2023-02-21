<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div border="0.2 solid">
	<ul>
		<li><a href="/">Twitter</a></li>
		<li><a href="/home">Home</a></li>
		<li><a href="/explore">Explore</a></li>
		{#if $page.data.session}
			<li><a href="/messages">Messages</a></li>
			<li><a href="/notifications">Notifications</a></li>
			<li><a href="/profile">Profile</a></li>
			<li>
				<div>
					<div>{$page.data.session?.user?.name}</div>
					<button on:click={() => signOut()}> logout </button>
				</div>
			</li>
		{:else}
			<li><a href="/settings">Setting</a></li>
		{/if}
	</ul>
</div>
{#if !$page.data.session}
	<div absolute bg-sky-500 bottom-0 w-full flex justify-around p-2>
		<p>Don't miss what's happening</p>
		<button> <a href="/auth/signin" data-sveltekit-preload-data="off">Sign in</a> </button>
	</div>
{/if}

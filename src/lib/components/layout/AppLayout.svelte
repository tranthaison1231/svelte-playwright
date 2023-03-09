<script lang="ts">
	import Footer from './Footer.svelte';
	import LeftSideBar from './LeftSideBar.svelte';
	import RightSideBar from './RightSideBar.svelte';
</script>

<div w-screen h-screen bg-white>
	<div class="max-w-container mx-auto" bg-white grid="~ cols-14" w-full h-screen>
		<div col-span-3 border-r="~ solid gray-200">
			<LeftSideBar />
		</div>
		<div col-span-11 grid="~ cols-12">
			<div col-span-7 bg-white>
				<slot />
			</div>
			<div col-span-5 border-l="~ solid gray-200">
				<RightSideBar />
			</div>
		</div>
	</div>
	<Footer />
</div>

<script lang="ts">
	interface $$Props {
		title: string;
		url: string;
		class?: string;
	}

	interface $$Slots {
		default: {};
		icon: {};
	}

	export let title = '',
		url = '';
</script>

<a href={url} text="~ xl black" no-underline font-bold flex gap-6 class={$$restProps.class}>
	<slot name="icon" />
	{title}
</a>

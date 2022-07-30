<script>
	import { lettersSlug } from '$lib/utils.js';
	import Linklist from '$ui/link-list.svelte';

	export let baseUrl;
	export let letter;
</script>

<nav class="letters">
	<Linklist items={lettersSlug} name="name" url={baseUrl} compare={letter} />
</nav>

<style>
	.letters {
		max-width: 870px;
		padding: 16px 8px 16px 8px;
		margin: 0 auto;
		overflow: hidden;
	}
	.letters :global(ul) {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.letters :global(li) {
		display: inline-block;
		width: 24px;
		height: 24px;
		margin: 4px 4px 4px;
		list-style: none;
		text-transform: uppercase;
		vertical-align: middle;
		text-align: center;
	}

	.letters :global(a) {
		padding: 2px 4px;
		font-weight: 600;
		font-size: 16px;
		text-decoration: none;
		border-radius: 4px;
		border: 1px solid #fff;
	}

	.letters :global(a):hover {
		border: 1px solid black;
	}
	.letters :global(a.active) {
		background: black;
		color: white;
		border: 1px solid black;
	}
</style>

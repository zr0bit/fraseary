<script>
	import LinkList from '$ui/link-list.svelte';
	import { lettersSlug } from '$lib/utils.js';
	export let baseUrl;
</script>

<nav class="letters">
	<LinkList items={lettersSlug} name="name" url={baseUrl} />
</nav>

<style>
	.letters :global(ul) {
		list-style: none;
	}
	.letters :global(li) {
		list-style: none;
		text-transform: uppercase;
		margin-right: 8px;
	}

	.letters :global(a) {
		color: red;
		float: left;
		margin-right: 8px;
		text-decoration: none;
	}
</style>

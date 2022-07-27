<script>
	import LinkList from '$ui/link-list.svelte';
	import { lettersSlug } from '$lib/utils.js';
	export let baseUrl;
</script>

<nav class="letters">
	<LinkList items={lettersSlug} name="name" url={baseUrl} />
</nav>

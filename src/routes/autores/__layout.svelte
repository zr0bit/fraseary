<script>
	import { letters } from '$lib/utils.js';
	import LinkList from '$ui/link-list.svelte';

	const letterObjs = letters.map((a) => ({ name: a, slug: a }));
</script>

<div class="authors">
	<nav class="letters">
		<LinkList items={letterObjs} name="name" url="/autores/" />
	</nav>
	<section class="main">
		<slot />
	</section>
</div>

<style>
	.authors {
		max-width: inherit;
	}
	.authors :global(ul) {
		list-style: none;
	}

	.letters :global(li) {
		float: left;
		text-transform: uppercase;
		margin-right: 8px;
	}

	.main {
		clear: both;
	}
	.main :global(h3) {
		text-transform: uppercase;
	}
</style>

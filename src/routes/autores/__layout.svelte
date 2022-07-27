<script>
	import Letters from '$ui/letters.svelte';
</script>

<div class="authors">
	<Letters baseUrl="/autores" />
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

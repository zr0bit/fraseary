<script>
	import Letters from '$ui/letters.svelte';
</script>

<div class="tags">
	<Letters baseUrl="/tags" />
	<section class="main">
		<slot />
	</section>
</div>

<style>
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

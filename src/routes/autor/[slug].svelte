<script>
	import Divider from '$ui/divider.svelte';
	import Author from '$ui/author-detail.svelte';
	import Cats from '$ui/categories.svelte';
	import Quote from '$ui/quote-item.svelte';

	export let author;
</script>

<svelte:head>
	<title>{author.metas.title}</title>
</svelte:head>

<Divider>
	<Author slot="left" {author} />
	<Cats slot="right" />
	<svelte:fragment slot="main">
		<div class="quotes-list">
			{#each author.quotes as quote}
				<Quote {quote} {author} />
			{/each}
		</div>
	</svelte:fragment>
</Divider>

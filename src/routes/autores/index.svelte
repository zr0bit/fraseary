<script>
	import LinkList from '$ui/link-list.svelte';
	import Card from '$ui/card.svelte';
	export let authors;
</script>

<svelte:head>
	<title>Todos los autores</title>
</svelte:head>

{#each authors as list}
	<div class="authors-list">
		<Card>
			<h3>{list.letter}</h3>
			<LinkList items={list.authors} name="name" url="/autor" />
		</Card>
	</div>
{/each}

<style>
	.authors-list {
		width: 100%;
		display: grid;
		grid-auto-columns: minmax(15rem, auto);
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		grid-gap: 1rem;
	}
</style>

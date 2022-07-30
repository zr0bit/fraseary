<script>
	import Letters from '$ui/letters.svelte';
	import LinkList from '$ui/link-list.svelte';
	import Card from '$ui/card.svelte';
	export let authors;
</script>

<svelte:head>
	<title>Todos los autores</title>
</svelte:head>

<Letters baseUrl="/autores" letter={null} />
<div class="abc-col">
	{#each authors as list}
		<Card>
			<h3>{list.letter}</h3>
			<LinkList items={list.authors} name="name" url="/autor" compare={null} />
		</Card>
	{/each}
</div>

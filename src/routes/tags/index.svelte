<script>
	import Letters from '$ui/letters.svelte';
	import Card from '$ui/card.svelte';

	import LinkList from '$ui/link-list.svelte';
	export let tags;
</script>

<svelte:head>
	<title>Todas las etiquetas</title>
</svelte:head>
<Letters baseUrl="/tags" letter={null} />
<div class="abc-col">
	{#each tags as list}
		<Card>
			<h3>{list.letter}</h3>
			<LinkList items={list.tags} name="name" url="/tag" compare={null} />
		</Card>
	{/each}
</div>

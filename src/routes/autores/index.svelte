<script>
	import LinkList from '$ui/link-list.svelte';
	export let authors;
</script>

<svelte:head>
	<title>Todos los autores</title>
</svelte:head>

{#each authors as list}
	<div class="authors-list">
		<h3>{list.letter}</h3>
		<LinkList items={list.authors} name="name" url="/autor" />
	</div>
{/each}

<script>
	export let authors;
	export let letter;
</script>

<svelte:head>
	<title>Autores con la letra: {letter}</title>
</svelte:head>

<p>{JSON.stringify(authors)}</p>

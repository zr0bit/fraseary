<script>
	// import Quote from '$ui/quote-detail.svelte';
	export let data;
</script>

<svelte:head>
	<title>frases de</title>
</svelte:head>

<h1>Detalle de la lista de frases</h1>
<p>{JSON.stringify(data)}</p>

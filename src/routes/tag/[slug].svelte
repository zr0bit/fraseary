<script>
	// import Quote from '$ui/quote-detail.svelte';
	export let data;
</script>

<svelte:head>
	<title>frases etiqueta XD</title>
</svelte:head>

<h1>Detalle de la etiqueta</h1>
<p>{JSON.stringify(data)}</p>

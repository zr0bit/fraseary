<script>
	import Quote from '$ui/quote-detail.svelte';
	export let quote;
</script>

<svelte:head>
	<title>{quote.metas.title}</title>
</svelte:head>

<Quote {quote} />

<script>
	import Card from '$ui/card.svelte';
	import Letters from '$ui/letters.svelte';
	import Linklist from '$ui/link-list.svelte';
	export let tags;
	export let letter;
</script>

<svelte:head>
	<title>Etiquetas con la letra: {letter}</title>
</svelte:head>

<Letters baseUrl="/tags" {letter} />

<Card>
	<Linklist
		items={tags}
		name="name"
		url="/tag"
		class="abc-col"
		compare={null}
	/>
</Card>

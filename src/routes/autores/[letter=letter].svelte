<script>
	import Card from '$ui/card.svelte';
	import Letters from '$ui/letters.svelte';
	import Linklist from '$ui/link-list.svelte';

	export let authors;
	export let letter;
</script>

<svelte:head>
	<title>Autores con la letra: {letter}</title>
</svelte:head>

<Letters baseUrl="/autores" {letter} />

<Card>
	<Linklist
		items={authors}
		name="name"
		url="/autor"
		class="abc-col"
		compare={null}
	/>
</Card>

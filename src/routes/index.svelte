<script>
	import { setContext } from 'svelte';

	import { list, authors } from './data.js';
	import Landing from '$ui/landing.svelte';
	import Divider from '$ui/divider.svelte';

	import Colls from '$ui/collections-menu.svelte';
	import Aside from '$ui/aside.svelte';
	import Quotes from '$ui/quotes-list.svelte';

	export let tags;
	export let quotes;

	const data = { list, authors };

	let allQuotes = quotes.quotes;
	let next = quotes.next;
	const url = `/quotes`;

	setContext('from', 'HOME');
</script>

<svelte:head>
	<title>Fraseary: Frases Palabras Citas Refranes y Proverbios></title>
</svelte:head>

<Landing {tags} />

<Divider>
	<Colls items={data.list} slot="left" />
	<Aside slot="right" />
	<Quotes bind:quotes={allQuotes} {next} {url} slot="main" />
</Divider>

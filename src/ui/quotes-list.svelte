<script>
	import { getContext, onMount } from 'svelte';

	import Quote from './quote-item.svelte';
	import LoadingQuote from './loading-quote.svelte';

	export let next;
	export let quotes;
	export let url;

	let isLoading = false;

	const from = getContext('from');

	let loadingByScroll = true;
	let scrollArea;
	let queue = false;
	let observer;
	let options = {
		root: scrollArea,
		rootMargin: '0px',
		threshold: 0.5
	};

	async function handleIntersection(event) {
		if (queue) {
			return;
		}

		const [entries] = event;
		loadingByScroll = true;
		try {
			if (!entries.isIntersecting || !next) {
				loadingByScroll = false;
				return;
			}

			if (queue === false) {
				queue = true;
				fetch(`${url}/${next}`)
					.then((response) => response.json())
					.then((data) => {
						quotes = [...quotes, ...data.quotes];
						next = data.next;
						loadingByScroll = false;
						queue = false;
					});
			}
		} catch (error) {
			loadingByScroll = false;
			console.log(error);
		}
	}
	onMount(() => {
		loadingByScroll = false;
		if (from === 'HOME') {
			observer = new IntersectionObserver(handleIntersection, options);
			observer.observe(document.querySelector('.foot-scroll'));
		}
	});
</script>

<div id="scrollArea" class="quotes-list" bind:this={scrollArea}>
	{#if !isLoading}
		{#each quotes as quote}
			<Quote {quote} author={quote.author} />
		{/each}

		{#if loadingByScroll}
			<LoadingQuote />
		{/if}
	{:else}
		<span>Cargando...</span>
	{/if}
	<div class="foot-scroll" />
</div>

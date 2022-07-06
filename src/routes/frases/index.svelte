<script>
	export let lists;
</script>

<svelte:head>
	<title>Todas las frases</title>
</svelte:head>

<div class="main list">
	<h1>Todas las frases por temas</h1>
	<div class="cards list">
		{#each lists as list}
			<a href="/{list.slug}" class="card list">
				<h2>{list.title}</h2>
			</a>
		{/each}
	</div>
</div>

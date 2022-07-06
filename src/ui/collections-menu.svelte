<script>
	import Emoji from './emoji.svelte';
	import Icon from './icon.svelte';
	export let items = [];

	let expand;

	function switchMenu(e) {
		e.preventDefault();
		expand = !expand;
	}
</script>

<nav class="collections-menu" class:expanded={expand}>
	<ul class="collections-list">
		{#each items as item}
			<li>
				<a href="/{item.slug}">
					<Emoji name={item.icon} />
					<span>{item.name}</span>
				</a>
			</li>
		{/each}
		<li>
			<a href="/frases">Todas las frases</a>
		</li>
	</ul>

	<button class="btn-expand" on:click={switchMenu}>
		<Icon name="arrow" />
		<span class:hide={expand}>Más</span>
		<span class:hide={!expand}>Menos</span>
	</button>
</nav>

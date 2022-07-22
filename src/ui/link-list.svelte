<script>
	export let items, url, name;
</script>

<ul>
	{#each items as item}
		<li>
			<a href="{url}{item.slug}">{item[name]}</a>
		</li>
	{/each}
</ul>

<!-- <style>
	/* ul {
		list-style: none;
	} */
</style> -->

<script>
	export let items, url, name, compare;
</script>

<ul class={$$props.class}>
	{#each items as item}
		<li>
			<a href="{url}/{item.slug}" class:active={item[name] === compare}
				>{item[name]}</a
			>
		</li>
	{/each}
</ul>

<script>
	export let items;
</script>

<nav>
	<slot name="title" />
	<ul class="footer-list">
		{#each items as item}
			<li>
				<slot name="link" {item} />
			</li>
		{/each}
		<li>
			<slot name="more" />
		</li>
	</ul>
</nav>

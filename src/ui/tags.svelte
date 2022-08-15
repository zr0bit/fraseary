<script>
	export let cls = 'tags-quote';
	export let tags = [{ name: 'empty', slug: 'empty-slug' }];
</script>

<ul class={cls}>
	{#each tags as tag}
		<li class="tag">
			<a href="/tag/{tag.slug}">{tag.name}</a>
		</li>
	{/each}
</ul>

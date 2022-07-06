<script>
	import Tags from './tags.svelte';
	export let quote;
	export let author;
</script>

<div class="card-quote">
	<p class={quote.size}>
		<a class="link" href="/frase/{quote.slug}">
			{quote.content}
		</a>
	</p>
	<div class="meta">
		<h3 class="author">
			<span>—</span>
			<a href="/autor/{author.slug}">
				{author.name}
			</a>
		</h3>
		<Tags cls="tags-quote" tags={quote.tags} />
	</div>
</div>

<script>
	import Icon from './icon.svelte';
	import Tags from './tags.svelte';

	export let quote;
	const { author } = quote;
</script>

<div class="quote-detail">
	<div class="quote-main">
		<p class={quote.size}>
			{quote.content}
		</p>
		<div class="quote-meta">
			<h3 class="quote-author">
				<span>—</span>
				<a href="/autor/{author.slug}">
					{author.name}
				</a>
			</h3>
			<Tags tags={quote.tags} />
		</div>
	</div>
	<div class="quote-share">
		<span class="label">Compartir:</span>
		<div class="button-list">
			<a href="/#" class="btn-share">
				<Icon name="facebook" /><span>Facebook</span>
			</a>
			<a href="/#" class="btn-share">
				<Icon name="twitter" /><span>Twitter</span>
			</a>
			<button href="/#" class="btn-share">
				<Icon name="link" /><span>Copiar url</span>
			</button>
		</div>
	</div>
</div>

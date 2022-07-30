<section class="abc">
	<slot />
</section>

<style>
	.abc :global(h3) {
		text-transform: uppercase;
	}
	.abc :global(ul) {
		list-style: none;
		padding-left: 16px;
	}
	.abc :global(a) {
		text-decoration: none;
		font-size: 16px;
		padding: 4px 0;
		line-height: 32px;
	}
	:global(.abc-col) {
		width: 100%;
		display: grid;
		grid-auto-columns: minmax(15rem, auto);
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		grid-gap: 1rem;
	}
</style>

<script>
	const cats = [
		{ id: 2, name: 'Frases de amor', slug: 'frases-de-amor' },
		{ id: 4, name: 'Frases cortas', slug: 'frases-cortas' },
		{ id: 40, name: 'Frases de motivacion', slug: 'frases-de-motivacion' },
		{ id: 5, name: 'Frases inteligentes', slug: 'frases-inteligentes' },
		{ id: 6, name: 'Frases de amistad ', slug: 'frases-de-amistad' },
		{ id: 8, name: 'Frases de la vida ', slug: 'frases-de-la-vida' },
		{ id: 3, name: 'Frases tristes ', slug: 'frases-tristes' }
	];
</script>

<div class="sidebar-category">
	<ul>
		{#each cats as item}
			<li class="sidebar-list-item">
				<a href="/{item.slug}">
					{item.name}
				</a>
			</li>
		{/each}
	</ul>
</div>

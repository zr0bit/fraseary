<script>
	import Icon from './icon.svelte';
</script>

<form class="form-search" action="/search" method="get">
	<div class="wrap-input">
		<input class="hell" type="text" name="q" placeholder="Buscar aquí..." />
		<button type="submit" class="btn-search" aria-label="Buscar">
			<Icon name="magnifier" />
		</button>
	</div>
</form>

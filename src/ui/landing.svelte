<script>
	import Icon from './icon.svelte';
	import Tags from './tags.svelte';
	export let tags = [];
</script>

<div class="landing">
	<div class="inner">
		<h1>Busca <span>frases</span> que te inspiran.</h1>
		<form>
			<input type="text" />
			<Icon name="magnifier" />
		</form>
		<Tags cls="tags-landing" {tags} />
	</div>
</div>

<script>
	export let name = 'x';
</script>

<svg class="icon icon-{name}">
	<use xlink:href="#icon-{name}" />
</svg>

<style>
	:global(#svg) {
		display: none;
	}
</style>

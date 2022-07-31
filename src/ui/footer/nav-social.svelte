<script>
	import Icon from '$ui/icon.svelte';
	import { social } from '$ui/__uidata.js';
</script>

<nav class="nav-social">
	<h3>Síguenos</h3>
	<ul>
		{#each social as item}
			<li>
				<a href={item.url}>
					<Icon name={item.name} /><span>{item.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

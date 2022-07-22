<script>
	import Pic from './pic.svelte';
	import Icon from './icon.svelte';
	export let list = [];
	export let authors = [];
</script>

<footer class="footer">
	<div class="footer-inner">
		<nav>
			<h3>Colecciones de frases</h3>
			<ul class="footer-list">
				{#each list as item}
					<li>
						<a href="/{item.slug}">
							{item.name}
						</a>
					</li>
				{/each}
				<li>
					<a href="/frases">Todas las colecciones</a>
				</li>
			</ul>
		</nav>
		<nav>
			<h3>Autores destacados</h3>
			<ul class="footer-list">
				{#each authors as item}
					<li>
						<a href="/autor/{item.slug}">
							{item.name}
						</a>
					</li>
				{/each}
				<li>
					<a href="/autores">Todos los autores</a>
				</li>
			</ul>
		</nav>
		<nav class="nav-social">
			<h3>Síguenos</h3>
			<ul>
				<li>
					<a href="https://www.facebook.com/fraseary">
						<Icon name="facebook" /><span>Facebook</span>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/fraseary">
						<Icon name="twitter" /><span>Twitter</span>
					</a>
				</li>
				<li>
					<a href="https://www.pinterest.com/fraseary">
						<Icon name="pinterest" /><span>Pinterest</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<a href="/" class="link-logo">
		<Pic name="logo" />
	</a>
</footer>

<script>
	import { quotes, authors } from '$ui/__uidata.js';
	import Pic from '$ui/pic.svelte';
	import Nav from './nav.svelte';
	import NavSocial from './nav-social.svelte';
</script>

<footer class="footer">
	<div class="footer-inner">
		<Nav items={quotes}>
			<h3 slot="title">Frases populares</h3>
			<a slot="link" let:item href={item.slug}>{item.name}</a>
			<a slot="more" href="/frases">Todas las frases</a>
		</Nav>
		<Nav items={authors}>
			<h3 slot="title">Autores destacados</h3>
			<a slot="link" let:item href="/autor/{item.slug}">{item.name}</a>
			<a slot="more" href="/autores">Todos los autores</a>
		</Nav>
		<NavSocial />
	</div>
	<a href="/" class="link-logo">
		<Pic name="logo" />
	</a>
</footer>

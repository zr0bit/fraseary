<script>
	import Header from '$ui/header.svelte';
	import Footer from '$ui/footer/main.svelte';
	import { list, authors } from './data.js';
</script>

<Header />

<main class="main">
	<slot />
</main>

<Footer />

<style>
	.main {
		padding-top: 48px;
	}
</style>

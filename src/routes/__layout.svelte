<script>
	import Header from '$ui/header.svelte';
	import Footer from '$ui/footer.svelte';
	import { list, authors } from './data.js';
</script>

<Header />

<main class="main">
	<slot />
</main>

<Footer {list} {authors} />

<style>
	.main {
		padding-top: 48px;
	}
</style>

<script>
	import Header from '$ui/header.svelte';
	import Footer from '$ui/footer.svelte';
	import { list, authors } from './data.js';
</script>

<Header />

<main class="content-wrap">
	<slot />
</main>

<Footer {list} {authors} />

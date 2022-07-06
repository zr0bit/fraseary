<script>
	// import { link } from 'svelte-routing';
	import Icon from './icon.svelte';
	import Pic from './pic.svelte';
	import SearchForm from './search-form.svelte';
	// import SearchForm from './SearchForm.svelte';
	import HeaderMenu from './header-menu.svelte';

	let showMenu = false;
	let showSearch = false;

	function getMenu(e) {
		e.preventDefault();
		showMenu = !showMenu;
		if (showSearch) {
			showSearch = !showSearch;
		}
	}

	function getSearch(e) {
		e.preventDefault();
		showSearch = !showSearch;
		if (showMenu) {
			showMenu = !showMenu;
		}
	}
</script>

<header class="header" class:showMenu class:showSearch>
	<nav class="header-nav">
		<ul>
			<li class="header-menu" class:close={showMenu}>
				<a class="btn-icon" href="/#" on:click={getMenu}>
					<Icon name="menu" />
					<Icon name="x" />
				</a>
				<HeaderMenu />
			</li>

			<li class="header-search" class:close={showSearch}>
				<a class="btn-icon" href="/#" on:click={getSearch}>
					<Icon name="magnifier" />
					<Icon name="x" />
				</a>
				<SearchForm />
			</li>

			<li class="header-logo">
				<a href="/">
					<Pic name="logo" />
				</a>
			</li>
		</ul>
	</nav>

	<nav class="header-drop-down">
		{#if showMenu}
			<HeaderMenu />
		{/if}

		{#if showSearch}
			<SearchForm />
		{/if}
	</nav>
</header>

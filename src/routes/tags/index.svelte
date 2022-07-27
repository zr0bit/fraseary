<script>
	import LinkList from '$ui/link-list.svelte';
	export let tags;
</script>

{#each tags as list}
	<div class="tags-list">
		<h3>{list.letter}</h3>
		<LinkList items={list.tags} name="name" url="/tag" />
	</div>
{/each}

<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>{data.page.title}</h1>
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div>{@html data.page.content}</div>

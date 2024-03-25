<script lang="ts">
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	import type { DirectusFiles } from '$lib/types/directus';
	import type { PageData } from './$types';
	export let data: PageData;
	$: image = data.post.image as DirectusFiles | null | undefined;
</script>

{#if typeof image?.filename_disk === 'string'}
	<img src="{PUBLIC_DIRECTUS_URL}/assets/{image.filename_disk}?width=600" alt={image.description} />
{/if}
<h1>{data.post.title}</h1>
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div>{@html data.post.content}</div>

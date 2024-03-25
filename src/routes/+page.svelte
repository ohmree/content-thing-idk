<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.global.title}</h1>
<p>{data.global.description}</p>

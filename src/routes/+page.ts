import type { PageLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { readSingleton } from '@directus/sdk';
export const load = (async ({ fetch }) => {
	const directus = getDirectusInstance(fetch);
	return {
		global: await directus.request(readSingleton('global')),
	};
}) satisfies PageLoad;

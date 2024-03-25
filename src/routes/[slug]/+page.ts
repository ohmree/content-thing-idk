import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem } from '@directus/sdk';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const directus = getDirectusInstance(fetch);

	try {
		return {
			page: await directus.request(readItem('pages', params.slug)),
		};
	} catch (err) {
		throw error(404, 'Page not found');
	}
}) satisfies PageLoad;

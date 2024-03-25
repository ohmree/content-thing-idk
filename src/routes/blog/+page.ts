import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const directus = getDirectusInstance(fetch);
	return {
		posts: await directus.request(
			readItems('posts', {
				fields: ['slug', 'title', 'publish_date', { author: ['name'] }],
				sort: ['-publish_date'],
			}),
		),
	};
}) satisfies PageLoad;

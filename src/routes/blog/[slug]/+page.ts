import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem } from '@directus/sdk';
import type { PageLoad } from './$types';
export const load = (async ({ fetch, params }) => {
	const directus = getDirectusInstance(fetch);
	try {
		return {
			post: await directus.request(
				readItem('posts', params.slug, {
					fields: [
						'*',
						{
							author: ['*'],
							image: ['*'],
							// XXX: this way causes a type error.
							// '*': ['*']
						},
					],
				}),
			),
		};
	} catch (err) {
		error(404, 'Post not found');
	}
}) satisfies PageLoad;

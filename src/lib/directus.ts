import { createDirectus, rest, type ClientGlobals } from '@directus/sdk';
// import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
import type { CustomDirectusTypes } from './types/directus';

export default function getDirectusInstance(fetch?: ClientGlobals['fetch']) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus<CustomDirectusTypes>(PUBLIC_DIRECTUS_URL, options).with(rest());
	return directus;
}

import { browser } from '$app/environment';
import sql from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log(browser);
	const posts = await sql`/* SQL */
		select * from posts
	`;
	return {
		posts
	};
};

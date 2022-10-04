import { browser } from '$app/environment';
import sql from '$lib/db';
import type { Post } from '$lib/interfaces';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log(browser);
	const posts = await sql<Post[]>`/* SQL */
		select * from posts
	`;
	return {
		posts
	};
};

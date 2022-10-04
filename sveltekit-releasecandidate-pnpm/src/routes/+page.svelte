<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="max-w-2xl mx-auto bg-surface-500/90 rounded-lg mt-8 p-4">
	<form>
		<input type="text" />
	</form>
</div>

<ul class="list max-w-2xl mx-auto bg-surface-50/90 rounded-lg mt-8">
	{#each data.posts as post}
		<li>
			<span class="badge bg-accent-200">{post.id}</span>
			<p>{post.content}</p>
		</li>
	{/each}
</ul>

<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;

</script>

<h1>{data.posts[0].created_at.toLocaleString()}</h1>

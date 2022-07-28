<script>
import PostListItem from '../components/PostListItem.svelte'
export let posts
</script>

<ul>
  {#each posts as post}
    <PostListItem metadata={post.metadata} path={post.path} />
  {/each}
</ul>


<style lang="postcss">
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
</style>
<script>
export let metadata
export let path

const { title, category, tags } = metadata
const date = new Date(metadata.date)

const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]

const d = `${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}`
</script>

<li>
  <a href={path}><h2>{title}</h2></a>
  <h3 class="subdate">{d}</h3>
</li>


<style lang="postcss">
  li {
    margin: 0 0 4rem;
    /* padding-left: 1rem; */
    filter: drop-shadow(-1rem -1rem 2rem #222222);
    /* border-left: solid 4px #101010; */
  }

  h2 {
    margin: 1rem 0 0;
  }

  h3 {
    margin: 0.4rem 0;
    /* padding-left: 1.6rem; */
  }

  .subdate {
    font-weight: 300;
    font-style: italic;
  }
</style>
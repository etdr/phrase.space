<script>
import '../app.css'
</script>

<header>
  <a href="/"><h1 class="site-title">phrase space</h1></a>
  <h3 class="site-subtitle">by Eli T. Drumm</h3>
</header>

<main>
  <slot/>
</main>


<style lang="postcss">
  header {
    margin: 0 0 6rem;
  }

  .site-title {
    font-weight: 300;
    font-size: 4rem;
    margin: 0 2rem 0;
    letter-spacing: 0.2rem;
  }

  .site-subtitle {
    font-style: italic;
    margin: 0 4rem 2rem;
  }

  main {
    margin: 0 6rem 2rem;
  }
</style>
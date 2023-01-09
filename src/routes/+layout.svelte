<script>
  import "./styles.css";
</script>

<svelte:head>
  <title>Gala Image</title>
</svelte:head>

<main>
  <slot />
</main>

<style>
  main {
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

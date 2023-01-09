<script>
  import { page } from "$app/stores";
  import { lang } from "$lib/stores";
  import Header from "./Header.svelte";
</script>

<section>
  <Header />

  <pre>{$page.url.pathname};
lang: {$lang};</pre>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>

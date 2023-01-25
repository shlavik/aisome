<script>
  import { page } from "$app/stores";
  import { answers, lang } from "$lib/stores";

  import Header from "./Header.svelte";
</script>

<section>
  <Header />

  <dl>
    <dt>url:</dt>
    <dd>{$page.url.pathname}</dd>

    <dt>lang:</dt>
    <dd>{$lang}</dd>
  </dl>

  <pre>{JSON.stringify($answers, null, 2)}</pre>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  dl {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 1em;
    padding: 1em;
    font-family: var(--font-monospace);
  }

  dd {
    margin-left: 0;
  }
</style>

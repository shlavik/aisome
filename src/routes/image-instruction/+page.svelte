<script>
  import { onMount } from "svelte";

  import { base } from "$app/paths";
  import { lang, log } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";

  import images from "../image-perception/images";
  import strings from "./strings.js";

  let linkEl;
  let visible = false;

  $: text = visible ? strings[$lang].yes : "";

  setTimeout(() => (visible = true), 3333);

  onMount(() => log("ins|start"));

  function next() {
    linkEl.click();
  }
</script>

<svelte:head>
  {#each images[0] as href}
    <link rel="preload" {href} as="image" />
  {/each}
</svelte:head>

<section>
  <h2>{strings[$lang].instruction}</h2>

  <p>{@html strings[$lang].images_presented}</p>

  <p>{@html strings[$lang].choose_pleasant}</p>

  <p>{@html strings[$lang].choose_unpleasant}</p>

  <p>{@html strings[$lang].repeat_each_set}</p>

  <dl>
    <dt>{@html strings[$lang].please_use}</dt>
    <dd>{@html strings[$lang].to_pleasant}</dd>
    <dd>{@html strings[$lang].to_unpleasant}</dd>
  </dl>

  <p>{strings[$lang].immediate_reaction}</p>

  <p>{@html strings[$lang].understand}</p>
</section>

<!-- svelte-ignore a11y-missing-content -->
<a style:display="none" href="{base}/image-perception" bind:this={linkEl} />

<MainButton {text} {visible} onClick={next} />

<style>
</style>

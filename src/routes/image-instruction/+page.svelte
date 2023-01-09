<script>
  import { base } from "$app/paths";
  import { answers } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";
  import images from "../image-perception/images";

  let linkEl;
  let visible = false;

  setTimeout(() => (visible = true), 3333);

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
  <h2>Instruction</h2>

  <p>
    <strong>80 images</strong> in <strong>10 separate sets</strong> will be presented.
  </p>

  <p>
    You need to choose <strong>2 images</strong> that are most pleasant
    <strong>(👍)</strong>. First, the one that you at least relatively prefer to
    everyone else, then another image that will seem the most likeable among the
    remaining ones.
  </p>

  <p>
    Then you need to choose <strong>2 images</strong> that are the most
    unpleasant <strong>(👎)</strong>. First, the one that seems the most
    unpleasant, and then one more among the remaining ones.
  </p>

  <p>
    Thus, it will be necessary to repeat with each of the
    <strong>10 image sets</strong>.
  </p>

  <dl>
    <dt><strong>Please use:</strong></dt>
    <dd><strong>👍 — to choose the most pleasant</strong></dd>
    <dd><strong>👎 — to choose the most unpleasant</strong></dd>
  </dl>

  <p>
    Don't waste too much time thinking, your first immediate reaction is
    important.
  </p>

  <p><strong>Do you understand the instructions?</strong></p>
</section>

<!-- svelte-ignore a11y-missing-content -->
<a style:display="none" href="{base}/image-perception" bind:this={linkEl} />

<MainButton text={visible ? "YES" : ""} {visible} onClick={next} />

<style>
</style>

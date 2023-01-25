<script>
  import { onMount } from "svelte";

  import { base } from "$app/paths";
  import { answers, lang, log } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";

  import Options from "./Options.svelte";
  import strings from "./strings.js";

  const data = [null, null, null, null, null];

  let linkEl;

  $: visible = data.every((el) => el !== null);
  $: text = visible ? strings[$lang].continue : "";

  onMount(() => log("swl|start"));

  function onAnswer({ detail }) {
    // log("swl|answer", detail);
  }

  function next() {
    $answers = { ...$answers, "satisfaction-with-life": data };
    linkEl.click();
  }
</script>

<section>
  <h3>{strings[$lang].step}</h3>

  <p>{strings[$lang].passed}</p>

  <p>{strings[$lang].below}</p>

  <p>{strings[$lang].honest}</p>

  <form>
    <div>
      <h3>1) {strings[$lang].first}</h3>
      <Options name="1" bind:value={data[0]} on:answer={onAnswer} />
    </div>

    <div>
      <h3>2) {strings[$lang].second}</h3>
      <Options name="2" bind:value={data[1]} on:answer={onAnswer} />
    </div>

    <div>
      <h3>3) {strings[$lang].third}</h3>
      <Options name="3" bind:value={data[2]} on:answer={onAnswer} />
    </div>

    <div>
      <h3>4) {strings[$lang].fourth}</h3>
      <Options name="4" bind:value={data[3]} on:answer={onAnswer} />
    </div>

    <div>
      <h3>5) {strings[$lang].fifth}</h3>
      <Options name="5" bind:value={data[4]} on:answer={onAnswer} />
    </div>
  </form>

  <!-- svelte-ignore a11y-missing-content -->
  <a style:display="none" href="{base}/well-being-index" bind:this={linkEl} />

  <MainButton {text} {visible} onClick={next} />
</section>

<style>
  form div {
    margin: 2rem 0;
    padding: 1rem;
    border: 2px solid var(--color-theme-1);
    border-radius: 3px;
  }

  form h3 {
    margin: 0.5rem 0.5rem 1rem;
  }
</style>

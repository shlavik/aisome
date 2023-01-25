<script>
  import { onMount } from "svelte";

  import { answers, lang, logs, log } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";

  import Options from "./Options.svelte";
  import strings from "./strings.js";

  const data = [null, null, null, null, null];

  $: visible = data.every((el) => el !== null);
  $: text = visible ? strings[$lang].finish : "";

  onMount(() => log("wbi|start"));

  function onAnswer({ detail }) {
    // log("wbi|answer", detail);
  }

  function finish(tg) {
    $answers = { ...$answers, ["well-being-index"]: data };
    try {
      const result = { answers: $answers, logs: $logs };
      const json = JSON.stringify(result);
      tg.sendData(json);
    } catch (err) {
      const result = { answers: $answers };
      const json = JSON.stringify(result);
      tg.sendData(json);
    }
  }
</script>

<section>
  <h3>{strings[$lang].step}</h3>

  <p>{strings[$lang].final_step}</p>

  <p>{strings[$lang].indicate}</p>

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

  <MainButton {text} {visible} onClick={finish} />
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

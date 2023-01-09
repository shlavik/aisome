<script>
  import { base } from "$app/paths";
  import { answers } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Variant from "./Variant.svelte";
  import images from "./images";

  const prepared = images.map((arr) =>
    arr.map((src) => ({
      filename: src.match(/[^\/]+$/)[0].slice(0, 4),
      src,
    }))
  );

  const imagesByStep = prepared.map((arr) => shuffleArray([...arr]));

  let answersByStep = imagesByStep.map(() => ({}));

  let step = 0;
  let index;
  let linkEl;

  function answer(value) {
    const { filename } = imagesByStep[step][index];
    let answers = answersByStep[step];
    if (value === answers[filename]) {
      delete answers[filename];
      answers = {
        ...answers,
        [filename]: value,
      };
      answersByStep[step] = answers;
      answersByStep = [...answersByStep];
      index = undefined;
      return;
    }
    const entries = Object.entries(answers).filter(([_, v]) => v === value);
    if (entries.length === 2) {
      const [keyToRemove] = entries[0];
      delete answers[keyToRemove];
    }
    delete answers[filename];
    answers = {
      ...answers,
      [filename]: value,
    };
    answersByStep[step] = answers;
    answersByStep = [...answersByStep];
    index = undefined;
  }

  function next() {
    if (step < imagesByStep.length - 1) return step++;
    $answers = { ...$answers, "image-perception": answersByStep };
    linkEl.click();
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  $: answersValues = Object.values(answersByStep[step]);
  $: positiveQty = answersValues.filter((v) => v > 0).length;
  $: negativeQty = answersValues.filter((v) => v < 0).length;
  $: visible = positiveQty === 2 && negativeQty === 2;
  $: text = visible
    ? step < imagesByStep.length - 1
      ? "NEXT"
      : "CONTINUE"
    : "";
</script>

<svelte:head>
  {#if step < images.length - 1}
    {#each images[step + 1] as href}
      <link rel="preload" {href} as="image" />
    {/each}
  {/if}
</svelte:head>

<section>
  <h3>Step {step + 2} of 13</h3>

  <p>
    Make <strong>2 likes (👍)</strong> and <strong>2 dislikes (👎)</strong> for images.
  </p>

  <p>
    Don't waste too much time thinking, your first immediate reaction is
    important!
  </p>

  <div class="variants">
    <pre>👍: {positiveQty} / 2</pre>
    <pre>👎: {negativeQty} / 2</pre>
    {#each imagesByStep[step] as { filename, src }, idx}
      <Variant
        {src}
        value={answersByStep[step][filename]}
        on:click={() => (index = idx)}
      />
    {/each}
  </div>

  {#if index !== undefined}
    <Modal on:close={() => (index = undefined)}>
      <img class="image" alt="" src={imagesByStep[step][index].src} />

      <div class="row">
        <button on:click={() => answer(1)}>👍</button>

        <button on:click={() => answer(-1)}>👎</button>
      </div>
    </Modal>
  {/if}

  <!-- svelte-ignore a11y-missing-content -->
  <a
    style:display="none"
    href="{base}/satisfaction-with-life"
    bind:this={linkEl}
  />

  <MainButton {text} {visible} onClick={next} />
</section>

<style>
  .variants {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 3rem 0;
  }

  .variants pre {
    position: sticky;
    top: 0.5rem;
    margin: auto;
    padding: 0.5em 1em;
    text-align: center;
    font-size: 4vmin;
    z-index: 1;
  }

  .row {
    display: flex;
    margin: 1rem -1rem -1rem;
    gap: 1px;
    font-size: 1.5rem;
  }

  .row button {
    margin: 0;
    box-shadow: 2px 2px 6px rgb(0 0 0 / 25%);
  }

  .image {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
</style>

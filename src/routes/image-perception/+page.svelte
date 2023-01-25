<script>
  import { onMount } from "svelte";

  import { base } from "$app/paths";
  import { answers, lang, log } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";

  import Modal from "./Modal.svelte";
  import Variant from "./Variant.svelte";
  import images from "./images";
  import strings from "./strings.js";

  const preparedImages = images.map((arr) =>
    arr.map((src) => ({
      filename: src.match(/[^\/]+$/)[0].slice(0, 4),
      src,
    }))
  );

  const imagesByStep = preparedImages.map((arr) => shuffleArray([...arr]));

  let answersByStep = imagesByStep.map(() => ({}));

  let step = 0;
  let index;
  let linkEl;
  let side;

  $: answersValues = Object.values(answersByStep[step]);
  $: positiveQty = answersValues.filter((v) => v > 0).length;
  $: negativeQty = answersValues.filter((v) => v < 0).length;
  $: visible = positiveQty === 2 && negativeQty === 2;
  $: text = visible
    ? step < imagesByStep.length - 1
      ? strings[$lang].next
      : strings[$lang].continue
    : "";
  $: stepImages = imagesByStep[step];
  $: selectedObj = index === undefined ? {} : stepImages[index];

  onMount(() => log("img|start"));

  function onPreviewClick(idx) {
    return () => (index = idx);
  }

  function answer(value) {
    const { filename } = stepImages[index];
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
    if (step < imagesByStep.length - 1) return log("img|next"), step++;
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

  function onModalVariantClick({ detail }) {
    const { pageX, view } = detail;
    const { innerWidth } = view;
    side = pageX < innerWidth / 2 ? "left" : "right";
    if (side === "left") index--;
    if (side === "right") index++;
    if (index > stepImages.length - 1) index = 0;
    if (index < 0) index = stepImages.length - 1;
  }

  function onModalVariantMouseDown({ detail }) {
    const { pageX, view } = detail;
    const { innerWidth } = view;
    side = pageX < innerWidth / 2 ? "left" : "right";
  }

  function onModalVariantTouchStart({ detail }) {
    const { touches, view } = detail;
    const { pageX } = touches[0];
    const { innerWidth } = view;
    side = pageX < innerWidth / 2 ? "left" : "right";
  }
</script>

<svelte:head>
  {#if step < images.length - 1}
    {#each images[step + 1] as href}
      <link rel="preload" {href} as="image" />
    {/each}
  {/if}
</svelte:head>

<section>
  <h3>{strings[$lang].step} {step + 2} {strings[$lang].of} 13</h3>

  <p>{@html strings[$lang].make_likes}</p>

  <p>{strings[$lang].immediate_reaction}</p>

  <div class="helpers">
    <div class="helper">👍: {positiveQty} / 2</div>
    <div class="helper">👎: {negativeQty} / 2</div>
  </div>

  <div class="variants">
    {#each stepImages as { filename, src }, idx}
      <Variant
        {src}
        value={answersByStep[step][filename]}
        on:click={onPreviewClick(idx)}
      />
    {/each}
  </div>

  {#if index !== undefined}
    <Modal on:close={() => (index = undefined)}>
      <span slot="header">#{index + 1}</span>

      <div class={side}>
        <Variant
          src={selectedObj.src}
          frame={false}
          value={answersByStep[step][selectedObj.filename]}
          on:click={onModalVariantClick}
          on:mousedown={onModalVariantMouseDown}
          on:touchstart={onModalVariantTouchStart}
        />
      </div>

      <div class="row">
        <button class="left" on:click={() => answer(1)}>👍</button>

        <button class="right" on:click={() => answer(-1)}>👎</button>
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
  :global(div.left button.variant::before),
  :global(div.right button.variant::after),
  :global(div.left button.variant:active::before),
  :global(div.right button.variant:active::after) {
    position: absolute;
    display: none;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgb(0 0 0 / 20%);
    filter: drop-shadow(2px 2px 6px rgb(0 0 0 / 60%));
    font-size: 1.5rem;
  }

  :global(div.left button.variant::before) {
    left: 0;
    content: "👈";
  }

  :global(div.right button.variant::after) {
    right: 0;
    content: "👉";
  }

  :global(div.left button.variant:active::before),
  :global(div.right button.variant:active::after) {
    display: flex;
  }

  .helpers {
    position: sticky;
    z-index: 1002;
    display: flex;
    top: 1rem;
    margin: 2rem 0 1rem;
    justify-content: space-around;
    font-size: 4vmin;
  }

  .helpers .helper {
    padding: 0.5em 1em;
    border-radius: 3px;
    background-color: var(--color-theme-2);
    box-shadow: 2px 2px 6px rgb(0 0 0 / 20%);
    color: var(--color-text);
    font-family: var(--font-monospace);
    overflow-x: auto;
    text-align: center;
  }

  .variants {
    display: grid;
    margin: 1rem 0 2rem;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .row {
    position: absolute;
    top: 100%;
    display: flex;
    width: calc(2rem + var(--size));
    margin-left: -1rem;
    font-size: 1.5rem;
    gap: 1px;
  }

  .row button {
    margin: 0;
    box-shadow: 2px 2px 6px rgb(0 0 0 / 25%);
  }

  @media (min-aspect-ratio: 4 / 5) {
    .helpers {
      justify-content: space-between;
      font-size: 1.1rem;
    }

    .variants {
      grid-template-columns: repeat(4, 1fr);
    }

    .row button {
      position: absolute;
      width: 6rem;
      height: var(--size);
      bottom: 1rem;
    }

    .row button.left {
      right: 100%;
    }

    .row button.right {
      left: 100%;
    }
  }
</style>

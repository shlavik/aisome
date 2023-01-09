<script>
  import { base } from "$app/paths";
  import { answers } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";
  import Options from "./Options.svelte";

  const data = [null, null, null, null, null];

  let linkEl;

  function next() {
    $answers = { ...$answers, "satisfaction-with-life": data };
    linkEl.click();
  }

  $: visible = data.every((el) => el !== null);
</script>

<section>
  <h3>Step 12 of 13</h3>

  <p>
    Below are five statements that you may agree or disagree with. Indicate your
    agreement with each item.
  </p>
  <p>Please be open and honest in your responding.</p>

  <form>
    <div>
      <h3>1) In most ways my life is close to my ideal</h3>
      <Options bind:value={data[0]} />
    </div>

    <div>
      <h3>2) The conditions of my life are excellent</h3>
      <Options bind:value={data[1]} />
    </div>

    <div>
      <h3>3) I am satisfied with my life</h3>
      <Options bind:value={data[2]} />
    </div>

    <div>
      <h3>4) So far I have gotten the important things I want in life</h3>
      <Options bind:value={data[3]} />
    </div>

    <div>
      <h3>5) If I could live my life over, I would change almost nothing</h3>
      <Options bind:value={data[4]} />
    </div>
  </form>

  <!-- svelte-ignore a11y-missing-content -->
  <a style:display="none" href="{base}/well-being-index" bind:this={linkEl} />

  <MainButton text={visible ? "CONTINUE" : ""} {visible} onClick={next} />
</section>

<style>
  form div {
    margin: 3rem 0;
    padding: 1rem;
    border: 2px solid var(--color-theme-1);
    border-radius: 3px;
  }

  form h3 {
    margin: 0.5rem 0.5rem 1rem;
  }
</style>

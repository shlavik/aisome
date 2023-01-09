<script>
  import { answers } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";
  import Options from "./Options.svelte";

  const data = [null, null, null, null, null];

  function finish(tg) {
    $answers = { ...$answers, ["well-being-index"]: data };
    tg.sendData(JSON.stringify($answers, null, 2));
  }

  $: visible = data.every((el) => el !== null);
</script>

<section>
  <h3>Step 13 of 13</h3>

  <p>
    Please indicate for each of the five statements which is closet to how you
    have been feeling over the last two weeks.
  </p>

  <form>
    <div>
      <h3>1) I have felt cheerful and in good spirits</h3>
      <Options bind:value={data[0]} />
    </div>

    <div>
      <h3>2) I have felt calm and relaxed</h3>
      <Options bind:value={data[1]} />
    </div>

    <div>
      <h3>3) I have felt active and vigorous</h3>
      <Options bind:value={data[2]} />
    </div>

    <div>
      <h3>4) I woke up feeling fresh and rested</h3>
      <Options bind:value={data[3]} />
    </div>

    <div>
      <h3>5) My daily life has been filled with things that interest me</h3>
      <Options bind:value={data[4]} />
    </div>
  </form>

  <MainButton text={visible ? "FINISH" : ""} {visible} onClick={finish} />
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

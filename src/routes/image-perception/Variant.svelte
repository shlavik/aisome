<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let src;
  export let frame = true;
  export let value = 0;
</script>

<button
  class="variant"
  style:padding={frame ? "0.5rem" : 0}
  on:click={(event) => dispatch("click", event)}
  on:mousedown={(event) => dispatch("mousedown", event)}
  on:touchstart={(event) => dispatch("touchstart", event)}
>
  <img class="image" alt="" {src} />
  <div class="mark">
    {#if value > 0}👍{/if}
    {#if value < 0}👎{/if}
  </div>
</button>

<style>
  .variant {
    position: relative;
    display: flex;
    border-radius: 3px;
    margin: 0;
    background-color: var(--color-theme-2);
  }

  .image {
    width: 100%;
    border-radius: 3px;
    object-fit: contain;
  }

  .mark {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(2px 2px 6px rgb(0 0 0 / 60%));
    font-size: 1.5rem;
  }
</style>

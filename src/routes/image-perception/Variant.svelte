<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let src;
  export let value = 0;
</script>

<button class="wrapper" on:click={() => dispatch("click")}>
  <img class="image" alt="" {src} />
  <div class="mark">
    {#if value > 0}👍{/if}
    {#if value < 0}👎{/if}
  </div>
</button>

<style>
  .wrapper {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0.5rem;
    border-radius: 3px;
    background-color: var(--color-theme-2);
  }

  .image {
    border-radius: 3px;
    object-fit: contain;
    width: 100%;
  }

  .mark {
    padding: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    filter: drop-shadow(2px 2px 6px rgb(0 0 0 / 60%));
    font-size: 1.5rem;
  }
</style>

<script>
  import { createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let modal;

  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previouslyFocused =
    typeof document !== "undefined" && document.activeElement;

  if (previouslyFocused) {
    onDestroy(() => {
      previouslyFocused.focus();
    });
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<button class="modal-background" on:click={close} />

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
  <button class="header" on:click={close}>
    <slot name="header" />
    <div class="close">✖️</div>
  </button>

  <slot />
</div>

<style>
  .modal-background {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background: rgb(0 0 0 / 40%);
  }

  .modal {
    position: fixed;
    z-index: 1002;
    top: 50%;
    left: 50%;
    padding: 1rem;
    border-radius: 3px;
    background: white;
    transform: translate(-50%, -50%);
  }

  @media (orientation: landscape) {
    .modal {
      top: 40%;
      height: calc(100vh - 8rem);
    }
  }

  @media (orientation: portrait) {
    .modal {
      width: calc(100vw - 4rem);
    }
  }

  .header {
    position: absolute;
    top: -4rem;
    right: -0.5rem;
    left: -0.5rem;
    display: flex;
    width: auto;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    background-color: transparent;
    box-shadow: none;
    color: white;
    filter: drop-shadow(0 0 3px rgb(0 0 0 / 60%));
    font-size: 1.5rem;
    font-weight: bold;
  }

  .close {
    margin-left: auto;
  }
</style>

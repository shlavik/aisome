<script>
  import { onMount } from "svelte";

  const tg = (globalThis || window).Telegram?.WebApp || {};
  const btn = tg.MainButton || {};

  export let text = "";
  export let visible = true;
  export let onClick = () => {};

  onMount(() => {
    tg.ready();
    tg.onEvent("mainButtonClicked", innerOnClick);
    // btn.show();
    return () => {
      tg.offEvent("mainButtonClicked", innerOnClick);
      // btn.hide();
    };
  });

  function innerOnClick() {
    onClick(tg);
  }

  $: if (text) btn.setParams?.({ text });
  $: visible ? btn.show?.() : btn.hide?.();
</script>

<script>
  import { createEventDispatcher } from "svelte";

  import { lang } from "$lib/stores";

  import strings from "./strings.js";

  const dispatch = createEventDispatcher();

  export let name = Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER);
  export let value;

  function onGroupChange({ target }) {
    const id = target.id.slice(0, -2);
    value = Number(target.value);
    dispatch("answer", { name, id, value });
  }
</script>

<fieldset id={name} on:change={onGroupChange}>
  <p>
    <input type="radio" id="all-time-{name}" {name} value="5" />
    <label for="all-time-{name}">{strings[$lang].all_time}</label>
  </p>

  <p>
    <input type="radio" id="most-time-{name}" {name} value="4" />
    <label for="most-time-{name}">{strings[$lang].most_time}</label>
  </p>

  <p>
    <input type="radio" id="more-half-time-{name}" {name} value="3" />
    <label for="more-half-time-{name}">{strings[$lang].more_half_time}</label>
  </p>

  <p>
    <input type="radio" id="less-half-time-{name}" {name} value="2" />
    <label for="less-half-time-{name}">{strings[$lang].less_half_time}</label>
  </p>

  <p>
    <input type="radio" id="some-time-{name}" {name} value="1" />
    <label for="some-time-{name}">{strings[$lang].some_time}</label>
  </p>

  <p>
    <input type="radio" id="no-time-{name}" {name} value="0" />
    <label for="no-time-{name}">{strings[$lang].no_time}</label>
  </p>
</fieldset>

<style>
  fieldset {
    margin: auto;
    padding: 0;
    border: none;
  }

  fieldset p {
    margin: 0;
  }
</style>

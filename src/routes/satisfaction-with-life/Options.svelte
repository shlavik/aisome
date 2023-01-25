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
    <input type="radio" id="strongly-agree-{name}" {name} value="7" />
    <label for="strongly-agree-{name}">{strings[$lang].strongly_agree}</label>
  </p>

  <p>
    <input type="radio" id="agree-{name}" {name} value="6" />
    <label for="agree-{name}">{strings[$lang].agree}</label>
  </p>

  <p>
    <input type="radio" id="slightly-agree-{name}" {name} value="5" />
    <label for="slightly-agree-{name}">{strings[$lang].slightly_agree}</label>
  </p>

  <p>
    <input type="radio" id="intermediate-{name}" {name} value="4" />
    <label for="intermediate-{name}">{strings[$lang].intermediate}</label>
  </p>

  <p>
    <input type="radio" id="slightly-disagree-{name}" {name} value="3" />
    <label for="slightly-disagree-{name}">
      {strings[$lang].slightly_disagree}
    </label>
  </p>

  <p>
    <input type="radio" id="disagree-{name}" {name} value="2" />
    <label for="disagree-{name}">{strings[$lang].disagree}</label>
  </p>

  <p>
    <input type="radio" id="strongly-disagree-{name}" {name} value="1" />
    <label for="strongly-disagree-{name}">
      {strings[$lang].strongly_disagree}
    </label>
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

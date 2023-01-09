<script>
  export let key = Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER);
  export let value;

  function onGroupChange({ target }) {
    value = Number(target.value);
  }
</script>

<fieldset id={key} on:change={onGroupChange}>
  <p>
    <input type="radio" id="strongly-agree-{key}" name={key} value="7" />
    <label for="strongly-agree-{key}">Strongly agree</label>
  </p>

  <p>
    <input type="radio" id="agree-{key}" name={key} value="6" />
    <label for="agree-{key}">Agree</label>
  </p>

  <p>
    <input type="radio" id="slightly-agree-{key}" name={key} value="5" />
    <label for="slightly-agree-{key}">Slightly agree</label>
  </p>

  <p>
    <input type="radio" id="neither-{key}" name={key} value="4" />
    <label for="neither-{key}">Neither agree nor disagree</label>
  </p>

  <p>
    <input type="radio" id="slightly-disagree-{key}" name={key} value="3" />
    <label for="slightly-disagree-{key}">Slightly disagree</label>
  </p>

  <p>
    <input type="radio" id="disagree-{key}" name={key} value="2" />
    <label for="disagree-{key}">Disagree</label>
  </p>

  <p>
    <input type="radio" id="strongly-disagree-{key}" name={key} value="1" />
    <label for="strongly-disagree-{key}">Strongly disagree</label>
  </p>
</fieldset>

<style>
  fieldset {
    width: 15rem;
    margin: auto;
    padding: 0;
    border: none;
  }

  fieldset p {
    margin: 0;
  }
</style>

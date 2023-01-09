<script>
  export let key = Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER);
  export let value;

  function onGroupChange({ target }) {
    value = Number(target.value);
  }
</script>

<fieldset id={key} on:change={onGroupChange}>
  <p>
    <input type="radio" id="all-time-{key}" name={key} value="5" />
    <label for="all-time-{key}">All of the time</label>
  </p>

  <p>
    <input type="radio" id="most-time-{key}" name={key} value="4" />
    <label for="most-time-{key}">Most of the time</label>
  </p>

  <p>
    <input type="radio" id="more-half-time-{key}" name={key} value="3" />
    <label for="more-half-time-{key}">More than half of the time</label>
  </p>

  <p>
    <input type="radio" id="less-half-time-{key}" name={key} value="2" />
    <label for="less-half-time-{key}">Less than half of the time</label>
  </p>

  <p>
    <input type="radio" id="some-time-{key}" name={key} value="1" />
    <label for="some-time-{key}">Some of the time</label>
  </p>

  <p>
    <input type="radio" id="no-time-{key}" name={key} value="0" />
    <label for="no-time-{key}">At no time</label>
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

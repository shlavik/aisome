<script>
  import { onMount } from "svelte";

  import { base } from "$app/paths";
  import { answers, lang, log } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";

  import strings from "./strings.js";

  const data = {
    age: null,
    gender: null,
    origins: {},
    race: {},
  };

  let linkEl;

  $: hasOrigins =
    Object.entries(data.origins)
      .filter(([key]) => !key.startsWith("self-describe"))
      .some(([_, val]) => Boolean(val)) ||
    (data.origins["self-describe-origins"] &&
      data.origins["self-describe-value"]);
  $: hasRace =
    Object.entries(data.race)
      .filter(([key]) => !key.startsWith("self-describe"))
      .some(([_, val]) => Boolean(val)) ||
    (data.race["self-describe-race"] && data.race["self-describe-value"]);
  $: visible = Boolean(data.age && data.gender && hasOrigins && hasRace);

  onMount(() => log("d3q|start"));

  function onGroupChange({ target: { type, name, id, checked } }) {
    if (type === "radio") data[name] = id;
    if (type === "checkbox") data[name][id] = checked;
  }

  function next() {
    $answers = { ...$answers, ["diversity-3q"]: data };
    linkEl.click();
  }
</script>

<section>
  <h3>{strings[$lang].step} 1 {strings[$lang].of} 13</h3>

  <p>{strings[$lang].introduction}</p>

  <form>
    <div>
      <h3>{strings[$lang].what_age}</h3>
      <p>{strings[$lang].choose_option}</p>
      <fieldset id="age" on:change={onGroupChange}>
        <p>
          <input type="radio" id="1-17" name="age" />
          <label for="1-17">1-17</label>
        </p>

        <p>
          <input type="radio" id="18-20" name="age" />
          <label for="18-20">18-20</label>
        </p>

        <p>
          <input type="radio" id="21-25" name="age" />
          <label for="21-25">21-25</label>
        </p>

        <p>
          <input type="radio" id="26-30" name="age" />
          <label for="26-30">26-30</label>
        </p>

        <p>
          <input type="radio" id="31-35" name="age" />
          <label for="31-35">31-35</label>
        </p>

        <p>
          <input type="radio" id="36-40" name="age" />
          <label for="36-40">36-40</label>
        </p>

        <p>
          <input type="radio" id="41-45" name="age" />
          <label for="41-45">41-45</label>
        </p>

        <p>
          <input type="radio" id="46-50" name="age" />
          <label for="46-50">46-50</label>
        </p>

        <p>
          <input type="radio" id="51-55" name="age" />
          <label for="51-55">51-55</label>
        </p>

        <p>
          <input type="radio" id="56-60" name="age" />
          <label for="56-60">56-60</label>
        </p>

        <p>
          <input type="radio" id="61+" name="age" />
          <label for="61+">61+</label>
        </p>

        <p>
          <input type="radio" id="not-disclose-age" name="age" />
          <label for="not-disclose-age">
            {strings[$lang].not_to_disclose}
          </label>
        </p>
      </fieldset>
    </div>

    <div>
      <h3>{strings[$lang].which_gender}</h3>
      <p>{strings[$lang].choose_option}</p>
      <fieldset id="gender" on:change={onGroupChange}>
        <p>
          <input type="radio" id="woman" name="gender" />
          <label for="woman">{strings[$lang].woman}</label>
        </p>

        <p>
          <input type="radio" id="man" name="gender" />
          <label for="man">{strings[$lang].man}</label>
        </p>

        <p>
          <input type="radio" id="non-binary" name="gender" />
          <label for="non-binary">{strings[$lang].non_binary}</label>
        </p>

        <p>
          <input type="radio" id="not-disclose-gender" name="gender" />
          <label for="not-disclose-gender">
            {strings[$lang].not_to_disclose}
          </label>
        </p>
      </fieldset>
    </div>

    <div>
      <h3>{strings[$lang].what_ethnic}</h3>
      <p>{strings[$lang].select_all_areas}</p>
      <fieldset id="origins" on:change={onGroupChange}>
        <p>
          <input type="checkbox" id="western-europe" name="origins" />
          <label for="western-europe">{strings[$lang].western_europe}</label>
        </p>

        <p>
          <input type="checkbox" id="eastern-europe" name="origins" />
          <label for="eastern-europe">{strings[$lang].eastern_europe}</label>
        </p>

        <p>
          <input type="checkbox" id="north-africa" name="origins" />
          <label for="north-africa">{strings[$lang].north_africa}</label>
        </p>

        <p>
          <input type="checkbox" id="sub-saharan-africa" name="origins" />
          <label for="sub-saharan-africa">
            {strings[$lang].sub_saharan_africa}
          </label>
        </p>

        <p>
          <input type="checkbox" id="west-asia" name="origins" />
          <label for="west-asia">{strings[$lang].west_asia}</label>
        </p>

        <p>
          <input type="checkbox" id="south-asia" name="origins" />
          <label for="south-asia">{strings[$lang].south_asia}</label>
        </p>

        <p>
          <input type="checkbox" id="east-asia" name="origins" />
          <label for="east-asia">{strings[$lang].east_asia}</label>
        </p>

        <p>
          <input type="checkbox" id="pacific" name="origins" />
          <label for="pacific">{strings[$lang].pacific}</label>
        </p>

        <p>
          <input type="checkbox" id="north-america" name="origins" />
          <label for="north-america">{strings[$lang].north_america}</label>
        </p>

        <p>
          <input type="checkbox" id="central-america" name="origins" />
          <label for="central-america">{strings[$lang].central_america}</label>
        </p>

        <p>
          <input type="checkbox" id="south-america" name="origins" />
          <label for="south-america">{strings[$lang].south_america}</label>
        </p>

        <p>
          <input type="checkbox" id="self-describe-origins" name="origins" />
          <label for="self-describe-origins">
            {strings[$lang].self_describe}
          </label>
          <input
            class="self-describe-value"
            name="origins"
            maxlength="30"
            disabled={!data.origins["self-describe-origins"]}
            bind:value={data.origins["self-describe-value"]}
          />
        </p>

        <p>
          <input type="checkbox" id="not-disclose-origins" name="origins" />
          <label for="not-disclose-origins">
            {strings[$lang].not_to_disclose}
          </label>
        </p>
      </fieldset>
    </div>

    <div>
      <h3>{strings[$lang].how_identify}</h3>
      <p>{strings[$lang].select_all_groups}</p>
      <fieldset id="race" on:change={onGroupChange}>
        <p>
          <input type="checkbox" id="asian-or-pacific-islander" name="race" />
          <label for="asian-or-pacific-islander">
            {strings[$lang].asian_or_pacific_islander}
          </label>
        </p>

        <p>
          <input type="checkbox" id="black" name="race" />
          <label for="black">{strings[$lang].black}</label>
        </p>

        <p>
          <input type="checkbox" id="hispanic-or-latino" name="race" />
          <label for="hispanic-or-latino">
            {strings[$lang].hispanic_or_latino}
          </label>
        </p>

        <p>
          <input type="checkbox" id="indigenous" name="race" />
          <label for="indigenous">
            {strings[$lang].indigenous}
          </label>
        </p>

        <p>
          <input
            type="checkbox"
            id="middle-eastern-or-north-african"
            name="race"
          />
          <label for="middle-eastern-or-north-african">
            {strings[$lang].middle_eastern_or_north_african}
          </label>
        </p>

        <p>
          <input type="checkbox" id="white" name="race" />
          <label for="white">{strings[$lang].white}</label>
        </p>

        <p>
          <input type="checkbox" id="self-describe-race" name="race" />
          <label for="self-describe-race">
            {strings[$lang].self_describe}
          </label>
          <input
            class="self-describe-value"
            name="race"
            maxlength="30"
            disabled={!data.race["self-describe-race"]}
            bind:value={data.race["self-describe-value"]}
          />
        </p>

        <p>
          <input type="checkbox" id="not-disclose-race" name="race" />
          <label for="not-disclose-race">
            {strings[$lang].not_to_disclose}
          </label>
        </p>
      </fieldset>
    </div>
  </form>
</section>

<!-- svelte-ignore a11y-missing-content -->
<a style:display="none" href="{base}/image-instruction" bind:this={linkEl} />

<MainButton text={strings[$lang].continue} {visible} onClick={next} />

<style>
  form div {
    margin: 2rem 0;
  }

  form fieldset {
    border: 2px solid var(--color-theme-1);
    border-radius: 3px;
  }

  form fieldset p {
    margin: 0;
  }
</style>

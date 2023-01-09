<script>
  import { base } from "$app/paths";
  import { answers } from "$lib/stores";
  import MainButton from "$lib/components/MainButton.svelte";

  const data = {
    gender: null,
    origins: {},
    race: {},
  };

  let linkEl;

  function onGroupChange({ target: { type, name, id, checked, value } }) {
    if (type === "radio") data[name] = id;
    if (type === "checkbox") data[name][id] = checked;
  }

  function next() {
    $answers = { ...$answers, ["diversity-3q"]: data };
    linkEl.click();
  }

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
  $: visible = Boolean(data.gender && hasOrigins && hasRace);
</script>

<section>
  <h3>Step 1 of 13</h3>

  <p>
    Towards greater diversity, inclusion and equity we are asking you to provide
    general information about gender, ethics and race. It will help us establish
    measure towards greater diversity, inclusion and equity. Your responses will
    not be visible outside.
  </p>

  <form>
    <div>
      <h3>With which <gender /> gender do you identify most?</h3>
      <p>Choose one option.</p>
      <fieldset id="gender" on:change={onGroupChange}>
        <p>
          <input type="radio" id="woman" name="gender" />
          <label for="woman">Woman</label>
        </p>

        <p>
          <input type="radio" id="man" name="gender" />
          <label for="man">Man</label>
        </p>

        <p>
          <input type="radio" id="non-binary" name="gender" />
          <label for="non-binary">Non-binary or gender diverse</label>
        </p>

        <p>
          <input type="radio" id="not-disclose-gender" name="gender" />
          <label for="not-disclose-gender">I prefer not to disclose</label>
        </p>
      </fieldset>
    </div>

    <div>
      <h3>What are your <strong>ethnic origins or ancestry</strong>?</h3>
      <p>
        Select all geographic areas from which your ancestors first originated.
      </p>
      <fieldset id="origins" on:change={onGroupChange}>
        <p>
          <input type="checkbox" id="western-europe" name="origins" />
          <label for="western-europe">
            Western Europe (e.g., Greece, Sweden, United Kingdom)
          </label>
        </p>

        <p>
          <input type="checkbox" id="eastern-europe" name="origins" />
          <label for="eastern-europe">
            Eastern Europe (e.g., Hungary, Poland, Russia)
          </label>
        </p>

        <p>
          <input type="checkbox" id="north-africa" name="origins" />
          <label for="north-africa">
            North Africa (e.g., Egypt, Morocco, Sudan)
          </label>
        </p>

        <p>
          <input type="checkbox" id="sub-saharan-africa" name="origins" />
          <label for="sub-saharan-africa">
            Sub-Saharan Africa (e.g., Kenya, Nigeria, South Africa)
          </label>
        </p>

        <p>
          <input type="checkbox" id="west-asia" name="origins" />
          <label for="west-asia">
            West Asia / Middle East (e.g., Iran, Israel, Saudi Arabia)
          </label>
        </p>

        <p>
          <input type="checkbox" id="south-asia" name="origins" />
          <label for="south-asia">
            South and Southeast Asia (e.g., India, Indonesia, Singapore)
          </label>
        </p>

        <p>
          <input type="checkbox" id="east-asia" name="origins" />
          <label for="east-asia">
            East and Central Asia (e.g., China, Japan, Uzbekistan)
          </label>
        </p>

        <p>
          <input type="checkbox" id="pacific" name="origins" />
          <label for="pacific">
            Pacific / Oceania (e.g., Australia, Fiji, Papua New Guinea)
          </label>
        </p>

        <p>
          <input type="checkbox" id="north-america" name="origins" />
          <label for="north-america"
            >North America (Canada, United States)</label
          >
        </p>

        <p>
          <input type="checkbox" id="central-america" name="origins" />
          <label for="central-america">
            Central America and Caribbean (e.g., Jamaica, Mexico, Panama)
          </label>
        </p>

        <p>
          <input type="checkbox" id="south-america" name="origins" />
          <label for="south-america">
            South America (e.g., Brazil, Chile, Colombia)
          </label>
        </p>

        <p>
          <input type="checkbox" id="self-describe-origins" name="origins" />
          <label for="self-describe-origins">Self describe</label>
          <input
            class="self-describe-value"
            name="origins"
            disabled={!data.origins["self-describe-origins"]}
            bind:value={data.origins["self-describe-value"]}
          />
        </p>

        <p>
          <input type="checkbox" id="not-disclose-origins" name="origins" />
          <label for="not-disclose-origins">I prefer not to disclose</label>
        </p>
      </fieldset>
    </div>

    <div>
      <h3>
        How would you identify yourself in terms of <strong>race</strong>?
      </h3>
      <p>Select <strong>all groups</strong> that apply to you.</p>
      <fieldset id="race" on:change={onGroupChange}>
        <p>
          <input type="checkbox" id="asian-or-pacific-islander" name="race" />
          <label for="asian-or-pacific-islander"
            >Asian or Pacific Islander</label
          >
        </p>

        <p>
          <input type="checkbox" id="black" name="race" />
          <label for="black">Black</label>
        </p>

        <p>
          <input type="checkbox" id="hispanic-or-latino" name="race" />
          <label for="hispanic-or-latino">Hispanic or Latino/a/x</label>
        </p>

        <p>
          <input type="checkbox" id="indigenous" name="race" />
          <label for="indigenous">
            Indigenous (e.g., North American Indian Navajo, South American
            Indian Quechua, Aboriginal or Torres Strait Islander)
          </label>
        </p>

        <p>
          <input
            type="checkbox"
            id="middle-eastern-or-north-african"
            name="race"
          />
          <label for="middle-eastern-or-north-african">
            Middle Eastern or North African
          </label>
        </p>

        <p>
          <input type="checkbox" id="white" name="race" />
          <label for="white">White</label>
        </p>

        <p>
          <input type="checkbox" id="self-describe-race" name="race" />
          <label for="self-describe-race">Self describe</label>
          <input
            class="self-describe-value"
            name="race"
            disabled={!data.race["self-describe-race"]}
            bind:value={data.race["self-describe-value"]}
          />
        </p>

        <p>
          <input type="checkbox" id="not-disclose-race" name="race" />
          <label for="not-disclose-race">I prefer not to disclose</label>
        </p>
      </fieldset>
    </div>
  </form>
</section>

<!-- svelte-ignore a11y-missing-content -->
<a style:display="none" href="{base}/image-instruction" bind:this={linkEl} />

<MainButton text="CONTINUE" {visible} onClick={next} />

<style>
  form div {
    margin: 3rem 0;
  }

  form fieldset {
    border: 2px solid var(--color-theme-1);
    border-radius: 3px;
  }

  form fieldset p {
    margin: 0;
  }
</style>

<script>
  import { base } from "$app/paths";
</script>

<header>
  <nav>
    <ul>
      <li>
        <a href="{base}/diversity-3q">Diversity 3Q</a>
      </li>
      <li>
        <a href="{base}/image-instruction">Image instruction</a>
      </li>
      <li>
        <a href="{base}/image-perception">Image perception</a>
      </li>
      <li>
        <a href="{base}/satisfaction-with-life">Satisfaction with life</a>
      </li>
      <li>
        <a href="{base}/well-being-index">Well-being index</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: var(--color-theme-2);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
    background: var(--background);
  }

  li {
    padding: 1rem;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>

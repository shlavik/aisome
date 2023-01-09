import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? "" : "/galaimagebot", // в проде на гитхабе лежит по этому пути; поменять, если переедет
    },
  },
};

export default config;

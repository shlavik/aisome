import { writable } from "svelte/store";

const { hash = "#" } = (globalThis || window).location || {};
const initialParams = new URLSearchParams(hash.slice(1));
const initialLang = initialParams.get("lang") || "ru";

export const lang = writable(initialLang === "ru" ? "ru" : "en");

export const answers = writable({});

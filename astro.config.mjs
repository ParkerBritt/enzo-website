// @ts-check
import { defineConfig } from 'astro/config';

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // CSS minifiers merge backdrop-filter with its -webkit- fallback into one, breaking Firefox.
  vite: {
    build: {
      cssMinify: false,
    },
  },

  prefetch: {
      prefetchAll: true,
    },

  markdown: {
      shikiConfig: {
          theme: "github-dark-dimmed",
      },
    },

  integrations: [icon(), mdx()],
});
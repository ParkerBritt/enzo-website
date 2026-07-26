// @ts-check
import { defineConfig } from 'astro/config';

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
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
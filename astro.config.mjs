// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true,
	},
	redirects: {
		"/docs": "/docs/guide/install-build",
		"/docs/guide": "/docs/guide/install-build",
	},
	markdown: {
		shikiConfig: {
			theme: "github-dark-dimmed",
		},
	},
});

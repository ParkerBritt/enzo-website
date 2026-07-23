import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import path from "node:path";

const guide = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/guide",
		// Slug is just the filename. Folder nesting is organizational only.
		generateId: ({ entry }) => path.parse(entry).name,
	}),
	schema: z.object({
		title: z.string(),
		section: z.string(),
		order: z.number(),
		description: z.string().optional(),
	}),
});

export const collections = { guide };

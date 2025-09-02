import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const desktopApps = defineCollection({
  loader: file("src/data/projects.json", {
    parser: (text) => JSON.parse(text).desktopApps,
  }),
});
const cliApps = defineCollection({
  loader: file("src/data/projects.json", {
    parser: (text) => JSON.parse(text).cliApps,
  }),
});
const frontend = defineCollection({
  loader: file("src/data/projects.json", {
    parser: (text) => JSON.parse(text).frontend,
  }),
});

const poems = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/poems" }),
  schema: z.object({
    name: z.string().optional(),
    date: z.string(),
    lang: z.enum(["en", "ar"]),
  }),
});

export const collections = { desktopApps, cliApps, frontend, poems };

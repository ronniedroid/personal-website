import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const desktopApps = defineCollection({
    loader: file("src/data/projects.json", { parser: (text) => JSON.parse(text).desktopApps })
});
const cliApps = defineCollection({
    loader: file("src/data/projects.json", { parser: (text) => JSON.parse(text).cliApps })
})
const frontend = defineCollection({
    loader: file("src/data/projects.json", { parser: (text) => JSON.parse(text).frontend })
});

const poems = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/poems" }),
    schema: z.object({
        name: z.string().optional(),
        date: z.string(),
        lang: z.enum(['en', 'ar']),
    })
})

const books = defineCollection({
    loader: file("src/data/books.json"),
    schema: z.object({
        status: z.enum(["Reading", "Finished", "Unfinished", "Awaited", "Cancelled"]),
        title: z.string(),
        series: z.string().optional(),
        order: z.number().optional(),
        author: z.string(),
        tags: z.array(z.string()),
        slug: z.string()
    })
})

export const collections = { desktopApps, cliApps, frontend, poems, books };
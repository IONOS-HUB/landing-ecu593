import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts (Spanish, es-EC). One Markdown file per post in src/content/blog; the file name is the URL slug.
 * Every post targets one search intent (`keyword`) and opens with a short direct answer (`answer`) that
 * search engines and AI assistants can quote. See SEO.md for the keyword map.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    /** <title> and H1. Keep it under ~60 characters; the brand is appended in <title> only. */
    title: z.string().max(70),
    /** Meta description: 120–160 characters, with the keyword and a reason to click. */
    description: z.string().min(80).max(170),
    /** Primary search query this post answers. */
    keyword: z.string(),
    /** 40–60 word answer shown first on the page ("Respuesta rápida"): the snippet AEO/GEO engines quote. */
    answer: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    /** Questions answered in the post; rendered at the end and emitted as FAQPage JSON-LD. */
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    /** Public sources for every fact or figure in the post. */
    sources: z.array(z.object({ title: z.string(), url: z.url() })).default([]),
    /** Featured posts go first among posts of the same date (landing teaser, blog index). */
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

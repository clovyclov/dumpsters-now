import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().or(z.string().transform((str) => new Date(str))),
    author: z.string().default('Hysam Hammad (Owner & Operations Director)'),
    heroImage: z.string().optional(),
    category: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  blog,
};

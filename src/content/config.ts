import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    author: z.string().default('Equipe Maggi Engenharia'),
    date: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    category: z.string().optional().default('Geral'),
    image: z.string().optional(),
    readTime: z.string().optional(),
    featured: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
    seoDescription: z.string().optional(),
    seoKeywords: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};

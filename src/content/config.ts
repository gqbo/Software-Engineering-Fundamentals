import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/, 'must be a 6-digit hex color'),
  }),
});

const difficulty = z.enum(['basico', 'intermedio', 'avanzado']);

const resource = z.object({
  type: z.enum(['video', 'article', 'practice', 'book', 'doc']),
  name: z.string(),
  url: z.string().url(),
});

const modules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/modules' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    difficulty,
    description: z.string(),
    why: z.string(),
    order: z.number(),
    topics: z.array(z.string()).min(1),
    exercise: z.string().default(''),
    solution_repo: z.string().url().or(z.literal('')).default(''),
    resources: z.array(resource).default([]),
  }),
});

export const collections = { categories, modules };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    source: z.object({
      label: z.string(),
      url: z.url(),
      note: z.string(),
    }).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    category: z.enum(['产品', '开源工具', 'Skill']),
    type: z.enum(['Product', 'Protocol', 'Setup', 'Skill']),
    status: z.enum(['Public product', 'Historical', 'Experimental', 'Available']),
    source: z.enum(['Private source', 'Open source']),
    draft: z.boolean().default(false),
    order: z.number(),
    specimen: z.enum(['resume', 'vibe', 'cairn', 'starter', 'sync']),
    image: z.string(),
    imageAlt: z.string(),
    evidenceCaption: z.string().optional(),
    problem: z.string(),
    contribution: z.string(),
    current: z.string(),
    brief: z.array(z.object({ label: z.string(), text: z.string() })).min(2).max(3).optional(),
    readme: z.object({
      url: z.url(),
      steps: z.array(z.string()).min(2).max(3),
    }).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.url(),
    })).default([]),
  }),
});

export const collections = { writing, projects };

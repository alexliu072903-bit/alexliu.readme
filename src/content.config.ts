import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    readTime: z.number().int().positive().optional(),
    image: z.string(),
    imageAlt: z.string(),
    imageAltEn: z.string().optional(),
    source: z.object({
      label: z.string(),
      url: z.url(),
      note: z.string(),
      noteEn: z.string().optional(),
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
    source: z.enum(['Private source', 'Open source', 'Public repository']),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number(),
    specimen: z.enum(['resume', 'vibe', 'cairn', 'starter', 'sync', 'site', 'evidence-site', 'mechanism']),
    illustration: z.string().optional(),
    illustrationEn: z.string().optional(),
    illustrationAlt: z.string().optional(),
    illustrationCaption: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    evidenceCaption: z.string().optional(),
    reactions: z.array(z.object({ image: z.string(), alt: z.string(), caption: z.string() })).optional(),
    facts: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    factsNote: z.string().optional(),
    en: z.object({
      description: z.string(),
      imageAlt: z.string().optional(),
      evidenceCaption: z.string().optional(),
      illustrationAlt: z.string().optional(),
      illustrationCaption: z.string().optional(),
      brief: z.array(z.object({ label: z.string(), text: z.string() })).min(2).max(3),
      readmeSteps: z.array(z.string()).optional(),
      reactions: z.array(z.object({ alt: z.string(), caption: z.string() })).optional(),
      facts: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      factsNote: z.string().optional(),
    }).optional(),
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

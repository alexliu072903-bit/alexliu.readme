import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexliu072903-bit.github.io',
  base: '/alexliu.readme',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});

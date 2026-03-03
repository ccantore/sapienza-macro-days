import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/sapienza-macro-days/',
  build: {
    assets: '_assets'
  }
});

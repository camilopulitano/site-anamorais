// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Endereço público: usado para canonical, og:image e dados estruturados.
  site: 'https://anaquintanas.com.br',
  trailingSlash: 'never',
  build: { format: 'directory' },
});

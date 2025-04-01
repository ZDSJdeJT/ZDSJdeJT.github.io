import { loadEnv } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, envField } from 'astro/config';
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { moveSync } from 'fs-extra/esm';

const { SITE } = loadEnv(import.meta.env.MODE, import.meta.dirname, '');

const { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } = await import(
  './src/locales'
);

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      REPOSITORY_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
      }),
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
        emitFile: true,
      }),
      {
        name: 'move-stats-html',
        writeBundle() {
          moveSync(
            path.resolve(import.meta.dirname, 'dist', 'stats.html'),
            path.resolve(import.meta.dirname, 'stats.html'),
            { overwrite: true },
          );
        },
      },
    ],
  },
  integrations: [
    playformCompress(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE_SETTING,
        locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(([key, value]) => [
            key,
            value.lang || key,
          ]),
        ),
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
  site: SITE,
  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});

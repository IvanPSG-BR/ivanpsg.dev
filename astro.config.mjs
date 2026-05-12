import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // URL canônica usada para sitemap, OG tags e tags absolutas
  site: "https://ivanpsg.dev",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // Idioma único (pt-BR) — declarado para clareza dos crawlers
      i18n: {
        defaultLocale: "pt-BR",
        locales: { "pt-BR": "pt-BR" },
      },
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "terser",
    },
  },
  // Configuração de build otimizada
  build: {
    inlineStylesheets: "auto",
  },
});

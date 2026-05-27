import "dotenv/config";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { configDotenv } from "dotenv";

configDotenv()
const baseDomain = process.env.BASE_DOMAIN ?? "ivanpsg.dev"
const siteUrl = `https://${baseDomain}`;

// https://astro.build/config
export default defineConfig({
  // URL canônica usada para sitemap, OG tags e tags absolutas
  site: siteUrl,
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // Idioma único (pt-BR) — declarado para clareza dos crawlers
      i18n: {
        defaultLocale: "pt-BR",
        locales: { "pt-BR": "pt-BR" },
      },
      changefreq: "weekly",
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
    server: {
      port: 4321,
      host: true,
    },
    preview: {
      port: 4321,
      host: true,
    },
  // Configuração de build otimizada
    build: {
      inlineStylesheets: "auto",
    }
  }
});

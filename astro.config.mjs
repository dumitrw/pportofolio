import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import react from '@astrojs/react'

export default defineConfig({
  site: "https://portofolio.dumitrw.ro",
  integrations: [react(), mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
});

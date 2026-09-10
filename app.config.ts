import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@solidjs/start/config";
import { getPrerenderRoutes } from "./scripts/site-routes.mjs";

export default defineConfig({
  ssr: false,
  server: {
    preset: "static",
    static: true,
  },
  router: {
    prerender: {
      routes: getPrerenderRoutes(),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

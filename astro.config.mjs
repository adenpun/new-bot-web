import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  experimental: {
    redirects: true,
  },
  integrations: [
    svelte(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  output: "hybrid",
  redirects: {
    "/": "/en/",
    invite:
      "https://discord.com/oauth2/authorize?client_id=995630008821354496&permissions=8&scope=bot+applications.commands",
  },
});

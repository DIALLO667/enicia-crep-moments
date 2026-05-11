import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Cloudflare plugin disabled — this project deploys to Netlify.
// The Lovable preview still works via vite dev (no Cloudflare worker needed).
export default defineConfig({
  cloudflare: false,
  plugins: [netlify()],
  tanstackStart: {
    server: { entry: "server" },
  },
});

import { defineConfig } from "vite";

// porta 8080 é a que a Lovable usa no preview
export default defineConfig({
  server: { host: "::", port: 8080 },
});

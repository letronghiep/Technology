import  path, { dirname }  from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888, // Change port to 3000
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "components": `${path.resolve(__dirname, "./src/components/")}`,
      "pages": `${path.resolve(__dirname, "./src/pages/")}`,
    },
  },
});

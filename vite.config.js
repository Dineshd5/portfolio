import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@heroicons/react"], // externalize the package
      output: {
        globals: {
          "@heroicons/react": "HeroIconsReact", // externalize as a global variable (if applicable)
        },
      },
    },
  },
});

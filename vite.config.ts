import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Create a separate chunk for dependencies in node_modules to reduce main bundle size
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // Adjust chunk size warning limit (optional)
    chunkSizeWarningLimit: 1000, // Set to 1000 kB to suppress warning for large chunks
  },
});

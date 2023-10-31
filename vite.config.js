import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  devServer: {
    proxy: {
      "/": {
        target: "http://34.125.211.64:3300/api/",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

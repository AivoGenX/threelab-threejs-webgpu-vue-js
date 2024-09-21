import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    {
      transformIndexHtml: (html) =>
        html.replace(
          /<head>/,
          `<head><script type="module" src="/public/config/config.js"></script>`
        ),
    },

    vue(),
  ],

  define: {
    __SITE_URLS__: {
      gitee: "https://gitee.com/giser2017/threelab-threejs-webgpu-vue-js",

      github: "https://github.com/AivoGenX/threelab-threejs-webgpu-vue-js",
      
      web: "http://threelab.cn/",
    },
  },

  build: {
    outDir: "public",

    emptyOutDir: false, // 不删除输出目录中的旧资源

    target: "es2015",

    chunkSizeWarningLimit: 999999, // 最大打包体积

    assetsInlineLimit: 0, // 资源内联限制

    copyPublicDir: false,

    cssCodeSplit: false, // css代码分割
  },

  base: "/public",

  server: {
    port: 3344,

    open: true,

    host: "0.0.0.0",
    proxy: {
      "/threejs/": {
        target: "https://threelab.cn",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/threejs/, ""),
      },
      "/examples/jsm/": {
        target: "https://threeab.cn/threejs/",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/threejs\/examples\/jsm/, ""),
      },
    },
  },
});

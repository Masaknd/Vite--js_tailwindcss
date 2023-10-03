import { defineConfig } from "vite";
import path, { resolve } from "path";
import globule from "globule";
import eslint from "@nabla/vite-plugin-eslint";
import handlebar from "vite-plugin-handlebars";
// import pluginRewriteAll from "vite-plugin-rewrite-all";

const inputs = {};
const documents = globule.find([`./src/*.html`, `./src/*.pug`], {
  ignore: [`./src/html/**/_*.html`, `./src/pug/**/_*.pug`],
});
documents.forEach((document) => {
  const fileName = document.replace(`./src/`, "");
  const key = path.parse(document).name;
  inputs[key] = path.resolve(__dirname, "src", fileName);
});

const pageData = {
  "/index.html": {
    isHome: true,
    title: "Main Page",
  },
  "/sub.html": {
    isHome: false,
    title: "Sub Page",
  },
};

export default defineConfig({
  root: "./src",
  base: "./",
  publicDir: "public",
  server: {
    host: true,
    port: 5500,
    middlewareMode: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    emptyOutDir: true,
    copyPublicDir: true,
    manifest: true,
    rollupOptions: {
      input: { ...inputs },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return `assets/images/[name].[ext]`;
          }
          if (/\.css$/.test(assetInfo.name)) {
            return `assets/css/style.css`;
          }
          if (/ttf|otf|eot|woff|woff2/i.test(assetInfo.name)) {
            return `assets/font/[name].[ext]`;
          }
          return "assets/[name].[ext]";
        },
      },
    },
  },
  plugins: [
    eslint({
      eslintOptions: {
        fix: true,
      },
    }),
    handlebar({
      partialDirectory: resolve(__dirname, "./src/components"),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
    // pluginRewriteAll(),
  ],
});

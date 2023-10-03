module.exports = {
  plugins: [
    require("tailwindcss")(),
    require("autoprefixer")(),
    require("css-declaration-sorter")({
      order: "smacss", // alphabetical/ smacss / concentric-css
    }),
    require("postcss-sort-media-queries")({
      sort: "mobile-first",
    }),
  ],
};

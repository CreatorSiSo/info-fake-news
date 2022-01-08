/** @type {import('astro').AstroUserConfig} */
export default {
  pages: "./src/pages",
  dist: "./build",
  public: "./public",
  buildOptions: {
    // Your public domain used to generate sitemaps and canonical URLs.
    site: "https://creatorsiso.github.io/info-fake-news",
    sitemap: true,
  },
  devOptions: {
    hostname: "0.0.0.0",
    port: 3000,
  },
  renderers: [],
};

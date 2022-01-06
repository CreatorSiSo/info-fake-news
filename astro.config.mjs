/** @type {import('astro').AstroUserConfig} */
export default {
  pages: "./src/pages",
  dist: "./build",
  public: "./public",
  buildOptions: {
    // site: 'http://example.com', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,
  },
  devOptions: {
    hostname: "0.0.0.0",
    port: 3000,
  },
  renderers: [],
};

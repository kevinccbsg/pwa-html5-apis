module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{css,png,html,js,json}"
  ],
  "swDest": "public/sw.js",
  runtimeCaching: [
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'cacheFirst',

      options: {
        // Only cache 10 images.
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
};
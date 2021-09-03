module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `img/` to `_site/img`
   // eleventyConfig.addPassthroughCopy("social_images");
   eleventyConfig.addPassthroughCopy("./src/css");
    return {
      dir: {
        input: './src'
      },
      passthroughFileCopy: true
    };
};

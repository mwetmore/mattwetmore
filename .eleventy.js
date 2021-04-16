const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("social_images");
    eleventyConfig.addPassthroughCopy({ "node_modules/modern-css-reset/dist/reset.min.css": "includes/reset.min.css" });

    //Clean CSS
    eleventyConfig.addFilter("cssmin", function(code) {
      return new CleanCSS({}).minify(code).styles;
    });
};

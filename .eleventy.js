module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/.well-known");
  eleventyConfig.addPassthroughCopy("./src/_headers");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

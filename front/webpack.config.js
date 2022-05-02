const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    index: "./js/script.js",
    product: "./js/product.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
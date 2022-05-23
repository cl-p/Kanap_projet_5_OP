const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    index: "./js/script.js",
    product: "./js/product.js",
    cart: "./js/cart.js",
    confirmation: "./js/confirmation.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true
};
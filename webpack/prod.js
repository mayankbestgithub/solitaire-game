const { merge } = require("webpack-merge");
const base = require("./base");

module.exports = merge(base, {
  mode: "production",
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

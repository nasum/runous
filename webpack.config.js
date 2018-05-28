var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  mode: 'development',
  entry: './assets/js/main.js',
  output: {
    path: path.join(__dirname, './assets/bundles/'),
    filename: "[name]-[hash].js",
  },
  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
  ],
  resolve: {
    alias: {
      'vue': path.resolve('./node_modules/vue/dist/vue.js'),
    }
  },
}
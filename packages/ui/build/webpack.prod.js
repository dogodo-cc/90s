const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    })
  ],
  stats: "minimal"
})
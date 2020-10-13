const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8040,
    hot: true,
    disableHostCheck: true, // 如果配置了 nginx 90s.com 会报错 Invalid Host header
    stats: "minimal"
  }
})
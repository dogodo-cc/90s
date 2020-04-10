/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var nodeExternals = require('webpack-node-externals');
const config = require('./config');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: path.resolve(process.cwd(), './lib'),
        filename: 'hello-ui.js',
        chunkFilename: '[id].js',
        library: 'HelloUI',
        libraryTarget: 'commonjs2'
    },
    target: 'web',
    resolve: {
        alias: config.alias,
        extensions: ['.js', '.vue', '.json'],
        modules: ['node_modules']
    },
    externals: [
      {
          vue: 'vue'
      },
      nodeExternals()
  ],
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    preserveWhitespace: false
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader', // 将 css 转化成 CommonJS 模块
                    },
                    {
                        loader: 'postcss-loader', // 使用 css 新语法
                    },
                    {
                        loader: 'sass-loader' // 编译 scss
                    },
                ]
            },
            {
                test: /\.(svg|gif|png|jpe?g)(\?\S*)?$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192
                      }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new VueLoaderPlugin()
    ]
};
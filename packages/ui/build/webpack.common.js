/*eslint-disable*/

const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = require('./config');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/entry.js'),
  },
  output: {
    // publicPath: '/public/',
    path: path.resolve(__dirname, '../dist'),
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
  },
  resolve: {
    alias: config.alias
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // 将 js 字符串生成 style 节点
          },
          {
            loader: 'css-loader', // 将 css 转化成 CommonJS 模块
          },
          {
            loader: 'postcss-loader', // 使用 css 新语法
          },
          {
            loader: 'sass-loader' // 编译 scss
          },
          {
            loader: 'style-resources-loader',
            options: {
                patterns: path.resolve(__dirname, '../src/styles/variable.scss'),
                injector: 'prepend'
            }
        }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // 将 js 字符串生成 style 节点
          },
          {
            loader: 'css-loader', // 将 css 转化成 CommonJS 模块
          }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [path.resolve(__dirname, '../src/icons')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, '../src/icons')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      title: 'hello-ui',
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  target: 'web',
}
/*eslint-disable*/

const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    } 
  },
  externals: {
    jquery: 'jQuery'
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
                patterns: path.resolve(__dirname, '../src/styles/theme.scss'),
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
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
        test: /\.(eot|svg|ttf|woff2|woff)/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '前端路上',
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module.identifier().split('/').reduceRight(item => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'all'
        },
      }
    }
  },
  target: 'web',
}
/* eslint-disable no-undef */
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
// var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var externals = {};

// Object.keys(Components).forEach(function(key) {
//   externals[`hello-ui/src/components/${key}`] = `hello-ui/lib/${key}`;
// });

utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`hello-ui/src/utils/${file}`] = `hello-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`hello-ui/src/mixins/${file}`] = `hello-ui/lib/mixins/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  'hello-ui': path.resolve(__dirname, '../'),
  '@': path.resolve(__dirname, '../src/')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

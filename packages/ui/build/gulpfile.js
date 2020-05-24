/* eslint-disable no-undef */

const path = require('path');
const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return src(path.resolve(__dirname, '../src/components/stylesheet/hello-ui.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, '../lib/')));
}

function copyAssets() {
  return src(path.resolve(__dirname, '../src/components/stylesheet/assets/**'))
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, '../lib/assets')));
}

exports.build = series(compile, copyAssets);

module.exports = ctx => {
  return {
    parser: 'postcss-scss',
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
      'cssnano': {},// 压缩
      'postcss-inline-svg': {}
    }
  }
}
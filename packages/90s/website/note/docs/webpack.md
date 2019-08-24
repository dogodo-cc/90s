# webpack 配置笔记

## scss 编译

如果报错 `Unnecessary curly bracket`，就把 parser 注释掉

```javascript
module.exports = ctx => {
  return {
    // parser: 'sugarss',
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {},
      'cssnano': {}
    }
  }
}
```

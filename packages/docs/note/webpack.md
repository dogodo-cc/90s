# webpack 配置笔记

## scss 编译

如果报错 `Unnecessary curly bracket`，就把 parser 注释掉

```js
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
```js
this.iconList = require.context('@/icons/svg/',false,/\.svg$/).keys().map(v => {
  v = v.replace('./','').replace('.svg','').trim();
  return v;
});
```
## 判断某个依赖是否存在
```json
 {
   "prebuild": "if [ ! -x 'node_modules/.bin/ci-task-runner' ]; then echo 'install ci-task-runner...' && learn bootstrap; else echo 'ci-task-runner ready'; fi",
    "build": "npx ci-task-runner --config .ci-task-runner.js",
 }
 ```
 // if [ ! -d 'dist' ]; then echo '😢 dist 文件夹不存在' && mkdir dist; else echo '😄 正在往 dist 文件夹搬迁静态文件' && node scripts/deploy.js; fi

```base
npm adduser --registry  https://registry-npm.gaoding.com  --always-auth
```
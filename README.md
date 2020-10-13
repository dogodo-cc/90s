
[![Build Status](https://travis-ci.org/dogodo-cc/90s.svg?branch=master)](https://travis-ci.org/dogodo-cc/90s)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# 前端路上

本仓库是集合前端一些主流技术的项目，用于练习或者当作学习笔记。

该项目部署 `GitPages` 上，可通过 [90s.co](https://www.90s.co) 访问。


## git commit 配置

- [Husky](https://github.com/typicode/husky) 辅助提交流程
- [commitizen](https://github.com/commitizen/cz-cli) 规范git commit
- [cz-customizable](https://github.com/leonardoanalista/cz-customizable) 配置自定义交互提示
- [commitlint](https://github.com/conventional-changelog/commitlint) 来验证提交是否符合规则

```
"config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable",
      "defaultType": "feat"
    },
    "cz-customizable": {
      "config": "./.cz-config.js"
    }
},
```

## 安装依赖
```base
// 安装 vue（远程） 到 @90s/web
lerna add vue --scope=@90s/web

// 安装 @90s/tools（本地） 到 @90s/web
lerna add @90s/tools --scope=@90s/web

// 安装 eslint 到 @90s/web  在 devDependencies
lerna add eslint --scope=@90s/web --dev

// 给所有模块安装 babel-core （如果 babel-core 为本地模块，则除了 babel-core）
lerna add babel-core

// 给所有模块安装 babel-core 到 devDependencies        
lerna add babel-core --dev

// 移除所有模块的 eslint 依赖，或者手动删除package.json的依赖，然后执行 lerna bootstrap
lerna exec -- yarn remove eslint

// 在项目根目录安装依赖
yarn add --dev husky prettier lint-staged -W

yarn workspace @90s/web add vue
yarn workspace @90s/web add vue -D
```


## 待办
- [x] 加入ci-task-runner，来处理增量构建
- [ ] 提高首屏加载速度
- [x] 增加一个文档项目


## 原则
* 使用最新的npm包，保持更新
* 如果没必要，不要随意增加npm依赖，尽量保持瘦身状态
* 禁用 sass less stylus 等拓展语言，特别是sass（node-sass经常出乱七八糟的问题）直接使用原生css，借用postcss实现嵌套书写等常见需求 (面向规范)
```js
// style-resources-loader 全局导入变量的直接用 :root {--color: blue;} 替代
{
  loader: 'style-resources-loader',
  options: {
    patterns: path.resolve(__dirname, '../src/styles/theme.scss'),
    injector: 'prepend'
  }
}
```
* 绝对等公共依赖如无特殊情况，在packages/common 里维护，如babel vue webpack postcss 
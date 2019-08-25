
[![Build Status](https://travis-ci.org/dogodo-cc/on-the-way.svg?branch=master)](https://travis-ci.org/dogodo-cc/on-the-way)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# 前端路上

本仓库是集合前端一些主流技术的项目，用于练习或者当作学习笔记。

该项目部署 `GitPages` 上，可通过 [90s.co](https://www.90s.co) 访问。


## git commit 配置

- [Husky](https://github.com/typicode/husky) 辅助提交流程
- [commitizen](https://github.com/commitizen/cz-cli) 规范git commit
- [cz-customizable](https://github.com/leonardoanalista/cz-customizable) 配置自定义交互提示
- [commitlint](https://github.com/conventional-changelog/commitlint) 来验证提交是否符合规则

## 安装依赖
```base
lerna add vue --scope=@90s/web
lerna add @90s/tools --scope=@90s/web
lerna add eslint --scope=@90s/web --dev
lerna add babel-core
lerna add babel-core --dev

yarn workspace @90s/web add vue
yarn workspace @90s/web add vue -D
```
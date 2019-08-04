# npm 常见命令

- [官方文档](https://docs.npmjs.com/?_blank)
- [中文文档](https://www.npmjs.com.cn/?_blank)
- [npm插件搜索](https://www.npmjs.com/package/gulp-load-plugins?_blank)


## npm 基本操作
```
npm -v // 查看当前版本
npm install npm@latest -g // 升级到最新版本

npm init
npm init -y  //直接创建默认的 package.json 文件
npm install  //根据package.json 去安装
npm install jshint gulp-jshint --save-dev   // (—-save-dev会把添加的模块，自动写到配置文件里去)
npm uninstall --save-dev  //删除指定模块
npm update
npm outdated -g  //查看过时的模块
npm update -g    //升级过时的模块
```

## npm 常见错误

package.json 设置为私有项目就不会报错：xxx No repository field.
```
"private": true,  
```

报错： no_perms Private mode enable, only admin can publish this module
原因：npm源指向了淘宝，切换回来就好
解决：npm config set registry http://registry.npmjs.org

报错： need auth auth required for publishing
原因：需要npm adduser 登录npm账号
解决：npm adduser
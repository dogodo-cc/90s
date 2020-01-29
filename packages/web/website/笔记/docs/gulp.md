# gulp自动化配置


## 常用网址

- [gulp 中文网](https://www.gulpjs.com.cn/docs/getting-started/?_blank)
- [gulp 插件下载](https://www.npmjs.com/package/gulp-sass?_blank)
- [浏览器自动刷新](http://www.browsersync.cn/docs/gulp/?_blank)


## 基本流程

```
// 全局安装
npm install --global gulp
```

在本地新建项目文件夹，然后执行`git init`，在根据github的创建新项目的提示
把本地项目文件夹和GitHub的新建项目关联起来，这样就完成了项目的版本管理。

根据默认配置，生成package.json文件
```
npm init -y

```
package.json 如下：
它自动把github上该项目的一些信息都填好了，项目名称，git地址等。
```json
{
  "name": "90s",
  "version": "1.0.0",
  "description": "所用东西都在这边了",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dogodo-cc/90s.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/dogodo-cc/90s/issues"
  },
  "homepage": "https://github.com/dogodo-cc/90s#readme",
  "devDependencies": {
    "browser-sync": "^2.23.6",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^4.1.0",
    "gulp-cache": "^1.0.2",
    "gulp-clean": "^0.4.0",
    "gulp-concat": "^2.6.1",
    "gulp-load-plugins": "^1.5.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^3.1.0",
    "gulp-sourcemaps": "^2.6.4"
  }
}

```

安装gulp 以及其他需要的插件
```
npm install --save-dev gulp
npm i gulp-sass gulp-load-plugins gulp-changed --save-dev

```

## 具体配置
```javascript

// 引入gulp
var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // 这个插件能将gulp的其他插件都挂载在自己身上

// 浏览器自动刷新
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


// gulp sass
gulp.task('sass',['clean'],function () {
    return gulp.src('src/sass/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass.sync().on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 5 version', 'safari 5','Firefox >=20','ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false,  // 是否美化
            remove: true     // 是否去掉不必要的前缀
        }))
        .pipe($.sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(reload({stream: true}))       // 刷新浏览器
});


// gulp js
gulp.task('js',function(){
    return gulp.src('src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/js'))
});



// 浏览器自动刷新
gulp.task('go',['sass'], function() {
    browserSync.init({
        proxy: "http://0.0.0.0:8000"  // 本地PHP环境
    });

    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("views/*.php").on('change', reload);
    gulp.watch("js/*.js").on('change',reload);

});


// 清除  在执行任何编译的动作之前，都先执行清除任务，防止文件冲突
gulp.task('clean',function(){
    return gulp.src(['dist/css/*'],{read:false})
        .pipe($.clean());
});


```

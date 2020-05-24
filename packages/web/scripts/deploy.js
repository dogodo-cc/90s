/* eslint-disable no-console */
/* eslint-disable no-undef */

// if [ ! -d 'dist' ]; then echo '😢 dist 文件夹不存在' && mkdir dist; else echo '😄 正在往 dist 文件夹搬迁静态文件' && node scripts/deploy.js; fi

const path = require("path");
const fs = require('fs');
// const fse = require('fs-extra');
const exec = require("child-process-promise").exec;
const projectPath = path.join(__dirname, "../");

const distPath = path.join(__dirname, '../dist');

if (!fs.existsSync(distPath)) {
  console.log('🐶 创建dist文件夹...');
  fs.mkdirSync(distPath);
}

// fse.copySync(path.join(__dirname, '../CNAME'), distPath);


exec('cp ./CNAME ./dist', {
  cwd: projectPath
})
exec('cp ./public/favicon.ico ./dist', {
  cwd: projectPath
})

// 90s-ui
exec('cp -R ../ui/dist/ ./dist/ui', {
  cwd: projectPath
})

exec('cp -R ../docs/ ./dist/blog', {
  cwd: projectPath
}).then(() => {
  console.log('😄 静态文件复制完成！');
})


/* eslint-disable no-undef */

const path = require("path");
const exec = require("child-process-promise").exec;
const projectPath = path.join(__dirname, "../");

exec('cp ./CNAME ./dist', {
  cwd: projectPath
})
exec('cp ./public/favicon.ico ./dist', {
  cwd: projectPath
})
exec('cp -R ./website/* ./dist', {
  cwd: projectPath
}).then(() => {
  console.log('😄 静态文件复制完成！'); //eslint-disable-line
})


/* eslint-disable no-console */

const path = require("path");
const exec = require("child-process-promise").exec;
const projectPath = path.join(__dirname, "../");

exec('cp -R ../docs/ ./dist/blog', {
  cwd: projectPath
}).then(() => {
  console.log('😄 静态文件复制完成！');
})


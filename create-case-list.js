/* eslint-disable no-console */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

let list = [];

fs.readdirSync('./www-case').forEach(folder => {
  if (folder === ".DS_Store") return;

  const filePath = path.join(__dirname, './www-case', folder);
  const isDir = fs.lstatSync(filePath);
  if (isDir.isDirectory()) {
    list.push(folder);
  }
})

fs.writeFile(path.join(__dirname,'./src/views/case', 'list.js'), `export const list = ${JSON.stringify(list)}`, err => {
  if(err) console.log(err);
  console.log(list);
})
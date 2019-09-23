/* eslint-disable no-undef */
/* eslint-disable no-console */

// node packages/web/scripts/psd.js

const PSD = require('psd');
const fs = require('fs');
const path = require('path');
const psdPath = path.join(__dirname, 'color.psd');
const psd = PSD.fromFile(psdPath);
psd.parse();
const treeData = psd.tree().export()

fs.writeFile(path.join(__dirname, 'psd.json'), JSON.stringify(treeData), 'utf-8', err => {
  if (err) {
    console.log(err)
  }else {
    console.log('create psd.json file done!');
  }
})
// console.log(psd.tree().childrenAtPath('A/B/C')[0].export());

PSD.open(psdPath).then(function (psd) {
  return psd.image.saveAsPng(path.join(__dirname, './psd.png'));
}).then(function () {
  console.log("create a psd.png done!");
});
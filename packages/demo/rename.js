const fs = require('fs');

const videoPath = '/Users/alan/Movies/MgtvVideos/乘风破浪的姐姐/';

fs.readdir(videoPath, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    const newFile = file.replace(/乘风破浪的姐姐/, '').trimLeft();
    const oldPath = videoPath + file;
    const newPath = videoPath + newFile;

    fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
      console.log(newFile);
    });
  })
})


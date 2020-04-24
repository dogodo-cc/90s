const cfort = require('cfork');
const chokidar = require('chokidar');
const {resolve} = require('path');
const reload = require('cluster-reload');

const master = cfort({
  exec: resolve(__dirname, 'index.js'),
  count: 2
})

chokidar.watch('./').on('change', (event, path) => {
  console.log(event, path);
  reload(2)
})
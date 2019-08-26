/* eslint-disable no-undef */
/* eslint-disable no-console */
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    let url = req.url === '/' ? 'index.html' : req.url;
    let dataPath = path.join(__dirname, url);
    let dataType = url.substr(url.lastIndexOf('.') + 1, url.length);

    fs.readFile(dataPath, (err, data) => {
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            })
            res.write(
                `<h1>404错误</h1>
                <p>你要找的页面不存在</p>`);
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type': `text/${dataType};charset="utf-8"`
            })
            res.write(data);
            res.end();
        }
    })

}).listen(8001, () => {
    console.log(`>note server listening at  http://localhost:8001`);
});
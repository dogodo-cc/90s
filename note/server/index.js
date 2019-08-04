const http = require('http');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')

// 参数处理
const argv = require("minimist")(process.argv.slice(2), {
    alias: {
        'open': 'o', // 自动打开
        'port': 'p', // 端口
        'hostname': 'h', // 域名
        'dir': 'd',  // 启动路径
        'log': 'l',  // 是否打印
    },
    string: ['port', 'hostname'],
    boolean: ['open', 'log'],
    'default': {
        'port': 8111,
        'dir': process.cwd()
    }
});

const server = http.createServer((req,res) => {
    let url = req.url === '/' ? 'index.html' : req.url;
    let dataPath =  path.join(__dirname, '../', url);
    let dataType = url.substr(url.lastIndexOf('.') + 1,url.length);

    fs.readFile(dataPath, (err,data) => {
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
   
}).listen(argv.port,() => {
    console.log(
        chalk.green(`>note server listening at  http://localhost:${argv.port}`)
    );
});
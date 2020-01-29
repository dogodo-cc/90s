## REPL(read-eval-print loop)模式
在控制台，输入 node 即可进入，可以方便的调试代码， 连续Ctrl + C 可以推出该模式。

## 时时更新
用 supervisor 代替node执行js文件，它会时时更新你的 node 程序
```base
npm install -g supervisor
```

## 模块
```javascript
// case1
var name;
exports.setName = function(name) {
  name = name;
}
exports.sayName = function() {
  console.log('hello' + name);
}


// case2
function Hello() {
  var name;
  this.setName = function(name) {
    name = name;
  }
  this.sayName = function() {
    console.log('hello' + name);
  }
}

module.exports = Hello;

const Hello = require('./hello')
```

 > 不可以通过对 exports 直接赋值代替对 module.exports 赋值。 exports 实际上只是一个和 module.exports 指向同一个对象的变量， 它本身会在模块执行结束后释放，但 module 不会，因此只能通过指定 module.exports 来改变访问接口。

## CommonJS 规范
* package.json 必须在包的顶层目录下
* 二进制文件应该在 bin 目录下
* JavaScript 代码应该在 lib 目录下
* 文档应该在 doc 目录下
* 单元测试应该在 test 目录下

## 全局安装，本地安装
模式 | 通过require 使用 | 注册PATH
| - | - | -
本地模式 | 是 | 否 
全局模式 | 否 | 是

## npm link
举个例子，我们已经通过 npm install -g express 安装了 express，这时在工程的目录下运行命令
```base
npm link express

./node_modules/express -> /usr/local/lib/node_modules/express
```

我们可以在 node_modules 子目录中发现一个指向安装到全局的包的符号链接。通过这 种方法，我们就可以把全局包当本地包来使用了

## 全局对象 & 全局变量
Node.js 中的全局对象是 global，所有全局变量(除了 global 本身以外)都是 global 对象的属性。

### process
* process.argv 是命令行参数数组
* process.stdout 是标准输出流
* process.stdin 是标准输入流
* process.nextTick(cb) 为事件循环设置一项任务，node会在下次事件循环调响应时调用cb函数。

### util

### events

* EventEmitter.on(event, listener) 为指定事件注册一个监听器，接受一个字符串event 和一个回调函数listener
* EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传递若干可选参数到事件监听器的参数表
* EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器
* EventEmitter.removeListener(event, listener) 移除指定事件的某个监听器，listener 必须是该事件已经注册过的监听器
* EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器

```javascript
const events = require('events')
const emitter = new events.EventEmitter();

emitter.on('someEvent',(arg1,arg2) => {
  console.log('listener1', arg1, arg2)
})

emitter.on('someEvent',(arg1,arg2) => {
  console.log('listener2', arg1, arg2)
})

emitter.emit('someEvent', 'alan', 1991)
```
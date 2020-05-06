/* eslint-disable */

const {resolve, join, parse} = require('path');
const globby = require('globby'); // globby 是搜索目录下所有文件的一个工具，主要用来搜索约定目录下的JS 文件。

module.exports = app => {
  const AppPath = resolve(__dirname, 'app');
  const context = app['context'];

  const fileAbsolutePath = ['config', 'middleware', 'service'].reduce((folderMap, v) => {
    folderMap[v] = join(AppPath, v);
    return folderMap;
  }, {});

  Object.entries(fileAbsolutePath).forEach(([prop, path]) => {
    const files = globby.sync('**/*.js', {
      cwd: path
    })
    if (prop !== 'middleware') {
      context[prop] = {};
    }

    files.forEach(file => {
      const filename = parse(file).name; // 文件的名称作为key挂载到子对象上面
      const content = require(join(path, file)); // 导入内容

      // middleware 处理逻辑
      if (prop === 'middleware') {
        if (filename in context['config']) {
          // 先传递配置选项
          const plugin = content(context['config'][filename]);
          app.use(plugin); // 加载中间件
        }
        return;
      }

      // 配置文件处理
      if (prop === 'config' && content) {
        context[prop] = Object.assign({}, context[prop], content);
        return;
      }

      context[prop][filename] = content; // 挂载service
    })
  })
}
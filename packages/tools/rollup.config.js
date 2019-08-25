import json from 'rollup-plugin-json'; // 让 rollup 使用json
import resolve from 'rollup-plugin-node-resolve'; // 让 rollup 读取 node_modules 文件
import common from 'rollup-plugin-commonjs'; // 让 rollup 支持读取 commonJS规范资源
import babel from 'rollup-plugin-babel';
import { version } from './package.json';

export default {
  input: './main.js',
  output: {
    file: 'index.js',
    format: 'esm'
  },
  plugins: [
    json(),
    resolve(),
    common(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ],
  globals: {
    jquery: '$'
  },
  external: ['lodash','jquery'],
  banner: '/* 元帅的个人工具库 版本' + version + ' */',
  footer: '/* follow me on GitHub dogodo-cc */'
}
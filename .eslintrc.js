module.exports = {
  "root": true, // 如果是子项目需要特定的规则，用root:true 可以阻止往父级查找规则
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true, // 这样在使用 __dirname 等变量的时候就不会报错
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended" // essential or recommended
  ],
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "parser": 'babel-eslint',
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "indent": ['error', 2],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 2, // 单行属性允许n个
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    "no-dupe-else-if": 'off',
    "no-setter-return": 'off',
    "no-import-assign": 'off',
  }
};


// "off" or   0 - 关闭规则
// "warn" or  1 - 将规则视为一个警告（不会影响退出码）
// "error" or 2 - 将规则视为一个错误 (退出码为1)

// 取消规则验证
/* eslint-disable no-console */ // 当前文件
/* eslint-disable-next-line */       // 下一行
/* eslint-disable-line no-alert */   // 当前行
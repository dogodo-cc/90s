module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential" // recommended 太严格，受不了
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "parser": 'babel-eslint',
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};


// "off" or   0 - 关闭规则
// "warn" or  1 - 将规则视为一个警告（不会影响退出码）
// "error" or 2 - 将规则视为一个错误 (退出码为1)

// 取消规则验证
/* eslint-disable no-alert console*/ // 当前文件
/* eslint-disable-next-line */       // 下一行
/* eslint-disable-line no-alert */   // 当前行
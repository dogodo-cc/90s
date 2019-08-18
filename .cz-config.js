// 如果不想自己配置，可以直接使用 cz-conventional-changelog 插件

module.exports = {
  types: [
    { value: 'feat', name: 'feat:     你做完成了一个新功能' },
    { value: 'fix', name: 'fix:      你修复了一个bug' },
    { value: 'docs', name: 'docs:     你更新了项目文档' },
    {
      value: 'style',
      name:
        'style:    你只是做了一些代码格式优化的操作',
    },
    {
      value: 'refactor',
      name: 'refactor: 你重构了某个模块',
    },
    {
      value: 'perf',
      name: 'perf:     提高代码性能的优化',
    },
    { value: 'test', name: 'test:     你添加了测试文件' },
    {
      value: 'chore',
      name:
        'chore:    你优化了构建流程',
    },
    { value: 'revert', name: 'revert:   撤销上一个提交记录' },
    // { value: 'WIP', name: 'WIP:      Work in progress' },
  ],

  scopes: [{ name: '学习' }, { name: '案例' }, { name: '构建' }, { name: '工具' }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'

  scopeOverrides: {
    feat: [
      {name: '学习笔记'},
      {name: '代码收集'},
      {name: '案例收集'},
      {name: '工程构建'},
      {name: '动画效果'},
    ]
  },

  // override the messages, defaults are as follows
  messages: {
    type: "请选择你的提交类型:",
    scope: '选择影响范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '选择影响范围:',
    subject: '请紧要说明这次提交的修改内容:\n',
    body: '详细说明修改原因以及影响 (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: '确定提交吗?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body','footer','breaking'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};

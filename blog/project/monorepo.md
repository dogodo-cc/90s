# monorepo 模式的项目管理

## 为什么选择它

### 优点

- 集中管理，无需在多个项目来回切换（本人极度喜欢只打开一个编辑器的专注感）
- 项目之间如果有依赖可以实时调试（无需先发包，再更新依赖，如工具函数包）
- 一些基础配置可以只写一遍，比如 eslint、CI 的配置

### 缺点

- 项目过大？ I do not care !


## 项目结构

```bash
├── packages
│   ├── admin
│   ├── browser
│   └── tools
├── scripts
│   ├── apollo.js
│   ├── notice.js
│   ├── sync-cdn.js
│   └── util.js
├── .ci-task-runner.js
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── .yarnrc
├── Jenkinsfile
├── README.md
├── lerna.json
├── package.json
└── yarn.lock
```

所有项目在`packages`里维护，例如本仓库包含了 管理后台`admin`、客户端`browser`、工具函数`tools`

所有项目共同使用一份 `eslint` 配置，所谓一处配置，处处约束。

关于自动化构建的一些脚本集合在 `scriptes` 文件夹

我们使用了自研的 `ci-task-runner` 来处理增量构建，在提交代码的时候，只会构建那些被改动的项目，以此提高每次的构建效率。

## CI 流程

- 提交`PR`到 dev | release | master 分支，触发构建
- 通过 `ci-task-runner` 进行按需构建
- 将生成的 `dist` 文件同步到 CDN
- 将版本号同步给`apollo`， 后端根据版本号获取最新的index.html 文件
- 通过钉钉机器人在特定的群里通知构建消息


## 模式的区分 (dev | production)

- DEV 讲究的是编译速度，和报错信息丰富且清晰
- PRO 讲究的是构建之后的体积，与浏览器的兼容性

所以配置`babel`的时候，最好可以根据当前模式进行配置，dev 下减少无必要的转换编译， pro 下满足目标浏览器的兼容标准

## 环境区分 （dev ｜ release ｜ master）

在业务开发的时候，往往需要针对当前环境做判断，做相应的逻辑。比如一个跳转回首页地址的需求：

- dev模式是去 dev.gaodinng.com
- release 模式是去 stage.gaoding.com
- master 也就线上环境则是去 gaoding.com

我们当然可以在具体跳转的时候，根据location.host来判断当前是什么环境，然后跳转什么地址，但是这样导致代码变得臃肿。

我们应该是有一个类似 `GAODING_URL`的全局变量，在不同分支的时候，赋予它不同的值。这样我们在业务代码里，跳转的值就是这个`GAODING_URL`。

于是我们有了 .env | .env.dev | .env.releae | .env.master

.env.master
```bash
NODE_ENV=production
VUE_APP_GAODING_URL=https://www.gaoding.com
```

里面定义了一些需要根据环境赋值的变量，在业务开发的时候可以直接引用

因为使用了 `vue-cli` 所以可以很方便的在执行构建命令是，传入 --mode 参数，如下

```base
vue-cli-service build --modern --mode ${process.env.GIT_BRANCH || 'dev'}
```

这样就能做到根据当前环境，给环境变量赋予不同的值。
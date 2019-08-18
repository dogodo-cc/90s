# Git 使用规范

## 基本约定
- 原则上所有 git 项目全员可见
- 提交日志严格遵循 [conventional commits 规范](https://www.conventionalcommits.org/zh/v1.0.0-beta.4/)
- 对于工具需要有明确的版本管理分支，发版本后必须打 Tag
  * 使用 [Semver 规范](https://semver.org/lang/zh-CN/)
- 对于服务需要有明确的环境分支，每次上线必须打 Tag
- 各项目需要有明确的分支命名规范，如果特性分支，热修复分支
- git 内严禁存放密钥相关数据

## 分支名

```base
master：用于生产环境的代码，应永远处在可以正常运行的状态
release：每个开发版本的测试分支
dev：测试分支

f_{name}_{feature}_[{craete_date}] 个人特性开发分支
b_{name}_{bug}_[{create_data}] bug修复分支
```

每次发布版本之后，都及时将线上个人分支删除，避免太多冗余数据。

## 提交格式

```
Hader: type[scope]: subject
Body: 本次 `commit` 的详细描述
Footer: 当有不兼容改动 or 关闭 Issue 的时候
```

`type` 用于说明 *commit* 的类别，允许以下标识

* `feat`: 新功能（feature）
* `fix`: 修复bug
* `docs`: 文档（document）
* `style`: 格式 (不影响代码运行的改动)
* `refactor`： 重构
* `test`: 增加测试
* `chore`: 构建过程或者辅助工具的变动


## Husky的配置
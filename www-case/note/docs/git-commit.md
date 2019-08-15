# Git 使用规范

## 基本约定
- 原则上所有 git 项目全员可见
- 提交日志严格遵循 [conventional commits 规范](https://www.conventionalcommits.org/zh/v1.0.0-beta.4/)
- 对于工具需要有明确的版本管理分支，发版本后必须打 tag
  * 使用 [Semver 规范](https://semver.org/lang/zh-CN/)
- 对于服务需要有明确的环境分支，每次上线必须打 tag
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
# git 使用笔记

## github 的使用
```
// 生成KEY
ssh-keygen -t rsa -C "GitHub的注册邮箱"

// 输入你要保存KEY的路径 如：~/Desktop/id_rsa
Enter file in which to save the key (/Users/yuanweihai/.ssh/id_rsa):

// 输入密匙，可以直接回车，为空（我也不知道具体意思）
Enter passphrase (empty for no passphrase):

// 验证是否成功
ssh -T git@github.com

// 如果出现这个，是需要在github-settings-SSH里添加dogodo_rsa.pub里的内容
Permission denied (publickey)

Hi yuanweihai! You've successfully authenticated,
but GitHub does not provide shell access. &nbsp;
成功

git config --global user.email "GitHub的注册邮箱"
git config --global user.name "GitHub的注册名称"
```

## github 项目配置
```
echo "# dogodoAdmin" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:dogodo-cc/dogodoAdmin.git
git push -u origin master
```

## git 常用命令
```
git status   查看文件的修改状态
git add .     提交修改到缓存区
// add 之后，可以git checkout -- filename 来取消对某文件的修改
git commit -m ''  说明我改了什么
git pull orign master  更新一下别人的
git push orign master   提交
:wq 退出
git remote add origin <server>     将你的仓库连接到某个远程服务器
git clone ssh://git@47.52.228.84:/web-admin.vdd.com   克隆一个项目到本地
git remote -v  查看git远程地址

将指定文件恢复到指定commit
git checkout  <commit> <filePath>

git commit --no-edit  不提交合并信息 使用默认的
```

## git 分支命令
```
git branch  查看本地分支
git branch -a   所有分支，本地与远程
git checkout -b alan origin/alan   从远程分支里检出并在本地分支创建一个与之对应的分支
git checkout -t origin/远程某分支名  切换到远程分支，再 git pull origin 远程某分支名
git checkout -b alan_dev 创建一个分支并切换过去
git checkout master  切换回主分支
git branch -d alan_dev 把刚才创建的分支删除
git push origin alan_dev:alan_dev 将刚才创建的分支推送远程并与本地挂钩
git push origin --delete alan_dev 删除远程的alan_dev 分支
```

## git 合并命令
```angular2html
git pull  以在你的工作目录中 获取（fetch） 并 合并（merge） 远端的改动
git merge <branch>    要合并其他分支到你的当前分支（例如 master）
    合并如何没冲突，会提示输入合并说明
    按 i 进入编辑
    按 esc 退出编辑
    按 :wq 退出
git diff <source_branch> <target_branch>   合并改动之前，预览差异
git add <filename>   将它们标记为合并成功
git merge --abort 取消上一次合并
```

## git 标签命令

### 创建标签

#### 轻量标签

创建一个叫做 `v1.0.0` 的标签：`1b2e1d63ff` 是你想要标记的提交 ID 的前 10 位字符
```
git log  获取提交 ID：
git tag v1.0.0 1b2e1d63ff

```

#### 含附注标签

含附注标签，实际上是存储在仓库中的一个独立对象，它有自身的校验和信息，包含着标签的名字，电子邮件地址和日期，以及标签说明，标签本身也允许使用 GNU Privacy Guard (GPG) 来签署或验证。一般我们都建议使用含附注型的标签，以便保留相关信息；当然，如果只是临时性加注标签，或者不需要旁注额外信息，用轻量级标签也没问题。

```
git tag -a v1.4 -m 'my version 1.4'
```

- 用 `-a` （译注：取 `annotated` 的首字母）指定标签名字
- 而 `-m` 选项则指定了对应的标签说明，Git 会将此说明一同保存在标签对象中。如果没有给出该选项，Git 会启动文本编辑软件供你输入标签说明。



### 标签列表

显示的标签按字母顺序排列，所以标签的先后并不表示重要程度的轻重。

```
git tag
git tag -l 'v1.4.2.*'   // 只显示 1.4.2 系列的标签
git show [tagName] // 查看相应标签的版本信息，并连同显示打标签时的提交对象。
```


### 提交标签

默认情况下，`git push` 并不会把标签传送到远端服务器上，只有通过显式命令才能分享标签到远端仓库。其命令格式如同推送分支，运行

```
git push origin [tagname]
```

如果要一次推送所有本地新增的标签上去，可以使用 `--tags` 选项：

```
git push origin --tags
```


## git LOG命令
```angular2html
git log  本地仓库的历史记录
git log --author=alan  只看alan的提交记录
git log --oneline  每一条提交记录只占一行的输出
git log --graph --oneline --decorate --all   ASCII 艺术的树形结构来展示所有的分支
git log --name-status   看看哪些文件改变了
git log --help  更多的信息
```

## git 配置
```
git config --global user.name <name>     定义当前仓库所有提交使用的作者姓名
git config --global user.email <email>
git config --global core.editor vim
git config --system core.editor <editor>  定义当前机器所有用户使用命令时用到的文本编辑器
添加一些快捷方式(别名)
    git config --global alias.st status
    git config --global alias.co checkout
    git config --global alias.br branch
    git config --global alias.up rebase
    git config --global alias.ci commit
```

## 替换本地改动（操作失误）
```
git checkout -- <filename>
```
换掉本地改动,此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。

假如你想丢弃你在本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它
```
git fetch origin
git reset --hard origin/master
```

## git 概念
1. 工作区 （working dir） —— 我们的实际代码文件
2. 缓存区 （index stage）—— 临时保存改动的文件
3. head —— 指向最后一次提交后的结果


## .gitignore
- 以斜杠“/”开头表示目录
- 以星号“*”通配多个字符
- 以问号“?”通配单个字符
- 以方括号“[]”包含单个字符的匹配列表
- 以叹号“!”表示不忽略(跟踪)匹配到的文件或目录
- git 对于 .ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效
- 只能作用于 Untracked Files，也就是那些从来没有被 Git 记录过的文件（自添加以后，从未 add 及 commit 过的文件）

## 常见问题
```
modified: xxx (modified content, untracked content)
```
大概意思是xxx目录没有被跟踪，删除 xxx 里的 .git目录即可

```
failed to push some refs to 'git@github.com:******/Demo.git'
git push -u origin master -f
```
意思是不能提交，可以用git push -u origin master -f  强行提交

```
git branch -r | grep yuanshuai  查看远程的包含 yuanshuai 的分支
```

批量删除本地分支的命令如：
```
git branch | grep b_yuanshuai | xargs git branch -D
```
- git branch 输出当前分支列表
- grep 是对 git branch 的输出结果进行匹配，匹配值当然就是 branchName
- xargs 的作用是将参数列表转换成小块分段传递给其他命令

从分支列表中匹配到指定分支，然后一个一个(分成小块)传递给删除分支的命令，最后进行删除。

git branch -a | grep -v -E 'master|develop' | xargs git branch -D

批量删除远程分支的命令如：
```
git branch -r | grep 'yuanshuai' | xargs -I {} basename {} | xargs -I {} git push origin :{}

git branch -r| grep -v -E 'master|develop' | sed 's/origin\///g' | xargs -I {} git push origin :{}
```
```
git remote prune origin （远程删除了分支，在本地还能看到，用这个清除一下）
```




## git 暂存修改
- 1、A分支做了修改但不想提交，要切换到B分支修改代码
- 2、可以把A分支的修改 暂存 起来，恢复到最后一次commit的状态
- 3、切换到B分支，修改代码，完成功能，再切回A分支
- 4、在A分支把暂存的代码提取出来，继续编写

git stash 是针对整个`.git`工程进行保存，不区分分支

```shell
git stash 
git stash save 'what u save'

// 提取暂存的代码
git stash pop // 得到最后一次暂存的

or

git stash list // 展示所有暂存
git stash apply stash@{0} // 得到指定的暂存
```

## 取消跟踪
```base
git rm -r -n --cached dist
git rm -r --cached dist
```
将已经在 git 跟踪的 dist 文件夹取消，不需要跟踪


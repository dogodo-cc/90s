# 新电脑的配置清单

2020-10-25

工欲善其事，必先利其器。作为靠编程谋生的程序员而言，一套量身定制的开发环境就如一把利剑对于一个闯荡江湖的武侠一样重要。

前提：
- 职业：WEB前端开发
- 工具：MacBook pro

由于Mac OS的干净整洁，一直都是我的电脑首选。从16年至今，都是使用mac开发，在此沉淀一篇配置文章，以便在更换电脑的时候，轻车熟路的进行配置。

个人性格原因，喜欢小而美，且一直坚持断舍离原则，只保留必要的东西，甚至可以忍受一点由于极简带来小麻烦。所以只要 macOS 自带的APP能满足我的基本需求，我就不会安装一个替代的第三方APP。

我使用的原生APP有： 输入法、备忘录、邮件、日历、地图、音乐、截屏、提醒事项、keynote、Safari（日常）。苹果的APP完成度还是非常高的，相比国内的APP而言少了运营模块，整个APP完全面向生产力，无广告（零容忍），所以日常的APP我基本使用原生的。

由于音乐资源的问题，会额外使用网易云音乐作为辅助，为什么不是QQ音乐等其他？因为网易云的UI交互是我认为做的最好的。（当然如果可以去掉运营的部分就更好）。

## 电脑设置

得益于苹果强大的iCloud同步能力，在配置新电脑的时候只要登陆Apple ID，所有数据都会同步过来（照片、备忘录、提醒、文档等等）。只需做一些简单设置，就可以进行日常使用。

### 改名字

[官方指导](https://support.apple.com/zh-cn/guide/mac-help/mchlp2322/mac)，先给电脑设置一个好听的名字吧！

如果不设置，那么默认名称为 username@macbook

### 搜索引擎

将Safari 和 Chrome 的首页设置为bing，搜索引擎切换为bing，因为他们默认的都是垃圾百度引擎，为什么不设置成谷歌？原因你懂，而且bing有国内版和国际版本，也基本够用了。

### 鼠标跟随速度

由于magic mouse 2的在系统可视化设置里最高只能设置 3 ，移动鼠标需要较大的手腕弧度，我一般设置成 12 ，符合我个人的使用习惯。
```
defaults read -g com.apple.mouse.scaling 
defaults write -g com.apple.mouse.scaling 12
```

### SCROLL REVERSER（鼠标反转）
如果你不是使用magic mouse，而是罗技等第三方鼠标，那么滚轮的方向和触摸板的方向是不一致的，可以使用这款[软件](https://pilotmoon.com/scrollreverser/?_blank)颠倒一下鼠标滚轮方向。

### 保持APP输入法独立

系统偏好设置 -> 键盘 -> 输入法 -> 勾选自动切换到文稿的输入法

这样可以做到你在编辑器里面是输入英文，回到微信是输入中文（即：保留离开APP时的输入语言）

## 必装小软件

### MooM 
这是mac上一款管理窗口的付费软件，我最常用的就是左右分屏功能，由于在公司用的是27寸4K显示器，我可以轻松的将Chrome 和 vscode 左右分屏，一边负责代码，一边负责页面呈现和调试，无需窗口切换，非常高效。

设置 -> mouse -> zoom button controls > pop up controls when hovering over a zoom button (取消勾选)

避免和系统自带的左右分屏冲突，moom只保留鼠标拖拽到屏幕边缘触发分屏.

### iHost
管理本地 host 的免费软件，可以轻松的对host文件进行编辑和分类，自由的切换分组。[Github](https://github.com/toolinbox/iHosts)

### copyClip
可以快速预览并选择复制的历史记录，方便我们粘贴之前复制过的内容。

### 视频播放器

开源播放器[iiNA](https://iina.io)，只专注于视频播放，没有其他附属功能。

### 欧陆词典 （即将废弃）
在Catalina 10.15.7 之前苹果都没有推出好用的词典，所以我一直使用的是欧陆词典，它只是在状态栏有一个搜索图标，方便随时查询单词。不过有消息说下一代macOS将携带词典APP，在2020年这样的时间点，苹果出品，而且是词典这样的小APP，我相信苹果的实力，所以在新系统到来的时候，我将第一时间放弃欧陆，改用系统自带词典。

### 解压软件 （废弃）
之前一直使用的是[keka](https://github.com/aonez/Keka)，直到写这篇文章的时候，发现我上次装机忘记装keka了，也一直正常使用到现在，所以我大概率是不需要解压软件了，mac 自己可以对zip文件进行压缩和解压，满足我极少情况下的需求。可能是职业原因，基本文件都在云上，压缩文件这类“本地处理”的情景越少了。

## 开发环境

### IP地址
由于屏(bi)蔽(guan)糟(shuo)粕(guo)的政策，我们和外界的沟通渠道被切断，导致在安装一些国外的源的时候，会无休止的卡在loading状态，或者类似报错 Failed to connect to raw.githubusercontent.com port 443: Connection refused 

1、 在 [这里](https://www.ipaddress.com) 查询raw.githubusercontent.com的真实IP

2、 在host文件里配置 199.232.28.133  raw.githubusercontent.com

```
199.232.28.133 raw.githubusercontent.com
199.232.68.133 raw.github.com
140.82.113.4 github.com
```

### xcode-select

熟悉的报错：  gyp: No Xcode or CLT version detected!

在mac上做开发的依赖模块，安装方面也经常遇到问题，记录如下：

方法1:
```
xcode-select --install

// 如果报错说已经存在
xcode-select --print-path
sudo rm -r -f /Library/Developer/CommandLineTools
xcode-select --install
sudo xcode-select --reset s
```

方法2:直接官网[下载](https://developer.apple.com/download/more/)

方法3:安装xcode，如果不是ios开发，极不推荐，这玩意下载就要10GB左右

### Homebrew

mac上公认的软件管理软件

```base

// 获取Homebrew的安装脚本
cd ~
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh >> brew_install

// 切换安装源
BREW_REPO="git://mirrors.ustc.edu.cn/brew.git"

// 执行安装文件
/bin/bash brew_install

// 卡在：
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...

// 这时候直接Ctrl+C结束，通过ustc的源进行配置

mkdir -p /usr/local/Homebrew/Library/Taps/homebrew/
cd /usr/local/Homebrew/Library/Taps/homebrew
git clone https://mirrors.ustc.edu.cn/homebrew-core.git


// 输入brew help显示帮助信息则说明安装成功


// 替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git

// 替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git

echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.cloud.tencent.com/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc

```

如果折腾失败，可以使用这个[终极方案](https://zhuanlan.zhihu.com/p/111014448)，感兴趣可以看[仓库地址](https://gitee.com/cunkai/HomebrewCN)。

### 命令行

iterm2 + oh my zsh = 双剑合璧

### 前端开发几大件

- vscode
- chrome
- nginx
- git
- node
- postman



## 系统快捷键

- shift-option-command-v，把富文本粘贴为纯文本
- control+command+Q 锁屏
- Shift+Command+G 进入文件夹
- command + shift + .  显示/隐藏 被隐藏的文件
- Command＋shift＋3 全屏截图
- Command＋shift＋4 自定义区域
- Command＋shift＋4 之后再按 “空格” 点击某个窗口，就截图该窗口
- 以上所有操作 加按 “control” 可以直接在黏贴版使用

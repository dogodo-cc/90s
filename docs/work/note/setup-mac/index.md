# Mac OS 装机指南

工欲善其事，必先利其器。作为靠编程谋生的程序员而言，一套量身定制的开发环境就如一把利剑对于一个闯荡江湖的武侠一样重要。

前提：

-   职业：WEB 前端开发
-   工具：MacBook Pro

由于 Mac OS 的干净整洁，一直都是我的电脑首选。从 16 年至今，都是使用 mac 开发，在此沉淀一篇配置文章，以便在更换电脑的时候，轻车熟路的进行配置。

个人性格原因，喜欢小而美，且一直坚持断舍离原则，只保留必要的东西，甚至可以忍受一点由于极简带来小麻烦。所以只要 macOS 自带的 APP 能满足我的基本需求，我就不会安装一个替代的第三方 APP。

我使用的原生 APP 有：

-   输入法、
-   备忘录、
-   邮件、
-   日历、
-   地图、
-   音乐、
-   截屏、
-   提醒事项、
-   keynote、
-   Safari（日常）

苹果的 APP 完成度非常高，相比国内的 APP 而言少了运营模块，整个 APP 完全面向生产力，无广告（零容忍），所以日常的 APP 我基本使用原生的。

## 电脑设置

得益于苹果强大的 iCloud 同步能力，在配置新电脑的时候只要登陆 Apple ID，所有数据都会同步过来（照片、备忘录、提醒、文档等等）。只需做一些简单设置，就可以进行日常使用。

### 改名字

[官方指导](https://support.apple.com/zh-cn/guide/mac-help/mchlp2322/mac)，先给电脑设置一个好听的名字吧！

如果不设置，那么默认名称为 username@macbook

### 搜索引擎

将 Safari 和 Chrome 的首页设置为 Bing，搜索引擎切换为 Bing，因为他们默认的都是垃圾百度引擎，为什么不设置成谷歌？原因你懂，而且 Bing 有国内版和国际版本，也基本够用了。

### 调度中心

-   关闭 根据最近的使用情况自动重新排序列空间（这样不会打乱自己排布好的屏幕顺序，影响体验）

### 桌面与程序坞

-   开启 将窗口最小化至应用程序图标（这样就不会额外显示最近打开的应用）
-   关闭 在程序坞中显示最近使用的应用程序
-   关闭 点按墙纸以显示桌面

### 输入法，短语

350783 快捷输入身份证号码

### 鼠标跟随速度

由于妙控鼠标在系统可视化设置里最高只能设置 3 ，移动鼠标需要较大的手腕弧度，我一般设置成 12 ，符合我个人的使用习惯。

```
defaults read -g com.apple.mouse.scaling
defaults write -g com.apple.mouse.scaling 12
```

### Finder 的显示设置

![](./finder.png)

## 快速操作

创建的快速操作脚本会保存在： /Users/alan/Library/Services

### vscode 打开

打开`自动操作`
![](./快速操作/vscode-open.png)
![](./快速操作/vscode-open2.png)

效果：
![](./快速操作/vscode-open3.png)

## 必装软件

### 自动切换输入法

[官方地址](https://www.better365.cn/AutoSwitchInput.html)，由于编程开发是英文，交流沟通是中文，所以在微信和 vscode 等软件来回切换的时候经常都要切换中英文。你是英文状态下在 vscode 写代码，切到微信回复个消息要切换到中文，然后回到 vscode 又要切成英文，非常繁琐，`自动切换输入法lite` 是一款免费的小软件，可以设置不同软件在激活的时候自动切换到指定的语言。典型的小而美的软件 👍。

> 2024.08.05 弃用

![](./switch-input.png)

### 微信输入法

> 2024.08.05 启用

之前一直都是使用原生的输入法，因为觉得它可以满足我大多数需求，只要配合 `自动切换输入法` 就非常顺手了。谁知道微信输入法还是挖掘到了用户的很多痛点，强势来袭。

最直接的痛点就是它可以设置指定应用的默认输入为英文，这样我就可以卸载 `自动切换输入法` 。其他的诸如英文和数字前后自动空格，在编写 markdown 文件时非常实用。

![](./input/wechat-1.png)
![](./input/wechat-2.png)

使用微信输入法需要解决一个问题就是它只能通过 `shift` 来切换中英文。而我之前已经习惯通过 `「中/英」` 来切换。

Mac 上是通过`「中/英」`来切换 ABC 输入法和拼音输入法，本质上是切换输入法而不是英文和中文。

我现在是打算只启用微信输入法，然后由微信输入法来切换中文和英文。所以在启用 shift 切换的同时，我希望将 `「中/英」` 映射成 `shift` 键，这样可以保持形成已久的肌肉记忆。

先关闭 `「中/英」` 切换输入法（保持一直都是微信输入法）
![](./input/wechat-3.png)

启用 `shift` 来切换中英文
![](./input/wechat-4.png)

通过 [karabiner-elements](https://karabiner-elements.pqrs.org/docs/getting-started/installation/) 来将 `「中/英」` 映射成 `left_shift` 键。

![](./input/5.png)

这样我就达到了一直使用微信输入法，然后通过 `「中/英」` 和 `left_shift` 都可以切换中英文的目的。

> 最好是可以将习惯改成 `left_shift` ，这样在同时使用 Windows 和 Mac 的时候可以保持快捷键统一。

2024-09-30 补充
`karabiner-elements` 不稳定，偶尔在初次按下时拦截不到`「中/英」`，会导致当前是微信输入法，按下之后变成了 ABC 输入法。接着就一直可以被拦截到，导致我疯狂按它都是停留在 ABC，需要通过鼠标去状态栏那边改输入法。于是直接卸载 `karabiner-elements` ，保留 `「中/英」` 本来有的功能。不做按键映射了。

让它保持大小写的切换，起码可以一直停留在微信输入法里，这样切换中英文方便一点。

2024-10-16 补充

可能不是 `karabiner-elements` 不稳定，而是之前的 ABC 输入法是排在第一位，属于 mac 的默认输入法，在切换应用的时候，mac 将输入法恢复成了默认的 ABC，导致此时再按 `「中/英」`，哪怕成功映射成了 `left_shift` 也无济于事了。

期间为了让 ABC 可以快速的切换到 微信输入法，我还将左下角的 🌍 按键设置成切换输入法。
![](./input/地球切换输入法.png)

今天发现一个小窍门，可以先在输入法中添加一个英文输入法，此时默认的 ABC 输入法就可以被删除了。然后微信输入法成功变成了第一位，成为默认输入法。
<video src="https://www.90s.co/videos/设置默认输入法.mov" controls />
<PictureTip>设置过程</PictureTip>

直到今天，关于输入法的设置应该算是终结了，可以保持默认一直都是微信输入法，不管怎么切换应用都是它。而且支持特定应用使用指定的输入语言。最开心的是这一切无需其他软件配合完成。

### MooM

这是 mac 上一款管理窗口的付费软件，我最常用的就是左右分屏功能，由于在公司用的是 27 寸 4K 显示器，我可以轻松的将 Chrome 和 vscode 左右分屏，一边负责代码，一边负责页面呈现和调试，无需窗口切换，非常高效。

设置 -> mouse -> zoom button controls > pop up controls when hovering over a zoom button (取消勾选)

避免和系统自带的左右分屏冲突，moom 只保留鼠标拖拽到屏幕边缘触发分屏.

> 升级到 mac os 15.0.1 之后弃用，系统自带左右分屏了。

### iHost

管理本地 host 的免费软件，可以轻松的对 host 文件进行编辑和分类，自由的切换分组。[Github](https://github.com/toolinbox/iHosts)

### 视频播放器

开源播放器[iiNA](https://iina.io)，只专注于视频播放，没有其他附属功能。

### 欧陆词典

欧陆词典它只是在状态栏有一个搜索图标，方便随时查询单词。

### 解压软件 （废弃）

之前一直使用的是 [keka](https://github.com/aonez/Keka)，直到写这篇文章的时候，发现我上次装机忘记装 keka 了，也一直正常使用到现在，所以我大概率是不需要解压软件了，mac 自己可以对 zip 文件进行压缩和解压，满足我极少情况下的需求。可能是职业原因，基本文件都在云上，压缩文件这类“本地处理”的情景越少了。

### SCROLL REVERSER（鼠标反转）

如果你不是使用妙控鼠标，而是罗技等第三方鼠标，那么滚轮的方向和触摸板的方向是不一致的，可以使用这款[软件](https://pilotmoon.com/scrollreverser/?_blank)颠倒一下鼠标滚轮方向。

### 官方实用软件

[开发者实用工具](https://developer.apple.com/download/all/?q=Additional)，比如系统级别的网络设置，类似 chrome 上的网络设置。

## 系统快捷键

[官方地址](https://support.apple.com/zh-cn/HT201236)

| 快捷键                | 功能                             |
| --------------------- | -------------------------------- |
| cmd + shift + .       | 显示/隐藏 被隐藏的文件           |
| cmd + shift + opt + v | 把富文本粘贴为纯文本             |
| cmd + ctr + Q         | 锁屏                             |
| cmd + shift + G       | 进入文件夹                       |
| cmd + opt + esc       | 强制关闭面板                     |
| cmd + shift + 3       | 全屏截图 （加 ctr 截图到粘贴板） |
| cmd + shift + 4       | 自定义区域截图                   |
| cmd + shift + 4       | 再按 space 键（截图程序窗口）    |

## 开发环境

### IP 地址

由于屏(bi)蔽(guan)糟(shuo)粕(guo)的政策，我们和外界的沟通渠道被切断，导致在安装一些国外的软件的时候，会无休止的卡在 loading 状态，或者类似报错:

```
Failed to connect to raw.githubusercontent.com port 443: Connection refused
```

1、 在 [这里](https://www.ipaddress.com) 查询 raw.githubusercontent.com 的真实 IP

2、 在 host 文 件里配置 IP 映射 （推荐[iHost](https://github.com/toolinbox/iHosts)）

```
199.232.28.133 raw.githubusercontent.com
199.232.68.133 raw.github.com
140.82.113.4 github.com
```

以上设置只能解决链接 github 的问题，我们有很多软件都是使用国外的，所以几乎是必须准备一个 🪜。mac 上推荐使用 [ShadowsocksX](https://github.com/shadowsocks/ShadowsocksX-NG) 和 [clashX](https://github.com/yichengchen/clashX)。

### 必备软件

-   [chrome](https://www.google.cn/chrome/index.html) 登陆谷歌账号可以同步所有书签和账号密码
-   [vscode](https://code.visualstudio.com/) 登陆 github 账号可以同步所有偏好设置和插件
-   [Git](https://git-scm.com/downloads)
-   ~~[nvm](https://github.com/nvm-sh/nvm) 用于管理 node~~ pnpm env 替代了
-   ~~[node](https://nodejs.org/en/) 推荐直接使用 nvm 安装。~~
-   [oh-my-zsh](https://ohmyz.sh/) (提供非常多的快捷命令：如 gst = git status)
-   [HomeBrew](https://brew.sh/zh-cn/) （安装开发软件很实用 如 brew install nginx）[墙内安装脚本](https://gitee.com/cunkai/HomebrewCN)
-   [remote desktop](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac#what-about-the-mac-beta-client) 用于访问 window 测试机

#### oh-my-zsh

这个如果没有 🪜 很难安装。这边推荐使用[国内镜像](https://gitee.com/mirrors/oh-my-zsh/)

根据如下步骤：

-   进入到用户根目录 （正常直接打开终端，默认就是）。

-   下载安装脚本：

```bash
wget https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh
```

-   赋予安装脚本权限：

```bash
chmod +x install.sh
```

-   执行脚本

```
./install.sh
```

> 如果没有 🪜，可以修改一下该脚本

vim ./install.sh

```sh{3,4}
# Default settings
ZSH=${ZSH:-~/.oh-my-zsh}
REPO=${REPO:-ohmyzsh/ohmyzsh}
REMOTE=${REMOTE:-https://github.com/${REPO}.git}
BRANCH=${BRANCH:-master}
```

改为

```sh{3,4}
# Default settings
ZSH=${ZSH:-~/.oh-my-zsh}
REPO=${REPO:-mirrors/ohmyzsh}
REMOTE=${REMOTE:-https://gitee.com/${REPO}.git}
BRANCH=${BRANCH:-master}
```

按 esc 键退出编辑模式

按 :wq 保存

重新执行 ./install.sh

-   安装插件

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

```

将插件声明到配置文件 .zshrc

```sh
plugins=(git nvm zsh-syntax-highlighting zsh-autosuggestions)
```

-   更新 .zshrc 配置

```bash
source .zshrc
```

![](./oh-my-zsh.png)

### 环境准备

配置 Github 和 Git

```
ssh-keygen -t rsa -C "GitHub的注册邮箱"

// 一路回车

// 验证是否成功
ssh -T git@github.com

// 一般会报错如下：
Permission denied (publickey)

// 将刚才生成的 id_rsa.pub 的内容复制到 [Github](https://github.com/settings/keys)

// 再次验证

Hi yuanweihai! You've successfully authenticated,
but GitHub does not provide shell access. &nbsp;

git config --global user.email "邮箱地址"
git config --global user.name "你的名字"

```

以上我们就完成了 web 开发的最基本设置。可以 git clone 你的代码仓库到本地进行开发了。

参考配置：

/Users/alan/.ssh/config

```
Host 阿里云
  HostName 39.101.76.167
  User root
  IdentityFile /Users/alan/.ssh/vscode-ssh.pem
Host github.com
  HostName ssh.github.com
  Port 443
  User git
Host git.cocos.org
  HostName git.cocos.org
  User git
  IdentityFile /Users/alan/.ssh/id_rsa
```

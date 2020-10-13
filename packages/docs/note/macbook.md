# MacBook 之先利其器


## 常用命令

| 命令符 | 说明 |
| ------------------ | ----------------- |
| mkdir -p /data/d   | 创建多级目录 |
| mkdir aa           | 创建一个文件夹aa |
| lsof -i tcp:port   | port替换成端口号，比如6379，可以查看该端口被什么程序占用，并显示PID |
| kill 6375          | 杀掉进程 |
| whoami             | 当前用户名 |
| id -g -n $whoami   | 当前用户组名 |



## 系统设置

- 系统偏好设置-键盘-输入法-自动切换到文稿的输入法 （可以保持不同程序之间各自的输入状态）
- /usr/local/bin/sshpass -p "asdfghjkl,.456" ssh -p22 root@47.52.88.145
- 显示 / 隐藏 系统文件
```
defaults write com.apple.finder AppleShowAllFiles TRUE
killall Finder
或者
command + shift + . 
```

### 设置鼠标的移动速度
```
defaults read -g com.apple.mouse.scaling 
defaults write -g com.apple.mouse.scaling 8
```

### 截图设置
defaults write com.apple.screencapture type jpg 修改生成的图片格式

defaults write com.apple.screencapture location ~/Picture/  修改生成的图片地址 

killall SystemUIServer  使修改生效 



## 优秀软件

- <http://pilotmoon.com/scrollreverser/?_blank>  鼠标方向
- <https://brew.sh?_blank>  命令行 下载软件
- <http://ohmyz.sh/?_blank>  终端辅助，寻找文件方便
- <https://gist.github.com/arunoda/7790979>  保存ssh密码



## 系统捷键

### 系统

* shift-option-command-v，把富文本粘贴为纯文本
* control+command+Q 锁屏
* Shift+Command+G 进入文件夹

### 截图

- Command＋shift＋3 全屏截图
- Command＋shift＋4 自定义区域
- Command＋shift＋4 之后再按 “空格” 点击某个窗口，就截图该窗口
- 以上所有操作 加按 “control” 可以直接在黏贴版使用


## VScode

- cmd k 0 收起代码
- cmd k j 展开代码

命令行打开项目

- 在vscode中，cmd+shift+p 打开命令面板
- 输入shell
- 选择 shell command 3 Install ‘code' command in PATH

## chrome
```
cmd + p 	// 快速搜索并打开想要的文件
cmd + opt + f    // 搜索关键字
cmd + l 	 // 跳转到源码的行
```

## 疑难杂症

### 安装依赖被墙

报错： Failed to connect to raw.githubusercontent.com port 443: Connection refused 

1、 在 [这里](https://www.ipaddress.com) 查询raw.githubusercontent.com的真实IP

2、 在host文件里配置 199.232.28.133  raw.githubusercontent.com

### 安装xcode-select

报错： gyp: No Xcode or CLT version detected!

1、 执行 `xcode-select --install`

2、 如果提示已经安装则先卸载再安装过 
  - `xcode-select --print-path`
  - `sudo rm -r -f /Library/Developer/CommandLineTools`
  - `xcode-select --install`

3、如果还继续报错 可以执行下 `sudo xcode-select --reset s`

或者 直接官网下载： https://developer.apple.com/download/more/ 


## brew
[教程](https://blog.csdn.net/WizardtoH/article/details/104744008)

cd ~
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh >> brew_install

BREW_REPO="git://mirrors.ustc.edu.cn/brew.git"

/bin/bash brew_install

卡在：
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...

这时候直接Ctrl+C结束，通过ustc的源进行配置

mkdir -p /usr/local/Homebrew/Library/Taps/homebrew/
cd /usr/local/Homebrew/Library/Taps/homebrew
git clone https://mirrors.ustc.edu.cn/homebrew-core.git


输入brew help显示帮助信息则说明安装成功


替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git

替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git

echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.cloud.tencent.com/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
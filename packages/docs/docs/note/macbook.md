# MacBook 之先利其器


## 常用命令
```
cd ~/ 返回用户对根目录
cd /  返回硬盘对根目录
cd ../ 返回上一级目录
pwd  显示当前目录
touch 1.txt 新建文档
open . 打开当前路径
ls -a 显示隐藏文件夹
在终端 command + n 新开一个窗口
在终端 command + t 当前窗口创建一个tab
Shift+Command+G  mac进入文件夹
mkdir -p /data/db  创建多级目录
mkdir aa 创建一个文件夹aa
mkdir aa && cd aa 创建一个文件夹aa 并进入

// 把文件夹的权限给自己，免去每次输入sudo
sudo chown -R "alan":admin /usr/local/lib/node_modules
```

显示 / 隐藏 系统文件
```
defaults write com.apple.finder AppleShowAllFiles TRUE
killall Finder
或者
command + shift + . 
```

查看占用端口的程序
```
lsof -i tcp:port (port替换成端口号，比如6379，可以查看该端口被什么程序占用，并显示PID )
kill 6375
```


## 系统设置

- 系统偏好设置-键盘-输入法-自动切换到文稿的输入法 （可以保持不同程序之间各自的输入状态）
- /usr/local/bin/sshpass -p "asdfghjkl,.456" ssh -p22 root@47.52.88.145

## 优秀软件

- <http://pilotmoon.com/scrollreverser/?_blank>  鼠标方向
- <https://brew.sh?_blank>  命令行 下载软件
- <http://ohmyz.sh/?_blank>  终端辅助，寻找文件方便
- <https://gist.github.com/arunoda/7790979>  保存ssh密码


## 生产力软件的使用技巧

### chrome
```
cmd + p 	// 快速搜索并打开想要的文件
cmd + opt + f    // 搜索关键字
cmd + l 	 // 跳转到源码的行
```

## 快捷键

### 系统

* shift-option-command-v，把富文本粘贴为纯文本
* control+command+Q 锁屏

### 截图

- Command＋shift＋3 全屏截图
- Command＋shift＋4 自定义区域
- Command＋shift＋4 之后再按 “空格” 点击某个窗口，就截图该窗口
- 以上所有操作 加按 “control” 可以直接在黏贴版使用

::: tip 截图地址
defaults write com.apple.screencapture type jpg 修改生成的图片格式
defaults write com.apple.screencapture location ~/Picture/  修改生成的图片地址
killall SystemUIServer  使修改生效
:::
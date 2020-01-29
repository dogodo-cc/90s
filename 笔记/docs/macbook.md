# MacBook 之手持利剑，笑傲江湖！


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

## 命令报错
```
No write since last change (add ! to override)

```
- 解释：有修改未保存。
- 解决：使用命令`:wq!`存盘并退出
- 或者`shift+zz`


## macbook 系统功能
### 截图
```
command+Shift+3：截取整个屏幕。
command+Shift+4：截取一部分屏幕。
defaults write com.apple.screencapture type jpg 修改生成的图片格式
defaults write com.apple.screencapture location ~/Picture/  修改生成的图片地址
killall SystemUIServer  使修改生效
```

### 本地服务器
```
cd 到目录
php -S localhost:3000
php -S 0.0.0.0:8000  同局域网可访问
192.168.1.5:8000/fish/views/buy-compass.php
```

## macbook 系统设置

- 系统偏好设置-键盘-输入法-自动切换到文稿的输入法 （可以保持不同程序之间各自的输入状态）

## macbook 优秀软件

- <http://pilotmoon.com/scrollreverser/?_blank>  鼠标方向
- <https://brew.sh?_blank>  命令行 下载软件
- <http://ohmyz.sh/?_blank>  终端辅助，寻找文件方便
- <https://gist.github.com/arunoda/7790979>  保存ssh密码

```
/usr/local/bin/sshpass -p "asdfghjkl,.456" ssh -p22 root@47.52.88.145
```

## 修改host
```
sudo -i  // 暂时获得超级管理员权限

vi /etc/hosts
 
```


## 生产力软件的使用技巧

### chrome
```
cmd + p 	// 快速搜索并打开想要的文件
cmd + opt + f    // 搜索关键字
cmd + l 	 // 跳转到源码的行
```

### webstorm
- 破解 http://idea.lanyus.com/

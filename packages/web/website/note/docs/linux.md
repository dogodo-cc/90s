# linux 服务器配置

## root 用户登陆
```
ssh root@47.52.88.145
```
- 输入yes 继续
- 输入密码


## 软件安装

```
apt install nodejs-legacy
```


## 外面的世界
如果邮件提示Google失效了，运行
```
letsencrypt renew
```

## NGX
```
sed -i  's/\/var\/www\/html/\/data\/90s/' /etc/nginx/sites-enabled/default
nginx -s reload

```

## php 配置

- apt install php
- vim /etc/nginx/sites-enabled/default
- 按 `/` 然后 输入 `localhost` 找到
```
        #location ~ \.php$ {
        #       include snippets/fastcgi-php.conf;
        #
        #       # With php7.0-cgi alone:
        #       fastcgi_pass 127.0.0.1:9000;
        #       # With php7.0-fpm:
        #       fastcgi_pass unix:/run/php/php7.0-fpm.sock;
        #}
```  

- 去掉注释和不需要的节，改为

```
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.0-fpm.sock;
    }
```

- 重启 Nginx 生效，sudo nginx -s reload


## vim 使用
```
touch ~/.bash_profile 创建文件
vim ~/.bash_profile 编辑文件
```
- 按  `i` 进入编辑，`s` 删除光标所在的字符
- 按 `esc` 退出编辑,再按 `:` 冒号。
按 `w` 写入
按 `q` 退出
按 `x` 等于同时按了 `w` 和 `q`

## zsh
npx live-server --host=localhost --port=3000
alias npxls="npx live-server --host=localhost --port=3000"
vim ~/.zshrc


## linux 常用命令

#### 系统信息
```bash
arch     显示机器的处理器架构(1) 
uname -m 显示机器的处理器架构(2) 
uname -r 显示正在使用的内核版本  
date 显示系统日期 
cal 2007 显示2007年的日历表 
```

#### 文件和目录
```bash
cd /home 进入 '/home' 目录
cd .. 返回上一级目录 
cd ../.. 返回上两级目录 
cd 进入个人的主目录 
cd - 返回上次所在的目录 
pwd 显示工作路径

ls 查看目录中的文件
ls *[0-9]* 显示包含数字的文件名和目录名
tree 显示文件和目录由根目录开始的树形结构

mkdir dir1 创建一个叫做 'dir1' 的目录
mkdir dir1 dir2 同时创建两个目录
mkdir -p /dir1/dir2/dir3 创建一个目录树

rm -f file1 删除一个叫做 'file1' 的文件' 
rmdir dir1 删除一个叫做 'dir1' 的目录' 
rm -rf dir1 删除一个叫做 'dir1' 的目录及其内容 
rm -rf dir1 dir2 同时删除两个目录及其内容

mv dir1 new_dir 重命名/移动 一个目录/文件 
cp file1 file2 复制一个文件
```

## 创建[硬|软]链接
```bash
ln sourceFile targetFile 硬连接
ln -s sourceFile targetFile 软连接
```
ln 会保持每一处链接文件的同步性，无论改动了哪一处，其他文件都会同步更改。
- 硬链接：会在选定的位置上生成一个和源文件大小相同的文件
- 软链接：会在你选定的位置上生成一个文件的镜像，不会占用磁盘空间 （类似win的快捷方式）

#####【硬连接】
硬连接指通过索引节点来进行连接。在Linux的文件系统中，保存在磁盘分区中的文件不管是什么类型都给它分配一个编号，称为索引节点号(Inode Index)。在Linux中，多个文件名指向同一索引节点是存在的。一般这种连接就是硬连接。硬连接的作用是允许一个文件拥有多个有效路径名，这样用户就可以建立硬连接到重要文件，以防止“误删”的功能。其原因如上所述，因为对应该目录的索引节点有一个以上的连接。只删除一个连接并不影响索引节点本身和其它的连接，只有当最后一个连接被删除后，文件的数据块及目录的连接才会被释放。也就是说，文件真正删除的条件是与之相关的所有硬连接文件均被删除。



#####【软连接】
另外一种连接称之为符号连接（Symbolic Link），也叫软连接。软链接文件有类似于Windows的快捷方式。它实际上是一个特殊的文件。在符号连接中，文件实际上是一个文本文件，其中包含的有另一文件的位置信息。

##### 对比
 不允许给目录创建硬链接。只有在同一文件系统中的文件之间才能创建链接，而且只有超级用户才有建立硬链接权限。
 软链接没有硬链接以上的两个限制，因而现在更为广泛使用，它具有更大的灵活性，甚至可以跨越不同机器、不同网络对文件进行链接。但是软链接的缺点在于：因为链接文件包含有原文件的路径信息，所以当原文件从一个目录下移到其他目录中，再访问链接文件，系统就找不到了，而硬链接就没有这个缺陷，你想怎么移就怎么移；还有它要系统分配额外的空间用于建立新的索引节点和保存原文件的路径。

 ##### 使用场景
 项目中nginx的配置文件conf可以放在项目里方便管理，然后用软链接的方式链接到etc/nginx/server/,随时跟着生效。
 ```bash
 ln -s gaoding.nginx.conf /usr/local/etc/nginx/servers/gaoding.nginx.conf
 ln -s /Users/yuanweihai/gaoding/gaoding-hrm/gaoding.nginx.conf /usr/local/etc/nginx/servers/gaoding.nginx.conf
 ```

 ## 下载网站
 ```bash
 wget -r url http://gipo.valentine.uunn.cn/  下载网站
 ```
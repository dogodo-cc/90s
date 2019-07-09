```bash
sudo gem install travis      # Travis CI 官方 cli 工具
travis login --pro      # 登录 Travis CI ，账号密码为你 Github 的账号密码
travis encrypt 'GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>' --add     # 加密 github token 并自动添加至配置文件
```

如果报错：
  * github_name has not granted Travis CI the required permissions, please log in via travis-ci.com *

  登录 travis 在设置里面把 一系列东西都打勾，我目前不知道意思，但是打勾就登录成功了。大概是授权之类的巴啦啦。

  c223042f03316d8d0da63d4718b9262f643634e3

  a06f2db160ae321ee50b2d8053d79de016f12a49
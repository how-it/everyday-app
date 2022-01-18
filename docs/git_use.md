# Git基本使用

参考链接

- [Git](https://git-scm.com)
- [Git教程 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/896043488029600)

## 设置用户信息

```sh
$ git config --global user.name "<your name>"

$ git config --global user.email "<your email>"
```

## 添加、提交文件

```sh
# 查看仓库状态
$ git status

# 添加某几个文件
$ git add <file1> <file2>

# 添加全部文件
$ git add --all

# 提交文件
$ git commit -m "messages"
```

## 分支

### 基本使用

```sh
# 查看当前分支
$ git branch

# 删除dev分支
$ git branch -d dev

# 查看分支合并图
$ git log --graph
```

### 创建分支、切换分支

**注意** 若从`master`分支创建`dev`分支，则需要先切换到`master`分支

```sh
$ git checkout -b dev

# 相当于
$ git branch dev
$ git checkout dev
```

### 合并分支

```sh
# 切换到master分支
$ git checkout master

# 合并dev分支
$ git merge dev

# 另一种合并方式，可以看出曾经做过合并
$ git merge --no-ff -m "merge with no-ff" dev
```

## 远程仓库

### 创建SSH Key

创建完成后在`~/`下找到`.ssh/`文件夹，里面有两个文件`id_rsa`和`id_rsa.pub`，将`id_rsa.pub`文件里面的内容复制到GitHub或Gitee上即可

```sh
$ ssh-keygen -t rsa -C "<your email>"
```

### 常用操作

```sh
# 克隆远程仓库
$ git clone git@github.com:<name>/<repo>.git

# 本地仓库关联远程仓库
$ git remote add origin git@github.com:<name>/<repo>.git

# 将本地仓库的全部内容推送到远程仓库
# -u 表示将远程master分支和本地master分支关联起来
$ git push -u origin master

# 查看远程仓库信息
$ git remote -v
```

### 本地分支和远程分支的关系

以`dev`分支举例

1. 本地有dev分支而远程没有，需要将本地的dev分支推送到远程

   ```sh
   # 将本地dev分支推送到远程
   $ git push origin dev:dev

   # 将远程的dev分支和本地dev分支关联起来
   $ git branch --set-upstream-to=origin/dev dev
   ```

2. 远程有dev分支而本地没有，需要将远程的dev分支拉取到本地

   ```sh
   # 在本地创建dev分支
   $ git checkout -b dev

   # 将远程的dev分支和本地dev分支关联起来
   $ git branch --set-upstream-to=origin/dev dev

   # 将远程的dev分支拉取到本地dev分支
   $ git pull origin dev
   ```

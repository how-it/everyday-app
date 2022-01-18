# node环境搭建

## 使用nvm进行node版本管理

官网

- <https://github.com/nvm-sh/nvm>
- <https://github.com/coreybutler/nvm-windows>

官方介绍

> nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

## Windows下安装nvm

地址：<https://github.com/coreybutler/nvm-windows/releases>

下载`nvm-setup.zip`，解压之后双击`nvm-setup.exe`进行安装

**注意** 安装路径选择D盘，且不能有中文和空格

## 设置镜像（可选）

在nvm安装目录下面的`settings.txt`文件里面添加镜像

```tex
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

## 使用nvm

**注意** 若切换版本报错，尝试以管理员身份运行powershell

```sh
# 查看已经安装的node版本
$ nvm list

# 查看可安装的版本
$ nvm list available

# 安装
$ nvm install v16

# 切换node版本
$ nvm use 16.13.2
```

查看当前环境

```sh
# 查看node版本
$ node -v

# 查看npm版本
$ npm -v
```

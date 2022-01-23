# 开发过程的笔记

## 什么是Node.js

Node.js 是一个基于 **Chrome V8** 引擎的 JavaScript 代码运行环境。 Node.js使用了一个**事件驱动**、**非阻塞式I/O**的模型（ Node.js的特性），使其轻量级又高效。 Node.js 的包管理器 npm 是全球最大的开源库生态系统。

## 什么是NPM

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 **"npm -v"** 来测试是否成功安装。类似于pip？？？？

简单来说就是管理node

### 使用NPM安装模块

```
npm install <Module Name>
```

## 什么是NVM

NVM是管理node.js的类似与anaconda。

## 什么是vite

vite 是一个基于 Vue3 单文件组件的非打包开发服务器，服务器启动的时候不需要打包，启动迅速。

## cmd，powershell，terminal区别

**cmd**，windows命令行窗口。

**Powershell**兼容原来的cmd使用的命令格式，是cmd的升级版，类似于Linux的bash，都是基于壳程序的shell。

**Terminal**集成windows上的powershell，cmd，windows linux子系统。



## 将代码上传到分支操作

一，[创建分支](git_use.md)

二，提交改动文件

```
git add <文件名>
# 根据要求输入commit信息
npm run commit
# 上传到远程分支
git push origin dev:dev


```


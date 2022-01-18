# 安装electron

官网

- <https://www.electronjs.org>
- <https://github.com/electron/electron>

官方介绍

> Build cross-platform desktop apps with JavaScript, HTML, and CSS

## 添加镜像

下面两个镜像随便选一个

```sh
$ npm config set electron_mirror=https://npmmirror.com/mirrors/electron/

# or
$ npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/
```

## 安装

**注意** 安装electron一定要指定版本号，因为镜像的版本要低一点，请前往镜像网址查看最新的版本

```sh
$ npm install electron@16.0.6 --save-dev
```

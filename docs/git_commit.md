# Git提交规范

参考链接

- <https://github.com/angular/angular/blob/master/.gitmessage>

## Git提交信息应符合如下规范

```tex
<type>(<scope>): <subject>

<body>

<footer>
```

## 各部分的解释如下

### type

commit的类型

- feat: 新特性
- fix: 修改bug
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改
- test: 测试用例修改
- chore: 其他修改，比如构建流程、依赖管理

### scope

commit影响的范围，可以是某一个文件名或者文件夹或者如下

- core
- common
- compiler
- elements
- http
- router
- upgrade

### subject

commit内容的简短描述

- 使用现在时，例如"change"，而不是"changed"，也不是"changes"
- 首字母小写
- 末尾不要有标点符号

### body

commit内容的具体描述

- 使用现在时，例如"fix"，而不是"fixed"，也不是"fixes"
- 首字母大写
- 末尾有标点符号
- 应该解释清楚做这些修改的原因以及影响

### footer（可选）

一些备注，例如解决某个issue，或者关闭某个pull request

- Fixes #<issue number>
- Closes #<pr number>

## 使用Commitizen

官网

- <https://github.com/commitizen/cz-cli>

官方介绍

> When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.

### 下载

```sh
$ npm install commitizen --save-dev

$ npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

### 使用

修改`package.json`

```json
{
  "scripts": {
    "commit": "git cz"
  }
}
```

使用`npm run commit`代替`git commit`

```sh
$ npm run commit
```

# 融合electron

## 新建`main.js`文件

参考链接：<https://github.com/electron/electron-quick-start/blob/master/main.js>

将其中的

```js
mainWindow.loadFile('index.html')
```

改为

```js
if (process.env.npm_lifecycle_event === 'electron:dev') {
  mainWindow.loadURL('http://localhost:8000')
} else {
  mainWindow.loadFile('./dist/index.html')
}
```

## 重组`src/`文件夹

改动前`src/`目录结构：

```tex
.
├── App.vue
├── assets
│   └── logo.png
├── components
│   └── HelloWorld.vue
├── env.d.ts
└── main.ts
```

改动后`src/`目录结构：

```tex
.
├── main
│  └── main.js
└── render
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   └── HelloWorld.vue
    ├── env.d.ts
    └── main.ts
```

## 修改`index.html`

```html
<!-- 修改前 -->
<script type="module" src="/src/main.ts"></script>

<!-- 修改后 -->
<script type="module" src="/src/render/main.ts"></script>
```

## 修改`package.json`

```json
{
  "main": "src/main/main.js",
  "scripts": {
    "dev": "vite --port 8000",
    "electron:dev": "electron .",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  }
}
```

## 启动项目

```sh
# 启动vite服务
$ npm run dev

# 启动electron服务
$ npm run electron:dev
```

**提示** 快捷键`Ctrl`+`Shift`+`i`可以打开调试工具

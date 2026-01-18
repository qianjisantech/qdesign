# QDesign

一个基于Vue 3的轻量级组件库

## 安装

```bash
npm install qdesign
# 或
yarn add qdesign
# 或
pnpm add qdesign
```

## 快速开始

### 全局注册

```js
import { createApp } from 'vue'
import QDesign from 'qdesign'
import 'qdesign/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(QDesign)
app.mount('#app')
```

### 按需导入

```js
import { QInput, QButton } from 'qdesign'
import 'qdesign/style.css'
```

## 组件列表

- QInput - 输入框
- QButton - 按钮
- QSelect - 选择器
- QSearch - 搜索框
- QTabs/QTab - 选项卡
- QRichText - 富文本编辑器
- QUserSelect - 用户选择器
- QCollapse - 折叠面板
- QEditableText - 可编辑文本
- QTagInput - 标签输入框

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 发布到npm
npm publish
```

## 许可证

MIT
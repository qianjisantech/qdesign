import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 引入 WangEditor 样式
import '@wangeditor/editor/dist/css/style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

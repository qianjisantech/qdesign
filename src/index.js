// 导入组件库
import { install } from './components'

// 导入样式
import './style.css'

// 导出install函数和所有组件
export * from './components'

// 默认导出install函数，用于Vue.use()
export default install

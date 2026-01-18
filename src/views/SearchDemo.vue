<template>
  <div class="demo-page">
    <section class="component-section">
      <h2>搜索框组件 (QSearch)</h2>
      <p class="component-desc">带下拉建议的搜索框组件，支持搜索图标、清除按钮和搜索建议列表。</p>
      <div class="component-demo">
        <QSearch
          v-model="searchValue"
          label="搜索"
          placeholder="搜索任务、项目..."
          :suggestions="searchSuggestions"
          @search="handleSearch"
        />
        <QSearch
          v-model="searchWithButton"
          placeholder="带按钮的搜索框"
          :suggestions="searchSuggestions"
          show-search-button
          @search="handleSearch"
        />
      </div>

      <div class="data-preview">
        <h4>搜索数据</h4>
        <pre>{{ JSON.stringify({ searchValue, searchWithButton }, null, 2) }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QSearch from '../components/QSearch/index.vue'

const searchValue = ref('')
const searchWithButton = ref('')

const searchSuggestions = [
  {
    icon: '✓',
    iconColor: '#52c41a',
    title: 'cld-es适配录屏',
    code: 'UG-646789'
  },
  {
    icon: '🐛',
    iconColor: '#ff4d4f',
    title: '修复用户登录异常问题',
    code: 'BUG-123456'
  },
  {
    icon: '📋',
    iconColor: '#1890ff',
    title: '优化项目看板性能',
    code: 'TASK-789012'
  }
]

const handleSearch = (value) => {
  console.log('搜索:', value)
}
</script>

<style scoped>
.demo-page {
  padding: 40px;
  background-color: #f4f5f7;
}

.component-section {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.component-section h2 {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  color: #172b4d;
}

.component-desc {
  margin: 0 0 20px;
  padding-bottom: 16px;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
  border-bottom: 1px solid #e4e7ed;
}

.component-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.data-preview {
  margin-top: 24px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.data-preview h4 {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: #606266;
}

.data-preview pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #303133;
  line-height: 1.6;
}
</style>

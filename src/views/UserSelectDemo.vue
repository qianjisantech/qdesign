<template>
  <div class="demo-page">
    <section class="component-section">
      <h2>人员选择组件 (QUserSelect)</h2>
      <p class="component-desc">支持单选和多选的人员选择器，带头像展示和搜索过滤功能。</p>
      <div class="component-demo">
        <QUserSelect
          v-model="formData.assignee"
          label="指派人 (单选)"
          :values="userList"
          placeholder="选择指派人"
        />
        <QUserSelect
          v-model="formData.watchers"
          label="关注者 (多选)"
          :values="userList"
          multiple
          placeholder="选择关注者"
        />
      </div>

      <div class="data-preview">
        <h4>表单数据</h4>
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import QUserSelect from '../components/QUserSelect/index.vue'

const formData = reactive({
  assignee: '',
  watchers: []
})

const userList = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', color: '#4A7BA7' },
  { id: 2, name: '李四', email: 'lisi@example.com', color: '#00875A' },
  { id: 3, name: '王五', email: 'wangwu@example.com', color: '#6554C0' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', color: '#FF5630' },
  { id: 5, name: '钱七', email: 'qianqi@example.com', color: '#FF991F' },
  { id: 6, name: '孙八', email: 'sunba@example.com', color: '#36B37E' }
]
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

<template>
  <div class="demo-page">
    <section class="component-section">
      <h2>下拉框组件 (QSelect)</h2>
      <p class="component-desc">支持搜索过滤的下拉选择组件，自定义选项键值配置。</p>
      <div class="component-demo">
        <QSelect
          v-model="formData.priority"
          label="优先级"
          :options="priorityOptions"
          placeholder="请选择优先级"
          required
        />
        <QSelect
          v-model="formData.status"
          label="状态 (支持搜索)"
          :options="statusOptions"
          filterable
        />
        <QSelect
          v-model="formData.issueType"
          label="事项类型"
          :options="issueTypeOptions"
          placeholder="请选择事项类型"
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
import QSelect from '../components/QSelect/index.vue'

const formData = reactive({
  priority: '',
  status: '',
  issueType: ''
})

const priorityOptions = [
  { label: '最高', value: 'highest' },
  { label: '高', value: 'high' },
  { label: '中', value: 'medium' },
  { label: '低', value: 'low' },
  { label: '最低', value: 'lowest' }
]

const statusOptions = [
  { label: '待办', value: 'todo' },
  { label: '进行中', value: 'in-progress' },
  { label: '已完成', value: 'done' },
  { label: '已关闭', value: 'closed' },
  { label: '被阻塞', value: 'blocked' }
]

const issueTypeOptions = [
  { label: '需求', value: 'requirement' },
  { label: '任务', value: 'task' },
  { label: 'BUG', value: 'bug' }
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

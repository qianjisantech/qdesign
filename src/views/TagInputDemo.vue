<template>
  <div class="demo-page">
    <section class="component-section">
      <h2>标签输入框 (QTagInput)</h2>
      <p class="component-desc">支持标签展示和编辑的输入框组件，按回车或逗号添加标签。</p>
      <div class="component-demo">
        <QTagInput
          v-model="formData.tags"
          label="标签"
          placeholder="输入标签，按回车添加"
        />
        <QTagInput
          v-model="formData.labels"
          label="分类标签"
          placeholder="输入多个标签，用逗号分隔"
          separator=","
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
import QTagInput from '../components/QTagInput/index.vue'

const formData = reactive({
  tags: ['测试', '定时任务'],
  labels: []
})
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

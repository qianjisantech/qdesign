<template>
  <div class="demo-page">
    <section class="component-section">
      <h2>富文本编辑器 (QRichText)</h2>
      <p class="component-desc">基于 WangEditor 的富文本编辑器组件，支持完整的富文本编辑功能。</p>
      <div class="component-demo">
        <QRichText
          v-model="formData.description"
          label="描述"
          placeholder="请输入详细描述..."
          height="300px"
        />
      </div>

      <div class="data-preview">
        <h4>HTML内容</h4>
        <div class="html-preview" v-html="formData.description"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import QRichText from '../components/QRichText/index.vue'

const formData = reactive({
  description: ''
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

.html-preview {
  padding: 16px;
  background-color: white;
  border-radius: 4px;
  min-height: 100px;
}
</style>

<template>
  <div class="demo-page">
    <div class="page-container">
      <!-- 主内容区 -->
      <div class="page-content">
        <!-- 页面标题 -->
        <div class="page-header">
          <h1 class="page-title">TaskDetail 任务详情</h1>
          <p class="page-desc">类似 Jira 的任务详情抽屉,支持字段编辑、状态流转、标签页切换</p>
        </div>

        <!-- 基础用法 -->
        <section id="basic" class="demo-section">
          <h2 class="section-title">基础用法</h2>
          <p class="section-desc">点击按钮打开任务详情抽屉,抽屉从右侧滑入</p>
          <div class="demo-block">
            <div class="demo-source">
              <button class="open-drawer-btn" @click="showDrawer = true">
                打开任务详情
              </button>
            </div>
            <div class="demo-block-control" @click="toggleCode('basic')">
              <span class="demo-control-text">
                {{ showCode.basic ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.basic }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.basic" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;button @click="showDrawer = true"&gt;打开任务详情&lt;/button&gt;
  &lt;TaskDetail v-model="showDrawer" task-id="UG-669008" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import TaskDetail from './TaskDetail.vue'

const showDrawer = ref(false)
&lt;/script&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 功能特性 -->
        <section id="features" class="demo-section">
          <h2 class="section-title">功能特性</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">📝</div>
              <h3 class="feature-title">字段编辑</h3>
              <p class="feature-desc">支持悬停编辑任务字段,包括文本、下拉框、人员选择等多种类型</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔄</div>
              <h3 class="feature-title">状态流转</h3>
              <p class="feature-desc">可视化展示任务状态,支持快速切换任务优先级和状态</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📂</div>
              <h3 class="feature-title">标签页切换</h3>
              <p class="feature-desc">团队管理字段和开发活动两个标签页,支持公司标准化信息和团队自定义信息</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3 class="feature-title">抽屉展示</h3>
              <p class="feature-desc">从右侧滑入的抽屉形式,不影响当前页面状态,流畅的动画效果</p>
            </div>
          </div>
        </section>

        <!-- API 文档 -->
        <section id="attributes" class="demo-section api-section">
          <h2 class="section-title">Attributes</h2>
          <div class="api-table">
            <table>
              <thead>
                <tr>
                  <th>属性名</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>model-value / v-model</td>
                  <td>是否显示抽屉</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>task-id</td>
                  <td>任务 ID</td>
                  <td>string</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- 右侧锚点导航 -->
      <aside class="page-anchor">
        <div class="anchor-title">此页内容</div>
        <ul class="anchor-list">
          <li>
            <a href="#basic" :class="{ active: currentAnchor === 'basic' }">基础用法</a>
          </li>
          <li>
            <a href="#features" :class="{ active: currentAnchor === 'features' }">功能特性</a>
          </li>
          <li>
            <a href="#attributes" :class="{ active: currentAnchor === 'attributes' }">Attributes</a>
          </li>
        </ul>
      </aside>
    </div>

    <!-- TaskDetail 抽屉 -->
    <TaskDetail v-model="showDrawer" task-id="UG-669008" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskDetail from './TaskDetail.vue'

const currentAnchor = ref('basic')
const showDrawer = ref(false)

const showCode = ref({
  basic: false
})

const toggleCode = (key) => {
  showCode.value[key] = !showCode.value[key]
}
</script>

<style scoped>
.demo-page {
  width: 100%;
}

.page-container {
  display: flex;
  gap: 48px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.page-content {
  flex: 1;
  min-width: 0;
}

/* 页面头部 */
.page-header {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dcdfe6;
}

.page-title {
  margin: 0 0 12px;
  font-size: 28px;
  font-weight: 400;
  color: #303133;
  line-height: 1.5;
}

.page-desc {
  margin: 0;
  font-size: 14px;
  color: #909399;
  line-height: 1.5;
}

/* 示例区块 */
.demo-section {
  margin-bottom: 48px;
}

.demo-section:last-child {
  margin-bottom: 0;
}

.section-title {
  margin: 0 0 20px;
  font-size: 22px;
  font-weight: 400;
  color: #1f2329;
  line-height: 1.5;
}

.section-desc {
  margin: 0 0 20px;
  font-size: 14px;
  color: #606266;
  line-height: 1.8;
}

/* 示例块 */
.demo-block {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-bottom: 24px;
  transition: all 0.2s;
}

.demo-block:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.demo-source {
  padding: 24px;
}

.open-drawer-btn {
  padding: 8px 24px;
  font-size: 14px;
  color: #fff;
  background-color: #4A7BA7;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}

.open-drawer-btn:hover {
  background-color: #3a6a97;
}

.open-drawer-btn:active {
  background-color: #2a5a87;
}

.demo-block-control {
  border-top: 1px solid #dcdfe6;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  cursor: pointer;
  color: #909399;
  transition: all 0.2s;
  user-select: none;
}

.demo-block-control:hover {
  color: #409eff;
  background-color: #f9fafc;
}

.demo-control-text {
  font-size: 14px;
}

.demo-control-icon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  transition: transform 0.3s;
}

.demo-control-icon.is-active {
  transform: rotate(180deg);
}

.demo-code-wrapper {
  border-top: 1px solid #dcdfe6;
}

.demo-code {
  background-color: #2b2b2b;
}

.demo-code pre {
  margin: 0;
  padding: 18px 24px;
  font-family: 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  color: #a9b7c6;
}

.demo-code code {
  background: none;
  padding: 0;
  color: #a9b7c6;
}

/* 功能特性网格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-card {
  padding: 24px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: all 0.2s;
}

.feature-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-color: #4A7BA7;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.feature-title {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.feature-desc {
  margin: 0;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
}

/* API 表格 */
.api-section {
  margin-top: 48px;
}

.api-table {
  overflow-x: auto;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  line-height: 1.5;
  color: #5a5e66;
}

.api-table th {
  background-color: #fafafa;
  padding: 12px 10px;
  text-align: left;
  font-weight: 500;
  color: #303133;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
}

.api-table td {
  padding: 12px 10px;
  border: 1px solid #dcdfe6;
}

.api-table td:first-child {
  color: #5470c6;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 13px;
  white-space: nowrap;
}

.api-table tbody tr {
  transition: background-color 0.2s;
}

.api-table tbody tr:hover {
  background-color: #f5f7fa;
}

/* 右侧锚点导航 */
.page-anchor {
  width: 160px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  align-self: flex-start;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

.anchor-title {
  font-size: 13px;
  font-weight: 500;
  color: #303133;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #dcdfe6;
}

.anchor-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.anchor-list li {
  margin-bottom: 0;
}

.anchor-list a {
  display: block;
  padding: 6px 0;
  font-size: 14px;
  color: #606266;
  text-decoration: none;
  transition: color 0.2s;
  line-height: 1.8;
}

.anchor-list a:hover {
  color: #409eff;
}

.anchor-list a.active {
  color: #409eff;
  font-weight: 500;
}
</style>

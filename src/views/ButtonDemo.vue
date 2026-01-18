<template>
  <div class="demo-container">
    <h1 class="demo-title">Button 按钮</h1>
    <p class="demo-desc">常用的操作按钮。</p>

    <!-- 基础用法 -->
    <section class="demo-section">
      <h2 class="section-title">基础用法</h2>
      <p class="section-desc">基础的按钮用法。</p>
      <div class="demo-block">
        <QButton>默认按钮</QButton>
      </div>
      <div class="code-block">
        <pre><code>&lt;QButton&gt;默认按钮&lt;/QButton&gt;</code></pre>
      </div>
    </section>

    <!-- 按钮类型 -->
    <section class="demo-section">
      <h2 class="section-title">按钮类型</h2>
      <p class="section-desc">按钮有五种类型：默认按钮、主要按钮、成功按钮、警告按钮和危险按钮。</p>
      <div class="demo-block">
        <QButton>默认按钮</QButton>
        <QButton type="primary">主要按钮</QButton>
        <QButton type="success">成功按钮</QButton>
        <QButton type="warning">警告按钮</QButton>
        <QButton type="danger">危险按钮</QButton>
      </div>
      <div class="code-block">
        <pre><code>&lt;QButton&gt;默认按钮&lt;/QButton&gt;
&lt;QButton type="primary"&gt;主要按钮&lt;/QButton&gt;
&lt;QButton type="success"&gt;成功按钮&lt;/QButton&gt;
&lt;QButton type="warning"&gt;警告按钮&lt;/QButton&gt;
&lt;QButton type="danger"&gt;危险按钮&lt;/QButton&gt;</code></pre>
      </div>
    </section>

    <!-- 按钮尺寸 -->
    <section class="demo-section">
      <h2 class="section-title">按钮尺寸</h2>
      <p class="section-desc">Button 组件提供三种尺寸：small、medium（默认）、large。</p>
      <div class="demo-block">
        <QButton size="small">小型按钮</QButton>
        <QButton size="medium">中等按钮</QButton>
        <QButton size="large">大型按钮</QButton>
      </div>
      <div class="code-block">
        <pre><code>&lt;QButton size="small"&gt;小型按钮&lt;/QButton&gt;
&lt;QButton size="medium"&gt;中等按钮&lt;/QButton&gt;
&lt;QButton size="large"&gt;大型按钮&lt;/QButton&gt;</code></pre>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2 class="section-title">禁用状态</h2>
      <p class="section-desc">按钮不可用状态。</p>
      <div class="demo-block">
        <QButton disabled>默认按钮</QButton>
        <QButton type="primary" disabled>主要按钮</QButton>
        <QButton type="success" disabled>成功按钮</QButton>
        <QButton type="warning" disabled>警告按钮</QButton>
        <QButton type="danger" disabled>危险按钮</QButton>
      </div>
      <div class="code-block">
        <pre><code>&lt;QButton disabled&gt;默认按钮&lt;/QButton&gt;
&lt;QButton type="primary" disabled&gt;主要按钮&lt;/QButton&gt;
&lt;QButton type="success" disabled&gt;成功按钮&lt;/QButton&gt;
&lt;QButton type="warning" disabled&gt;警告按钮&lt;/QButton&gt;
&lt;QButton type="danger" disabled&gt;危险按钮&lt;/QButton&gt;</code></pre>
      </div>
    </section>

    <!-- 加载状态 -->
    <section class="demo-section">
      <h2 class="section-title">加载状态</h2>
      <p class="section-desc">点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
      <div class="demo-block">
        <QButton :loading="loading1" @click="handleClick1">默认按钮</QButton>
        <QButton type="primary" :loading="loading2" @click="handleClick2">主要按钮</QButton>
        <QButton type="success" :loading="loading3" @click="handleClick3">成功按钮</QButton>
      </div>
      <div class="code-block">
        <pre><code>&lt;QButton :loading="loading" @click="handleClick"&gt;默认按钮&lt;/QButton&gt;
&lt;QButton type="primary" :loading="loading" @click="handleClick"&gt;主要按钮&lt;/QButton&gt;
&lt;QButton type="success" :loading="loading" @click="handleClick"&gt;成功按钮&lt;/QButton&gt;</code></pre>
      </div>
    </section>

    <!-- API 说明 -->
    <section class="demo-section">
      <h2 class="section-title">API</h2>

      <h3 class="api-subtitle">Props</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>按钮类型</td>
            <td>String</td>
            <td>default / primary / success / warning / danger</td>
            <td>default</td>
          </tr>
          <tr>
            <td>size</td>
            <td>按钮尺寸</td>
            <td>String</td>
            <td>small / medium / large</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>是否加载中</td>
            <td>Boolean</td>
            <td>true / false</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h3 class="api-subtitle">Events</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击按钮时触发</td>
            <td>(event: MouseEvent)</td>
          </tr>
        </tbody>
      </table>

      <h3 class="api-subtitle">Slots</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>按钮内容</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QButton from '../components/QButton/index.vue'

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)

const handleClick1 = () => {
  loading1.value = true
  setTimeout(() => {
    loading1.value = false
  }, 2000)
}

const handleClick2 = () => {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 2000)
}

const handleClick3 = () => {
  loading3.value = true
  setTimeout(() => {
    loading3.value = false
  }, 2000)
}
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-title {
  font-size: 28px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 16px;
}

.demo-desc {
  font-size: 14px;
  color: #606266;
  margin: 0 0 32px;
  line-height: 1.6;
}

.demo-section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 20px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 12px;
}

.section-desc {
  font-size: 14px;
  color: #606266;
  margin: 0 0 16px;
  line-height: 1.6;
}

.demo-block {
  padding: 24px;
  background-color: #fafafa;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.code-block {
  margin-top: 16px;
  background-color: #f5f7fa;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  overflow: hidden;
}

.code-block pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  color: #303133;
  line-height: 1.6;
}

.api-subtitle {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
  margin: 24px 0 16px;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e7e7e7;
  margin-bottom: 24px;
}

.api-table th,
.api-table td {
  padding: 12px 16px;
  text-align: left;
  border: 1px solid #e7e7e7;
  font-size: 14px;
}

.api-table th {
  background-color: #fafafa;
  color: #303133;
  font-weight: 500;
}

.api-table td {
  color: #606266;
}

.api-table tbody tr:hover {
  background-color: #f5f7fa;
}
</style>

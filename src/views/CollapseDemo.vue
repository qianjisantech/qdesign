<template>
  <div class="demo-page">
    <div class="page-container">
      <!-- 主内容区 -->
      <div class="page-content">
        <!-- 页面标题 -->
        <div class="page-header">
          <h1 class="page-title">QCollapse 折叠面板</h1>
          <p class="page-desc">可折叠的内容区域组件，支持自定义标题和额外内容插槽</p>
        </div>

        <!-- 基础用法 -->
        <section id="basic" class="demo-section">
          <h2 class="section-title">基础用法</h2>
          <p class="section-desc">通过 title 属性设置折叠面板标题，默认展开状态</p>
          <div class="demo-block">
            <div class="demo-source">
              <QCollapse title="基础折叠面板">
                <div class="demo-content">
                  <p>这是折叠面板的内容区域。</p>
                  <p>可以放置任意内容，包括文本、表单、列表等。</p>
                </div>
              </QCollapse>
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
  &lt;QCollapse title="基础折叠面板"&gt;
    &lt;div class="demo-content"&gt;
      &lt;p&gt;这是折叠面板的内容区域。&lt;/p&gt;
      &lt;p&gt;可以放置任意内容，包括文本、表单、列表等。&lt;/p&gt;
    &lt;/div&gt;
  &lt;/QCollapse&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 默认收起 -->
        <section id="default-close" class="demo-section">
          <h2 class="section-title">默认收起</h2>
          <p class="section-desc">通过 default-open 属性控制默认展开状态</p>
          <div class="demo-block">
            <div class="demo-source">
              <QCollapse title="默认收起的面板" :default-open="false">
                <div class="demo-content">
                  <p>这个折叠面板默认是收起的。</p>
                  <p>点击标题可以展开查看内容。</p>
                </div>
              </QCollapse>
            </div>
            <div class="demo-block-control" @click="toggleCode('defaultClose')">
              <span class="demo-control-text">
                {{ showCode.defaultClose ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.defaultClose }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.defaultClose" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;QCollapse title="默认收起的面板" :default-open="false"&gt;
    &lt;div class="demo-content"&gt;
      &lt;p&gt;这个折叠面板默认是收起的。&lt;/p&gt;
      &lt;p&gt;点击标题可以展开查看内容。&lt;/p&gt;
    &lt;/div&gt;
  &lt;/QCollapse&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 额外内容插槽 -->
        <section id="extra-slot" class="demo-section">
          <h2 class="section-title">额外内容插槽</h2>
          <p class="section-desc">通过 extra 插槽可以在标题右侧添加额外内容，比如标签、按钮等</p>
          <div class="demo-block">
            <div class="demo-source">
              <QCollapse title="带额外内容的面板">
                <template #extra>
                  <div class="extra-buttons" @click.stop>
                    <button class="extra-btn" @click="handleAction1">操作1</button>
                    <button class="extra-btn" @click="handleAction2">操作2</button>
                  </div>
                </template>
                <div class="demo-content">
                  <p>这个折叠面板在标题右侧有额外的操作按钮。</p>
                  <p>点击按钮不会触发折叠/展开。</p>
                </div>
              </QCollapse>
            </div>
            <div class="demo-block-control" @click="toggleCode('extraSlot')">
              <span class="demo-control-text">
                {{ showCode.extraSlot ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.extraSlot }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.extraSlot" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;QCollapse title="带额外内容的面板"&gt;
    &lt;template #extra&gt;
      &lt;div class="extra-buttons" @click.stop&gt;
        &lt;button class="extra-btn" @click="handleAction1"&gt;操作1&lt;/button&gt;
        &lt;button class="extra-btn" @click="handleAction2"&gt;操作2&lt;/button&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;div class="demo-content"&gt;
      &lt;p&gt;这个折叠面板在标题右侧有额外的操作按钮。&lt;/p&gt;
      &lt;p&gt;点击按钮不会触发折叠/展开。&lt;/p&gt;
    &lt;/div&gt;
  &lt;/QCollapse&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleAction1 = () => {
  console.log('操作1')
}

const handleAction2 = () => {
  console.log('操作2')
}
&lt;/script&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 嵌套使用 -->
        <section id="nested" class="demo-section">
          <h2 class="section-title">嵌套使用</h2>
          <p class="section-desc">折叠面板支持嵌套使用，可以创建层级结构</p>
          <div class="demo-block">
            <div class="demo-source">
              <QCollapse title="一级面板">
                <div class="demo-content">
                  <p>这是一级面板的内容</p>
                  <QCollapse title="二级面板 - 提出中心">
                    <div class="nested-content">
                      <div class="field-item">
                        <span class="field-label">提出中心：</span>
                        <span class="field-value">技术中心</span>
                      </div>
                      <div class="field-item">
                        <span class="field-label">提出部门：</span>
                        <span class="field-value">研发部</span>
                      </div>
                    </div>
                  </QCollapse>
                  <QCollapse title="二级面板 - 承接信息">
                    <div class="nested-content">
                      <div class="field-item">
                        <span class="field-label">承接中心：</span>
                        <span class="field-value">产品中心</span>
                      </div>
                      <div class="field-item">
                        <span class="field-label">承接部门：</span>
                        <span class="field-value">产品部</span>
                      </div>
                    </div>
                  </QCollapse>
                </div>
              </QCollapse>
            </div>
            <div class="demo-block-control" @click="toggleCode('nested')">
              <span class="demo-control-text">
                {{ showCode.nested ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.nested }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.nested" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;QCollapse title="一级面板"&gt;
    &lt;div class="demo-content"&gt;
      &lt;p&gt;这是一级面板的内容&lt;/p&gt;
      &lt;QCollapse title="二级面板 - 提出中心"&gt;
        &lt;div class="nested-content"&gt;
          &lt;div class="field-item"&gt;
            &lt;span class="field-label"&gt;提出中心：&lt;/span&gt;
            &lt;span class="field-value"&gt;技术中心&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/QCollapse&gt;
    &lt;/div&gt;
  &lt;/QCollapse&gt;
&lt;/template&gt;</code></pre>
              </div>
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
                  <td>title</td>
                  <td>折叠面板标题</td>
                  <td>string</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>default-open</td>
                  <td>是否默认展开</td>
                  <td>boolean</td>
                  <td>true</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="slots" class="demo-section api-section">
          <h2 class="section-title">Slots</h2>
          <div class="api-table">
            <table>
              <thead>
                <tr>
                  <th>插槽名</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>default</td>
                  <td>折叠面板的内容区域</td>
                </tr>
                <tr>
                  <td>extra</td>
                  <td>标题右侧的额外内容区域</td>
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
            <a href="#default-close" :class="{ active: currentAnchor === 'default-close' }">默认收起</a>
          </li>
          <li>
            <a href="#extra-slot" :class="{ active: currentAnchor === 'extra-slot' }">额外内容插槽</a>
          </li>
          <li>
            <a href="#nested" :class="{ active: currentAnchor === 'nested' }">嵌套使用</a>
          </li>
          <li>
            <a href="#attributes" :class="{ active: currentAnchor === 'attributes' }">Attributes</a>
          </li>
          <li>
            <a href="#slots" :class="{ active: currentAnchor === 'slots' }">Slots</a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QCollapse from '../components/QCollapse/index.vue'

const currentAnchor = ref('basic')

const showCode = ref({
  basic: false,
  defaultClose: false,
  extraSlot: false,
  nested: false
})

const toggleCode = (key) => {
  showCode.value[key] = !showCode.value[key]
}

const handleAction1 = () => {
  alert('点击了操作1')
}

const handleAction2 = () => {
  alert('点击了操作2')
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

.demo-content {
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 4px;
}

.demo-content p {
  margin: 8px 0;
  color: #606266;
  line-height: 1.6;
}

.demo-content p:first-child {
  margin-top: 0;
}

.demo-content p:last-child {
  margin-bottom: 0;
}

.extra-buttons {
  display: flex;
  gap: 8px;
}

.extra-btn {
  padding: 4px 12px;
  font-size: 12px;
  color: #fff;
  background-color: #4A7BA7;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}

.extra-btn:hover {
  background-color: #3a6a97;
}

.nested-content {
  padding: 12px 16px;
}

.field-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
}

.field-item:last-child {
  margin-bottom: 0;
}

.field-label {
  color: #606266;
  font-weight: 500;
}

.field-value {
  color: #303133;
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

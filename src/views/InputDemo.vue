<template>
  <div class="demo-page">
    <div class="page-container">
      <!-- 主内容区 -->
      <div class="page-content">
        <!-- 页面标题 -->
        <div class="page-header">
          <h1 class="page-title">Input 输入框</h1>
          <p class="page-desc">通过鼠标或键盘输入字符</p>
        </div>

        <!-- 基础用法 -->
        <section id="basic" class="demo-section">
          <h2 class="section-title">基础用法</h2>
          <div class="demo-block">
            <div class="demo-source">
              <QInput
                v-model="formData.username"
                placeholder="请输入内容"
                style="width: 240px"
              />
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
  &lt;QInput
    v-model="formData.username"
    placeholder="请输入内容"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const formData = ref({ username: '' })
&lt;/script&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 禁用状态 -->
        <section id="disabled" class="demo-section">
          <h2 class="section-title">禁用状态</h2>
          <p class="section-desc">通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>
          <div class="demo-block">
            <div class="demo-source">
              <QInput
                v-model="formData.disabled"
                placeholder="请输入内容"
                disabled
                style="width: 240px"
              />
            </div>
            <div class="demo-block-control" @click="toggleCode('disabled')">
              <span class="demo-control-text">
                {{ showCode.disabled ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.disabled }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.disabled" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;QInput
    v-model="formData.disabled"
    placeholder="请输入内容"
    disabled
  /&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 可清空 -->
        <section id="clearable" class="demo-section">
          <h2 class="section-title">可清空</h2>
          <p class="section-desc">使用 <code>clearable</code> 属性即可得到一个可清空的输入框</p>
          <div class="demo-block">
            <div class="demo-source">
              <QInput
                v-model="formData.clearable"
                placeholder="请输入内容"
                clearable
                style="width: 240px"
              />
            </div>
            <div class="demo-block-control" @click="toggleCode('clearable')">
              <span class="demo-control-text">
                {{ showCode.clearable ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.clearable }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.clearable" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;QInput
    v-model="formData.clearable"
    placeholder="请输入内容"
    clearable
  /&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 带标签 -->
        <section id="with-label" class="demo-section">
          <h2 class="section-title">带标签</h2>
          <p class="section-desc">通过设置 <code>label</code> 属性可以为输入框添加标签</p>
          <div class="demo-block">
            <div class="demo-source">
              <QInput
                v-model="formData.email"
                label="邮箱"
                placeholder="请输入邮箱地址"
                style="width: 240px"
              />
            </div>
            <div class="demo-block-control" @click="toggleCode('label')">
              <span class="demo-control-text">
                {{ showCode.label ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.label }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.label" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;QInput
    v-model="formData.email"
    label="邮箱"
    placeholder="请输入邮箱地址"
  /&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 标签位置 -->
        <section id="label-position" class="demo-section">
          <h2 class="section-title">标签位置</h2>
          <p class="section-desc">通过设置 <code>label-position</code> 属性可以控制标签显示在输入框上方还是左侧</p>
          <div class="demo-block">
            <div class="demo-source">
              <div style="display: flex; flex-direction: column; gap: 20px;">
                <QInput
                  v-model="formData.usernameTop"
                  label="用户名"
                  label-position="top"
                  placeholder="标签在上方"
                  style="width: 240px"
                />
                <QInput
                  v-model="formData.usernameLeft"
                  label="用户名"
                  label-position="left"
                  placeholder="标签在左侧"
                  style="width: 240px"
                />
              </div>
            </div>
            <div class="demo-block-control" @click="toggleCode('labelPosition')">
              <span class="demo-control-text">
                {{ showCode.labelPosition ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.labelPosition }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.labelPosition" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;!-- 标签在上方 --&gt;
  &lt;QInput
    v-model="username"
    label="用户名"
    label-position="top"
    placeholder="标签在上方"
  /&gt;

  &lt;!-- 标签在左侧 --&gt;
  &lt;QInput
    v-model="username"
    label="用户名"
    label-position="left"
    placeholder="标签在左侧"
  /&gt;
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
                  <td>model-value / v-model</td>
                  <td>绑定值</td>
                  <td>string</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>输入框关联的 label 文字</td>
                  <td>string</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>输入框占位文本</td>
                  <td>string</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>类型</td>
                  <td>string</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>是否禁用</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>clearable</td>
                  <td>是否显示清除按钮</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>error</td>
                  <td>错误提示信息</td>
                  <td>string</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>required</td>
                  <td>是否必填</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>label-position</td>
                  <td>标签位置，可选值为 top 或 left</td>
                  <td>string</td>
                  <td>top</td>
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
            <a href="#disabled" :class="{ active: currentAnchor === 'disabled' }">禁用状态</a>
          </li>
          <li>
            <a href="#clearable" :class="{ active: currentAnchor === 'clearable' }">可清空</a>
          </li>
          <li>
            <a href="#with-label" :class="{ active: currentAnchor === 'with-label' }">带标签</a>
          </li>
          <li>
            <a href="#label-position" :class="{ active: currentAnchor === 'label-position' }">标签位置</a>
          </li>
          <li>
            <a href="#attributes" :class="{ active: currentAnchor === 'attributes' }">Attributes</a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import QInput from '../components/QInput/index.vue'

const currentAnchor = ref('basic')

const formData = reactive({
  username: '',
  email: '',
  usernameTop: '',
  usernameLeft: '',
  disabled: '',
  clearable: '',
  error: 'invalid@email'
})

const showCode = ref({
  basic: false,
  label: false,
  labelPosition: false,
  disabled: false,
  clearable: false
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

.section-desc code {
  padding: 2px 6px;
  margin: 0 2px;
  font-size: 12px;
  color: #5470c6;
  background-color: #f5f7fa;
  border-radius: 2px;
  font-family: 'Consolas', 'Monaco', monospace;
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

/* IDEA 风格代码高亮 */
.demo-code :deep(.language-html) {
  color: #a9b7c6;
}

/* HTML 标签 */
.demo-code pre :deep(code) {
  color: #a9b7c6;
}

/* 简单的语法高亮效果 */
.demo-code pre {
  white-space: pre;
  word-wrap: normal;
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

<template>
  <div class="demo-page">
    <div class="page-container">
      <!-- 主内容区 -->
      <div class="page-content">
        <!-- 页面标题 -->
        <div class="page-header">
          <h1 class="page-title">EditableText 可编辑文本</h1>
          <p class="page-desc">鼠标悬停显示编辑图标，点击即可编辑文本</p>
        </div>

        <!-- 基础用法 -->
        <section id="basic" class="demo-section">
          <h2 class="section-title">基础用法</h2>
          <div class="demo-block">
            <div class="demo-source">
              <QEditableText
                v-model="formData.title"
                placeholder="请输入标题"
                @confirm="handleConfirm"
              />
              <p v-if="lastConfirmValue" style="margin-top: 12px; font-size: 14px; color: #67c23a;">
                最后确认的值: {{ lastConfirmValue }}
              </p>
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
  &lt;QEditableText
    v-model="formData.title"
    placeholder="请输入标题"
    @confirm="handleConfirm"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const formData = ref({ title: '一般' })
const handleConfirm = (value) => {
  console.log('确认保存:', value)
}
&lt;/script&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 列表示例 -->
        <section id="list" class="demo-section">
          <h2 class="section-title">列表中使用</h2>
          <p class="section-desc">在列表中使用可编辑文本，可以快速编辑每一项</p>
          <div class="demo-block">
            <div class="demo-source">
              <div class="list-demo">
                <div v-for="(item, index) in items" :key="index" class="list-item">
                  <span class="item-label">项目 {{ index + 1 }}:</span>
                  <QEditableText
                    v-model="items[index]"
                    :placeholder="`请输入项目${index + 1}`"
                  />
                </div>
              </div>
            </div>
            <div class="demo-block-control" @click="toggleCode('list')">
              <span class="demo-control-text">
                {{ showCode.list ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.list }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.list" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;div v-for="(item, index) in items" :key="index"&gt;
    &lt;QEditableText
      v-model="items[index]"
      :placeholder="\`请输入项目\${index + 1}\`"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const items = ref(['项目A', '项目B', '项目C'])
&lt;/script&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 表格中使用 -->
        <section id="table" class="demo-section">
          <h2 class="section-title">表格中使用</h2>
          <p class="section-desc">在表格中使用可编辑文本，实现快速编辑</p>
          <div class="demo-block">
            <div class="demo-source">
              <table class="demo-table">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>名称</th>
                    <th>描述</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in tableData" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <QEditableText
                        v-model="tableData[index].name"
                        placeholder="请输入名称"
                      />
                    </td>
                    <td>
                      <QEditableText
                        v-model="tableData[index].desc"
                        placeholder="请输入描述"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="demo-block-control" @click="toggleCode('table')">
              <span class="demo-control-text">
                {{ showCode.table ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.table }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.table" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;table&gt;
    &lt;tr v-for="(row, index) in tableData" :key="index"&gt;
      &lt;td&gt;
        &lt;QEditableText
          v-model="tableData[index].name"
          placeholder="请输入名称"
        /&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;
&lt;/template&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 使用选择框 -->
        <section id="select" class="demo-section">
          <h2 class="section-title">使用选择框</h2>
          <p class="section-desc">通过插槽自定义编辑组件，可以使用选择框、人员选择等任何组件</p>
          <div class="demo-block">
            <div class="demo-source">
              <div class="select-demo">
                <div class="demo-item">
                  <span class="item-label">优先级:</span>
                  <QEditableText v-model="selectFormData.priority">
                    <template #display="{ value }">
                      <span :style="{ color: getPriorityColor(value) }">{{ value || '未设置' }}</span>
                    </template>
                    <template #edit="{ value, updateValue }">
                      <QSelect
                        :model-value="value"
                        @update:model-value="updateValue"
                        :options="priorityOptions"
                        placeholder="请选择优先级"
                        style="width: 200px"
                      />
                    </template>
                  </QEditableText>
                </div>
                <div class="demo-item">
                  <span class="item-label">状态:</span>
                  <QEditableText v-model="selectFormData.status">
                    <template #edit="{ value, updateValue }">
                      <QSelect
                        :model-value="value"
                        @update:model-value="updateValue"
                        :options="statusOptions"
                        placeholder="请选择状态"
                        style="width: 200px"
                      />
                    </template>
                  </QEditableText>
                </div>
                <div class="demo-item">
                  <span class="item-label">负责人:</span>
                  <QEditableText v-model="selectFormData.assignee">
                    <template #display="{ value }">
                      {{ getUserName(value) || '未分配' }}
                    </template>
                    <template #edit="{ value, updateValue }">
                      <QUserSelect
                        :model-value="value"
                        @update:model-value="updateValue"
                        :values="userList"
                        :multiple="false"
                        placeholder="请选择负责人"
                        style="width: 200px"
                      />
                    </template>
                  </QEditableText>
                </div>
              </div>
            </div>
            <div class="demo-block-control" @click="toggleCode('select')">
              <span class="demo-control-text">
                {{ showCode.select ? '隐藏代码' : '显示代码' }}
              </span>
              <svg class="demo-control-icon" :class="{ 'is-active': showCode.select }" viewBox="0 0 1024 1024">
                <path d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z" fill="currentColor"/>
              </svg>
            </div>
            <div v-show="showCode.select" class="demo-code-wrapper">
              <div class="demo-code">
                <pre><code class="language-html">&lt;template&gt;
  &lt;QEditableText v-model="formData.priority"&gt;
    &lt;template #display="{ value }"&gt;
      &lt;span :style="{ color: getPriorityColor(value) }"&gt;{{ value }}&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #edit="{ value, updateValue }"&gt;
      &lt;QSelect
        :model-value="value"
        @update:model-value="updateValue"
        :options="priorityOptions"
        placeholder="请选择优先级"
      /&gt;
    &lt;/template&gt;
  &lt;/QEditableText&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const formData = ref({ priority: '高' })
const priorityOptions = ['高', '中', '低']
&lt;/script&gt;</code></pre>
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
                  <td>placeholder</td>
                  <td>占位文本</td>
                  <td>string</td>
                  <td>点击编辑</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Events 文档 -->
        <section id="events" class="demo-section api-section">
          <h2 class="section-title">Events</h2>
          <div class="api-table">
            <table>
              <thead>
                <tr>
                  <th>事件名</th>
                  <th>说明</th>
                  <th>回调参数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>confirm</td>
                  <td>点击确认按钮或按 Enter 键确认保存时触发</td>
                  <td>(value: string) 确认保存的值</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Slots 文档 -->
        <section id="slots" class="demo-section api-section">
          <h2 class="section-title">Slots</h2>
          <div class="api-table">
            <table>
              <thead>
                <tr>
                  <th>插槽名</th>
                  <th>说明</th>
                  <th>Slot Props</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>display</td>
                  <td>自定义显示模式的内容</td>
                  <td>{ value: string } 当前值</td>
                </tr>
                <tr>
                  <td>edit</td>
                  <td>自定义编辑模式的组件（可以是输入框、选择框、人员选择等任何组件）</td>
                  <td>{ value: string, updateValue: Function } 当前值和更新值的方法</td>
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
            <a href="#list" :class="{ active: currentAnchor === 'list' }">列表中使用</a>
          </li>
          <li>
            <a href="#table" :class="{ active: currentAnchor === 'table' }">表格中使用</a>
          </li>
          <li>
            <a href="#select" :class="{ active: currentAnchor === 'select' }">使用选择框</a>
          </li>
          <li>
            <a href="#attributes" :class="{ active: currentAnchor === 'attributes' }">Attributes</a>
          </li>
          <li>
            <a href="#events" :class="{ active: currentAnchor === 'events' }">Events</a>
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
import { reactive, ref } from 'vue'
import QEditableText from '../components/QEditableText/index.vue'
import QSelect from '../components/QSelect/index.vue'
import QUserSelect from '../components/QUserSelect/index.vue'

const currentAnchor = ref('basic')

const formData = reactive({
  title: '一般'
})

const lastConfirmValue = ref('')

const items = ref(['项目A', '项目B', '项目C'])

const tableData = ref([
  { name: '张三', desc: '前端工程师' },
  { name: '李四', desc: '后端工程师' },
  { name: '王五', desc: '产品经理' }
])

// 选择框示例数据
const selectFormData = reactive({
  priority: '高',
  status: '进行中',
  assignee: 'user1'
})

const priorityOptions = ['高', '中', '低']
const statusOptions = ['待开始', '进行中', '已完成', '已取消']

const userList = [
  { id: 'user1', name: '张三', avatar: '' },
  { id: 'user2', name: '李四', avatar: '' },
  { id: 'user3', name: '王五', avatar: '' }
]

const getPriorityColor = (priority) => {
  const colorMap = {
    '高': '#f56c6c',
    '中': '#e6a23c',
    '低': '#67c23a'
  }
  return colorMap[priority] || '#606266'
}

const getUserName = (userId) => {
  const user = userList.find(u => u.id === userId)
  return user?.name
}

const showCode = ref({
  basic: false,
  list: false,
  table: false,
  select: false
})

const handleConfirm = (value) => {
  lastConfirmValue.value = value
  console.log('确认保存:', value)
}

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

/* 列表示例 */
.list-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-label {
  font-size: 14px;
  color: #606266;
  min-width: 80px;
}

/* 表格示例 */
.demo-table {
  width: 100%;
  border-collapse: collapse;
}

.demo-table th,
.demo-table td {
  padding: 12px;
  border: 1px solid #dcdfe6;
  text-align: left;
}

.demo-table th {
  background-color: #fafafa;
  font-weight: 500;
  color: #303133;
}

.demo-table td {
  color: #606266;
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

/* 选择框示例 */
.select-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.demo-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-label {
  font-size: 14px;
  color: #606266;
  min-width: 80px;
  font-weight: 500;
}
</style>

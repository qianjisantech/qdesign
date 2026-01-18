<template>
  <div class="form-example-page">
    <section class="component-section">
      <h2>完整表单示例</h2>
      <p class="component-desc">使用所有组件构建的完整表单示例，展示组件的综合应用场景。</p>
      <div class="form-container">
        <div class="form-header">
          <h3>创建新任务</h3>
          <p>填写以下信息创建一个新的工作任务</p>
        </div>

        <div class="form-body">
          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">任务标题<span class="required">*</span></label>
            </div>
            <div class="form-field-control">
              <QInput
                v-model="taskForm.title"
                placeholder="请输入任务标题"
                clearable
              />
            </div>
          </div>

          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">任务类型<span class="required">*</span></label>
            </div>
            <div class="form-field-control">
              <QSelect
                v-model="taskForm.type"
                :options="taskTypeOptions"
                placeholder="请选择任务类型"
              />
            </div>
          </div>

          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">优先级<span class="required">*</span></label>
            </div>
            <div class="form-field-control">
              <QSelect
                v-model="taskForm.priority"
                :options="priorityOptions"
                placeholder="请选择优先级"
              />
            </div>
          </div>

          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">指派给<span class="required">*</span></label>
            </div>
            <div class="form-field-control">
              <QUserSelect
                v-model="taskForm.assignee"
                :values="userList"
                placeholder="选择负责人"
              />
            </div>
          </div>

          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">关注者</label>
            </div>
            <div class="form-field-control">
              <QUserSelect
                v-model="taskForm.watchers"
                :values="userList"
                multiple
                placeholder="选择关注者"
              />
            </div>
          </div>

          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">标签</label>
            </div>
            <div class="form-field-control">
              <QTagInput
                v-model="taskForm.tags"
                placeholder="输入标签，按回车添加"
              />
            </div>
          </div>

          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">任务描述</label>
            </div>
            <div class="form-field-control">
              <QRichText
                v-model="taskForm.description"
                placeholder="请输入详细的任务描述..."
                height="180px"
              />
            </div>
          </div>

          <div class="form-row form-row-with-label">
            <div class="form-field-label">
              <label class="field-name">关联任务</label>
            </div>
            <div class="form-field-control">
              <QSearch
                v-model="taskForm.relatedTask"
                placeholder="搜索关联任务..."
                :suggestions="searchSuggestions"
              />
            </div>
          </div>

          <div class="form-actions">
            <button class="btn btn-primary" @click="handleSubmit">创建任务</button>
            <button class="btn btn-secondary" @click="handleReset">重置</button>
            <button class="btn btn-info" @click="openModal">打开弹窗</button>
            <button class="btn btn-success" @click="openDrawer">详情</button>
          </div>
        </div>

        <div class="form-preview">
          <h4>表单数据</h4>
          <pre>{{ JSON.stringify(taskForm, null, 2) }}</pre>
        </div>
      </div>
    </section>

    <!-- 抽屉 -->
    <Teleport to="body">
      <div v-if="isDrawerOpen" class="drawer-overlay" @click="closeDrawer">
        <div class="drawer-container" :class="{ 'is-open': isDrawerOpen }" @click.stop>
          <div class="drawer-header">
            <h3>任务详情</h3>
            <button class="drawer-close" @click="closeDrawer">×</button>
          </div>
          <div class="drawer-body">
            <div class="detail-section">
              <h4>基本信息</h4>
              <div class="detail-row">
                <span class="detail-label">任务标题：</span>
                <span class="detail-value">{{ taskForm.title || '未填写' }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">任务类型：</span>
                <span class="detail-value">{{ taskForm.type || '未选择' }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">优先级：</span>
                <span class="detail-value">{{ taskForm.priority || '未选择' }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">指派给：</span>
                <span class="detail-value">{{ taskForm.assignee || '未选择' }}</span>
              </div>
            </div>

            <div class="detail-section">
              <h4>其他信息</h4>
              <div class="detail-row">
                <span class="detail-label">关注者：</span>
                <span class="detail-value">{{ taskForm.watchers.length > 0 ? taskForm.watchers.join(', ') : '无' }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">标签：</span>
                <span class="detail-value">{{ taskForm.tags.length > 0 ? taskForm.tags.join(', ') : '无' }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">关联任务：</span>
                <span class="detail-value">{{ taskForm.relatedTask || '无' }}</span>
              </div>
            </div>

            <div class="detail-section">
              <h4>任务描述</h4>
              <div class="detail-description" v-html="taskForm.description || '暂无描述'"></div>
            </div>

            <div class="detail-section">
              <h4>完整数据（JSON）</h4>
              <pre class="detail-json">{{ JSON.stringify(taskForm, null, 2) }}</pre>
            </div>
          </div>
          <div class="drawer-footer">
            <button class="btn btn-secondary" @click="closeDrawer">关闭</button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 弹窗 -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3>组件展示弹窗</h3>
            <button class="modal-close" @click="closeModal">×</button>
          </div>
          <div class="modal-body">
            <div class="modal-form-row">
              <label class="modal-label">输入框</label>
              <QInput
                v-model="modalForm.input"
                placeholder="请输入内容"
                clearable
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">搜索框</label>
              <QSearch
                v-model="modalForm.search"
                placeholder="搜索..."
                :suggestions="searchSuggestions"
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">事项类型</label>
              <QSelect
                v-model="modalForm.issueType"
                :options="issueTypeOptions"
                placeholder="请选择事项类型"
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">任务类型</label>
              <QSelect
                v-model="modalForm.taskType"
                :options="taskTypeOptions"
                placeholder="请选择任务类型"
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">优先级</label>
              <QSelect
                v-model="modalForm.priority"
                :options="priorityOptions"
                placeholder="请选择优先级"
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">状态</label>
              <QSelect
                v-model="modalForm.status"
                :options="statusOptions"
                placeholder="请选择状态"
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">人员选择</label>
              <QUserSelect
                v-model="modalForm.user"
                :values="userList"
                placeholder="选择人员"
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">标签输入</label>
              <QTagInput
                v-model="modalForm.tags"
                placeholder="输入标签"
              />
            </div>

            <div class="modal-form-row">
              <label class="modal-label">富文本</label>
              <QRichText
                v-model="modalForm.richtext"
                placeholder="请输入内容..."
                height="150px"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="handleModalSubmit">确定</button>
            <button class="btn btn-secondary" @click="closeModal">取消</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import QInput from '../components/QInput/index.vue'
import QSearch from '../components/QSearch/index.vue'
import QSelect from '../components/QSelect/index.vue'
import QUserSelect from '../components/QUserSelect/index.vue'
import QRichText from '../components/QRichText/index.vue'
import QTagInput from '../components/QTagInput/index.vue'

const isModalOpen = ref(false)
const isDrawerOpen = ref(false)

const taskForm = reactive({
  title: '',
  type: '',
  priority: '',
  assignee: '',
  watchers: [],
  tags: [],
  description: '',
  relatedTask: ''
})

const modalForm = reactive({
  input: '',
  search: '',
  issueType: '',
  taskType: '',
  priority: '',
  status: '',
  user: '',
  tags: [],
  richtext: ''
})

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
  },
  {
    icon: '⚡',
    iconColor: '#faad14',
    title: '实现实时消息推送功能',
    code: 'FEATURE-345678'
  },
  {
    icon: '📝',
    iconColor: '#722ed1',
    title: '完善API文档',
    code: 'DOC-901234'
  },
  {
    icon: '🔧',
    iconColor: '#13c2c2',
    title: '重构数据库查询模块',
    code: 'REFACTOR-567890'
  }
]

const issueTypeOptions = [
  { label: '需求', value: 'requirement' },
  { label: '任务', value: 'task' },
  { label: 'BUG', value: 'bug' }
]

const taskTypeOptions = [
  { label: '新功能', value: 'feature' },
  { label: 'Bug修复', value: 'bug' },
  { label: '改进优化', value: 'improvement' },
  { label: '技术债务', value: 'tech-debt' }
]

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

const userList = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', color: '#4A7BA7' },
  { id: 2, name: '李四', email: 'lisi@example.com', color: '#00875A' },
  { id: 3, name: '王五', email: 'wangwu@example.com', color: '#6554C0' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', color: '#FF5630' },
  { id: 5, name: '钱七', email: 'qianqi@example.com', color: '#FF991F' },
  { id: 6, name: '孙八', email: 'sunba@example.com', color: '#36B37E' }
]

const handleSubmit = () => {
  console.log('提交表单:', taskForm)
  alert('任务创建成功！查看控制台获取表单数据')
}

const handleReset = () => {
  Object.assign(taskForm, {
    title: '',
    type: '',
    priority: '',
    assignee: '',
    watchers: [],
    tags: [],
    description: '',
    relatedTask: ''
  })
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const openDrawer = () => {
  isDrawerOpen.value = true
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}

const handleModalSubmit = () => {
  console.log('弹窗表单数据:', modalForm)
  alert('数据已提交！查看控制台获取详情')
  closeModal()
}
</script>

<style scoped>
.form-example-page {
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

.form-container {
  max-width: 900px;
  margin: 0 auto;
}

.form-header {
  margin-bottom: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e4e7ed;
}

.form-header h3 {
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 600;
  color: #303133;
}

.form-header p {
  margin: 0;
  font-size: 14px;
  color: #909399;
}

.form-body {
  margin-bottom: 32px;
}

.form-row {
  margin-bottom: 24px;
}

.form-row-with-label {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
}

.form-field-label {
  padding-top: 10px;
  padding-right: 0;
}

.field-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 4px;
}

.field-name .required {
  color: #de350b;
  margin-left: 2px;
}

.form-field-control {
  flex: 1;
}

.form-field-control :deep(.qianji-input-label),
.form-field-control :deep(.qianji-search-label),
.form-field-control :deep(.qianji-select-label),
.form-field-control :deep(.qianji-user-select-label),
.form-field-control :deep(.qianji-richtext-label),
.form-field-control :deep(.qianji-tag-input-label) {
  display: none;
}

.form-actions {
  display: flex;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid #e4e7ed;
}

.btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #4A7BA7;
  color: white;
}

.btn-primary:hover {
  background-color: #3a6a94;
}

.btn-primary:active {
  background-color: #2f5a80;
}

.btn-secondary {
  background-color: #fff;
  color: #606266;
  border: 1px solid #dcdfe6;
}

.btn-secondary:hover {
  color: #4A7BA7;
  border-color: #4A7BA7;
  background-color: #ecf5ff;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover {
  background-color: #138496;
}

.btn-info:active {
  background-color: #0f6674;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
}

.btn-success:active {
  background-color: #1e7e34;
}

.form-preview {
  margin-top: 24px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.form-preview h4 {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: #606266;
}

.form-preview pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #303133;
  line-height: 1.6;
  overflow-x: auto;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
}

.modal-container {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #e4e7ed;
  background-color: #fafbfc;
}

.modal-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.modal-close {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #909399;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background-color: #f5f7fa;
  color: #303133;
}

.modal-body {
  padding: 20px 24px;
  overflow-y: auto;
  flex: 1;
}

.modal-form-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
  align-items: start;
  margin-bottom: 16px;
}

.modal-form-row:last-child {
  margin-bottom: 0;
}

.modal-label {
  display: block;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #303133;
  text-align: right;
}

.modal-label::after {
  content: '*';
  color: #de350b;
  margin-left: 4px;
}

.modal-footer {
  display: flex;
  gap: 12px;
  padding: 12px 24px;
  border-top: 1px solid #e4e7ed;
  background-color: #fafbfc;
  justify-content: flex-end;
}

.modal-body :deep(.qianji-input-wrapper),
.modal-body :deep(.qianji-search-wrapper),
.modal-body :deep(.qianji-select-wrapper),
.modal-body :deep(.qianji-user-select-wrapper),
.modal-body :deep(.qianji-tag-input-wrapper),
.modal-body :deep(.qianji-richtext-wrapper) {
  margin-bottom: 0;
}

/* 抽屉样式 */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
}

.drawer-container {
  background-color: #fff;
  width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.drawer-container.is-open {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #e4e7ed;
  background-color: #fafbfc;
}

.drawer-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.drawer-close {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #909399;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.drawer-close:hover {
  background-color: #f5f7fa;
  color: #303133;
}

.drawer-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.detail-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e4e7ed;
}

.detail-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.detail-section h4 {
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 600;
  color: #303133;
}

.detail-row {
  display: flex;
  margin-bottom: 12px;
  line-height: 1.6;
}

.detail-row:last-child {
  margin-bottom: 0;
}

.detail-label {
  flex-shrink: 0;
  width: 100px;
  font-size: 14px;
  color: #909399;
}

.detail-value {
  flex: 1;
  font-size: 14px;
  color: #303133;
  word-break: break-word;
}

.detail-description {
  padding: 12px;
  background-color: #f5f7fa;
  border-radius: 4px;
  min-height: 60px;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
}

.detail-json {
  margin: 0;
  padding: 16px;
  background-color: #f5f7fa;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #303133;
  line-height: 1.6;
  overflow-x: auto;
}

.drawer-footer {
  display: flex;
  gap: 12px;
  padding: 12px 24px;
  border-top: 1px solid #e4e7ed;
  background-color: #fafbfc;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .form-example-page {
    padding: 20px;
  }

  .form-row-with-label {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .form-field-label {
    padding-top: 0;
  }

  .drawer-container {
    width: 100%;
  }
}
</style>

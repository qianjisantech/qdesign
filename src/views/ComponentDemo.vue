<template>
  <div class="component-demo-page">
    <section id="input" class="component-section">
      <h2>输入框组件 (QInput)</h2>
      <p class="component-desc">基础的输入框组件，支持清除、禁用、错误提示等功能。</p>
      <div class="component-demo">
        <QInput
          v-model="formData.username"
          label="用户名"
          placeholder="请输入用户名"
          required
          clearable
        />
        <QInput
          v-model="formData.email"
          label="邮箱"
          type="email"
          placeholder="请输入邮箱"
          error="邮箱格式不正确"
        />
        <QInput
          v-model="formData.disabled"
          label="禁用状态"
          disabled
        />
      </div>
    </section>

    <section id="search" class="component-section">
      <h2>搜索框组件 (QSearch)</h2>
      <p class="component-desc">带下拉建议的搜索框组件，支持搜索图标、清除按钮和搜索建议列表。</p>
      <div class="component-demo">
        <QSearch
          v-model="searchValue"
          label="搜索"
          placeholder="搜索任务、项目..."
          :suggestions="searchSuggestions"
          @search="handleSearch"
        />
        <QSearch
          v-model="searchWithButton"
          placeholder="带按钮的搜索框"
          :suggestions="searchSuggestions"
          show-search-button
          @search="handleSearch"
        />
      </div>
    </section>

    <section id="select" class="component-section">
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
      </div>
    </section>

    <section id="user-select" class="component-section">
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
    </section>

    <section id="richtext" class="component-section">
      <h2>富文本编辑器 (QRichText)</h2>
      <p class="component-desc">基于 WangEditor 的富文本编辑器组件，支持完整的富文本编辑功能。</p>
      <div class="component-demo">
        <QRichText
          v-model="formData.description"
          label="描述"
          placeholder="请输入详细描述..."
          height="200px"
        />
      </div>
    </section>

    <section id="tag-input" class="component-section">
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
    </section>

    <section id="preview" class="component-section">
      <h2>表单数据预览</h2>
      <div class="data-preview">
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </section>
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

const formData = reactive({
  username: '',
  email: '',
  disabled: '这是禁用状态',
  priority: '',
  status: '',
  assignee: '',
  watchers: [],
  description: '',
  tags: ['测试', '定时任务'],
  labels: []
})

const searchValue = ref('')
const searchWithButton = ref('')

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

const handleSearch = (value) => {
  console.log('搜索:', value)
}
</script>

<style scoped>
.component-demo-page {
  padding: 40px;
  background-color: #f4f5f7;
}

.component-section {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
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
}

.data-preview {
  background-color: #f4f5f7;
  border-radius: 4px;
  padding: 16px;
  overflow-x: auto;
}

.data-preview pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #172b4d;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .component-demo-page {
    padding: 20px;
  }

  .component-demo {
    grid-template-columns: 1fr;
  }
}
</style>

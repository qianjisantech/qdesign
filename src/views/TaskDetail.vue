<template>
  <Teleport to="body">
    <div v-if="modelValue" class="task-drawer-overlay" @click="closeDrawer">
      <div class="task-drawer-container" :class="{ 'is-open': isOpen }" @click.stop>
        <!-- 顶部导航栏 -->
        <div class="task-header">
      <div class="task-header-left">
        <svg class="task-type-icon" viewBox="0 0 16 16" width="20" height="20">
          <rect x="2" y="2" width="12" height="12" rx="2" fill="#00BCD4"/>
          <path d="M7 10.5L5 8.5l-.7.7L7 11.9l5-5-.7-.7z" fill="white"/>
        </svg>
        <span class="task-type">活动研发任务</span>
        <span class="task-id">/ UG-669008</span>
        <div class="task-id-icons">
          <button class="task-id-icon-btn" title="复制">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" fill="currentColor"/>
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" fill="currentColor"/>
            </svg>
          </button>
          <button class="task-id-icon-btn" title="收藏">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path d="M8 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5L8 11l-3.5 2.5 1.5-4.5-3.5-2.5h4.5z" stroke="currentColor" stroke-width="1.2" fill="none"/>
            </svg>
          </button>
          <button class="task-id-icon-btn" title="链接">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="task-header-right">
        <button class="header-icon-btn" title="新窗口打开">
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5V8.75a.75.75 0 00-1.5 0v3.75a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.75a.75.75 0 000-1.5H3.5z" fill="currentColor"/>
            <path d="M11 2.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V4.06l-4.22 4.22a.75.75 0 01-1.06-1.06l4.22-4.22h-2.19a.75.75 0 01-.75-.75z" fill="currentColor"/>
          </svg>
        </button>
        <button class="header-icon-btn" title="关闭" @click="closeDrawer">
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path d="M12.207 4.793a1 1 0 010 1.414L9.414 9l2.793 2.793a1 1 0 01-1.414 1.414L8 10.414l-2.793 2.793a1 1 0 01-1.414-1.414L6.586 9 3.793 6.207a1 1 0 011.414-1.414L8 7.586l2.793-2.793a1 1 0 011.414 0z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- 任务标题 -->
    <div class="task-title-section">
      <h1 class="task-title">{{ taskData.title }}</h1>
      <div class="task-meta">
        <span class="meta-item">
          问题类型：
          <svg class="task-icon green" viewBox="0 0 16 16" width="14" height="14">
            <rect x="2" y="2" width="12" height="12" rx="2" fill="#52C41A"/>
            <path d="M6.5 10.5L4.5 8.5l-.7.7L6.5 11.9l6-6-.7-.7z" fill="white"/>
          </svg>
          <span class="meta-value">任务</span>
        </span>
        <span class="meta-item">
          状态：
          <a class="status-link" href="#">{{ taskData.status }}</a>
          <span class="status-workflow">(查看工作流)</span>
        </span>
        <span class="meta-item">
          优先级：
          <svg class="priority-icon" viewBox="0 0 16 16" width="14" height="14">
            <path d="M8 2l6 12H2z" fill="#F5222D"/>
            <path d="M8 6v4M8 11v1" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="meta-value priority-high">{{ taskData.priority }}</span>
        </span>
        <span class="meta-item">版本：<span class="meta-value">{{ taskData.version || '--' }}</span></span>
        <span class="meta-item">Sprint：<span class="meta-value">{{ taskData.sprint || '--' }}</span></span>
        <span class="meta-item">解决结果：<span class="meta-value">{{ taskData.result || '未解决' }}</span></span>
      </div>
    </div>

    <!-- 操作按钮组 -->
    <div class="action-buttons-bar">
      <div class="action-buttons-left">
        <button class="primary-btn">编辑</button>
        <button class="primary-btn">分配</button>
        <button class="secondary-btn">
          更多操作
          <svg viewBox="0 0 16 16" width="12" height="12">
            <path d="M4 6l4 4 4-4" stroke="currentColor" fill="none"/>
          </svg>
        </button>
        <button class="primary-btn success">开始开发</button>
        <button class="secondary-btn">拆解任务(批...)</button>
        <button class="secondary-btn">拆解任务(单...)</button>
        <button class="secondary-btn">
          工具箱
          <svg viewBox="0 0 16 16" width="12" height="12">
            <path d="M4 6l4 4 4-4" stroke="currentColor" fill="none"/>
          </svg>
        </button>
      </div>
      <label class="checkbox-label">
        <input type="checkbox" v-model="showOnlyOwn" />
        仅展示有值字段
      </label>
    </div>

    <!-- 主内容区 -->
    <div class="task-content">
      <!-- 团队管理字段 -->
      <QCollapse title="团队管理字段">
        <!-- 子标签页 -->
        <QTabs v-model="activeSubTab" :tabs="subTabs" />
        <!-- 团队自定义信息 -->
        <div v-show="activeSubTab === 'custom'" class="field-groups custom-fields">
          <div class="field-row">
            <span class="field-label">ug产品线</span>
            <QEditableText v-model="taskData.ugProductLine">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">任务类型/事项</span>
            <QEditableText v-model="taskData.taskType">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">是否完成宣贯case执行</span>
            <QEditableText v-model="taskData.caseExecuted">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">需求收益类型</span>
            <QEditableText v-model="taskData.benefitType">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">模块（APP&WEB）</span>
            <QEditableText v-model="taskData.module">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">涉及的端(UG)</span>
            <QEditableText v-model="taskData.ugTerminal">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">代码分支</span>
            <QEditableText v-model="taskData.codeBranch">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">是否完成测试Case评审</span>
            <QEditableText v-model="taskData.testCaseReviewed">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">产研需求类型</span>
            <QEditableText v-model="taskData.demandType">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">归属中心</span>
            <QEditableText v-model="taskData.ownerCenter">
              <template #display="{ value }">
                <span v-if="value">{{ value }}</span>
                <span v-if="taskData.ownerCenterCode" class="field-code">{{ taskData.ownerCenterCode }}</span>
                <span v-if="!value && !taskData.ownerCenterCode">--</span>
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">归属部门(二级)</span>
            <QEditableText v-model="taskData.ownerDept2">
              <template #display="{ value }">
                <span v-if="value">{{ value }}</span>
                <span v-if="taskData.ownerDept2Code" class="field-code">{{ taskData.ownerDept2Code }}</span>
                <span v-if="!value && !taskData.ownerDept2Code">--</span>
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">归属部门(三级)</span>
            <QEditableText v-model="taskData.ownerDept3">
              <template #display="{ value }">
                <span v-if="value">{{ value }}</span>
                <span v-if="taskData.ownerDept3Code" class="field-code">{{ taskData.ownerDept3Code }}</span>
                <span v-if="!value && !taskData.ownerDept3Code">--</span>
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">归属部门(四级)</span>
            <QEditableText v-model="taskData.ownerDept4">
              <template #display="{ value }">
                <span v-if="value">{{ value }}</span>
                <span v-if="taskData.ownerDept4Code" class="field-code">{{ taskData.ownerDept4Code }}</span>
                <span v-if="!value && !taskData.ownerDept4Code">--</span>
              </template>
            </QEditableText>
          </div>
          <div class="field-row">
            <span class="field-label">任务备注</span>
            <QEditableText v-model="taskData.taskNote">
              <template #display="{ value }">
                {{ value || '--' }}
              </template>
            </QEditableText>
          </div>
        </div>
      </QCollapse>

      <!-- 研发活动 -->
      <QCollapse title="研发活动" :default-open="false">
        <div class="empty-state">研发活动内容</div>
      </QCollapse>

      <!-- 描述 -->
      <QCollapse title="描述" :default-open="false">
            <div class="field-row full-width">
              <QEditableText v-model="taskData.urgentReason">
                <template #display="{ value }">
                  <div class="text-content">{{ value || '--' }}</div>
                </template>
              </QEditableText>
            </div>
      </QCollapse>

      <!-- 人员信息 -->
      <QCollapse title="人员信息">
            <div class="field-row">
              <span class="field-label">承接业务域</span>
              <QEditableText v-model="taskData.businessDomain">
                <template #display="{ value }">
                  {{ getDomainName(value) }}
                </template>
              </QEditableText>
            </div>
            <div class="field-row">
              <span class="field-label">承接产品线</span>
              <QEditableText v-model="taskData.productLine">
                <template #display="{ value }">
                  {{ getProductLineName(value) }}
                </template>
              </QEditableText>
            </div>
            <div class="field-row">
              <span class="field-label">承接系统</span>
              <QEditableText v-model="taskData.system">
                <template #display="{ value }">
                  {{ value || '--' }}
                </template>
              </QEditableText>
            </div>
      </QCollapse>

      <!-- 时间信息 -->
      <QCollapse title="时间信息">
            <div class="field-row">
              <span class="field-label">承接中心</span>
              <QEditableText v-model="taskData.acceptCenter">
                <template #display="{ value }">
                  <span v-if="value" class="field-tag">{{ value }}</span>
                  <span v-else>--</span>
                </template>
              </QEditableText>
            </div>
            <div class="field-row">
              <span class="field-label">承接部门(二级)</span>
              <QEditableText v-model="taskData.acceptDept2">
                <template #display="{ value }">
                  <span v-if="value" class="field-tag">{{ value }}</span>
                  <span v-else>--</span>
                </template>
              </QEditableText>
            </div>
            <div class="field-row">
              <span class="field-label">承接部门(三级)</span>
              <QEditableText v-model="taskData.acceptDept3">
                <template #display="{ value }">
                  <span v-if="value" class="field-tag">{{ value }}</span>
                  <span v-else>--</span>
                </template>
              </QEditableText>
            </div>
            <div class="field-row">
              <span class="field-label">承接部门(四级)</span>
              <QEditableText v-model="taskData.acceptDept4">
                <template #display="{ value }">
                  <span v-if="value" class="field-tag">{{ value }}</span>
                  <span v-else>--</span>
                </template>
              </QEditableText>
            </div>
      </QCollapse>

      <!-- 附件 -->
      <QCollapse title="附件" :default-open="false">
            <div class="field-row">
              <span class="field-label">预估工时</span>
              <QEditableText v-model="taskData.estimatedHours">
                <template #display="{ value }">
                  {{ value || '--' }}
                </template>
              </QEditableText>
            </div>
      </QCollapse>

      <!-- 活动日志 -->
      <QCollapse title="活动日志" :default-open="false">
            <div class="field-row full-width">
              <QEditableText v-model="taskData.actualHours">
                <template #display="{ value }">
                  <div class="text-content">{{ value || '--' }}</div>
                </template>
              </QEditableText>
            </div>
      </QCollapse>
    </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from 'vue'
import QEditableText from '../components/QEditableText/index.vue'
import QSelect from '../components/QSelect/index.vue'
import QCollapse from '../components/QCollapse/index.vue'
import QTabs from '../components/QTabs/index.vue'

defineOptions({
  name: 'q-task-detail-drawer'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  taskId: {
    type: String,
    default: 'UG-669008'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const activeTab = ref('team')
const activeSubTab = ref('custom')
const showOnlyOwn = ref(false)

// 监听 modelValue 变化，控制抽屉动画
watch(() => props.modelValue, (val) => {
  if (val) {
    nextTick(() => {
      isOpen.value = true
    })
  } else {
    isOpen.value = false
  }
}, { immediate: true })

const closeDrawer = () => {
  isOpen.value = false
  setTimeout(() => {
    emit('update:modelValue', false)
  }, 300) // 等待动画完成
}

const tabs = [
  { key: 'team', label: '团队管理字段' },
  { key: 'dev', label: '研发活动' }
]

const subTabs = [
  { key: 'custom', label: '团队自定义信息' },
  { key: 'standard', label: '公司标准化信息' }
]

const taskData = reactive({
  title: '登陆页面的开发',
  status: '待开发',
  priority: 'P1-高',
  version: '--',
  sprint: '--',
  result: '未解决',
  proposeCenter: '腾讯运营中心',
  proposeDept2: '运营产品部',
  proposeDept3: '用户活跃',
  proposeDept4: '老客户小组',
  tags: '',
  urgentReason: '',
  businessDomain: '王者荣耀',
  productLine: '皮肤小组',
  system: '皮肤换肤系统',
  acceptCenter: '腾讯运营中心',
  acceptDept2: '研发部',
  acceptDept3: '研发部',
  acceptDept4: '基础',
  estimatedHours: '24',
  actualHours: '',
  sheinProject: '',
  // 团队自定义字段
  ugProductLine: '用户运营/赠购营销工具',
  taskType: '测试',
  caseExecuted: '--',
  benefitType: 'C-业绩',
  module: '--',
  ugTerminal: '--',
  codeBranch: '',
  testCaseReviewed: '已评审',
  demandType: '业务需求',
  ownerCenter: '全球运营中心',
  ownerCenterCode: '102786',
  ownerDept2: '运营产品部',
  ownerDept2Code: '100105',
  ownerDept3: '老客促活',
  ownerDept3Code: '100110',
  ownerDept4: '高购频短期营销工具(产品组)',
  ownerDept4Code: '145635',
  taskNote: ''
})

const centerOptions = ['全球运营中心', '技术中心', '产品中心', '市场中心']

const getStatusColor = (status) => {
  const colorMap = {
    '待开发': '#909399',
    '开发中': '#409eff',
    '已完成': '#67c23a',
    '已取消': '#f56c6c'
  }
  return colorMap[status] || '#909399'
}

const getPriorityColor = (priority) => {
  if (priority?.includes('P1') || priority?.includes('高')) return '#f56c6c'
  if (priority?.includes('P2') || priority?.includes('中')) return '#e6a23c'
  return '#67c23a'
}

const getDomainName = (id) => {
  return '高购频用户'
}

const getProductLineName = (id) => {
  return '促活营销'
}
</script>

<style scoped>
/* 抽屉遮罩层 */
.task-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
}

/* 抽屉容器 */
.task-drawer-container {
  width: 60%;
  max-width: 1400px;
  height: 100vh;
  background-color: #fff;
  overflow-y: auto;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  display: flex;
  flex-direction: column;
}

.task-drawer-container.is-open {
  transform: translateX(0);
}

/* 关闭按钮 */
.close-btn {
  padding: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.close-btn:hover {
  background-color: #f5f7fa;
}

.close-btn:focus {
  outline: none;
}

/* 顶部导航栏 */
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #e7e7e7;
  background-color: #fff;
  flex-shrink: 0;
}

.task-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #606266;
}

.task-type-icon {
  flex-shrink: 0;
}

.task-type {
  color: #303133;
  font-weight: 500;
}

.task-id {
  color: #909399;
}

.task-id-icons {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
}

.task-id-icon-btn {
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909399;
  outline: none;
}

.task-id-icon-btn:hover {
  background-color: #f5f7fa;
  color: #606266;
}

.task-id-icon-btn:focus {
  outline: none;
}

.task-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-icon-btn {
  padding: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #606266;
  outline: none;
}

.header-icon-btn:hover {
  background-color: #f5f7fa;
}

.header-icon-btn:focus {
  outline: none;
}

.task-header-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  outline: none;
}

.action-btn:hover {
  background-color: #f5f7fa;
}

.action-btn:focus {
  outline: none;
}

/* 任务标题区域 */
.task-title-section {
  padding: 20px 24px;
}

.task-title {
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 500;
  color: #303133;
  line-height: 1.5;
}

.task-meta {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 13px;
  color: #606266;
}

.meta-item {
  color: #606266;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
}

.meta-value {
  color: #303133;
}

.task-icon {
  vertical-align: middle;
  flex-shrink: 0;
}

.priority-icon {
  vertical-align: middle;
  flex-shrink: 0;
}

.priority-high {
  color: #F5222D;
  font-weight: 500;
}

.status-link {
  color: #1890FF;
  text-decoration: none;
  transition: color 0.2s;
}

.status-link:hover {
  color: #40A9FF;
  text-decoration: underline;
}

.status-workflow {
  color: #909399;
  font-size: 12px;
}

/* 操作按钮栏 */
.action-buttons-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 24px 16px;
  border-bottom: 1px solid #e7e7e7;
}

.action-buttons-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  flex: 1;
}

.primary-btn,
.secondary-btn {
  padding: 6px 16px;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #e8e8e8;
  background-color: #f5f5f5;
  color: #303133;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  outline: none;
}

.primary-btn:hover,
.secondary-btn:hover {
  background-color: #ebebeb;
  border-color: #d0d0d0;
}

.primary-btn:focus,
.secondary-btn:focus {
  outline: none;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #606266;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;
}

/* 标签页 */
.tabs-container {
  border-bottom: 1px solid #e7e7e7;
  padding: 0 24px;
}

.tabs {
  display: flex;
  gap: 32px;
}

.tab-item {
  padding: 12px 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.tab-item:hover {
  color: #409eff;
}

.tab-item.active {
  color: #409eff;
  font-weight: 500;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #409eff;
}

/* 字段组 */
.content-section {
  padding: 0;
}

.field-groups {
  padding: 16px 0 0 0;
}

.field-groups.custom-fields {
  background-color: #ffffff;
}

.field-groups.custom-fields .field-row {
  background-color: #ffffff;
}

.field-groups.custom-fields .field-label {
  color: #303133;
}

.field-groups.custom-fields .field-value,
.field-groups.custom-fields .q-editable-text,
.field-groups.custom-fields .q-editable-text span,
.field-groups.custom-fields .field-code {
  color: #4A7BA7 !important;
}

/* 团队自定义信息 tab 样式 */
.q-tabs .q-tab-item:first-child {
  background-color: #ffffff !important;
  color: #4A7BA7 !important;
}

.q-tabs .q-tab-item:first-child:hover {
  background-color: #ffffff !important;
  color: #4A7BA7 !important;
}

.q-tabs .q-tab-item:first-child.active {
  background-color: #ffffff !important;
  color: #4A7BA7 !important;
}

.field-group {
  margin-bottom: 32px;
}

.field-group:last-child {
  margin-bottom: 0;
}

.group-title {
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 600;
  color: #303133;
}

.field-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
  min-height: 32px;
  padding: 0 24px;
}

.field-row:last-child {
  margin-bottom: 16px;
}

.field-row.full-width {
  flex-direction: column;
  gap: 8px;
}

.field-label {
  min-width: 150px;
  font-size: 13px;
  color: #606266;
  line-height: 32px;
  flex-shrink: 0;
}

.field-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 12px;
  color: #52C41A;
  background-color: #F6FFED;
  border: 1px solid #B7EB8F;
  border-radius: 2px;
  line-height: 20px;
}

.field-code {
  margin-left: 8px;
  font-size: 12px;
  color: #52C41A;
  font-family: 'Consolas', 'Monaco', monospace;
}

.text-content {
  font-size: 13px;
  color: #303133;
  line-height: 1.6;
  white-space: pre-wrap;
}

.empty-state {
  text-align: center;
  padding: 40px 24px;
  color: #909399;
  font-size: 14px;
}
</style>

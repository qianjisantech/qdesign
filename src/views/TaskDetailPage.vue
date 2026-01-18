<template>
  <div class="task-detail-page">
    <!-- 顶部标题栏 -->
    <div class="page-header">
      <div class="task-info">
        <div class="task-icon">
          <svg viewBox="0 0 24 24" width="40" height="40">
            <circle cx="12" cy="12" r="12" fill="#0052D9"/>
            <path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" fill="none"/>
          </svg>
        </div>
        <div class="task-meta">
          <div class="task-type-id">
            <span class="task-type">活动研发任务</span>
            <span class="separator">/</span>
            <span class="task-id">UG-656416</span>
            <button class="icon-btn" title="复制">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" fill="currentColor"/>
                <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" fill="currentColor"/>
              </svg>
            </button>
            <button class="icon-btn" title="收藏">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M8 2l1.5 4.5h4.5l-3.5 2.5 1.5 4.5L8 11l-3.5 2.5 1.5-4.5-3.5-2.5h4.5z" stroke="currentColor" stroke-width="1.2" fill="none"/>
              </svg>
            </button>
            <button class="icon-btn" title="链接">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <h1 class="task-title">低购福袋赠品发货测试</h1>
        </div>
      </div>
    </div>

    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="status-item">
        <span class="label">问题类型：</span>
        <span class="badge badge-task">任务</span>
      </div>
      <div class="status-item">
        <span class="label">状态：</span>
        <span class="value">待处理</span>
        <a href="#" class="link">（查看工作流）</a>
      </div>
      <div class="status-item">
        <span class="label">优先级：</span>
        <svg class="priority-icon" viewBox="0 0 16 16" width="14" height="14">
          <path d="M8 2l6 12H2z" fill="#F5222D"/>
          <path d="M8 6v4M8 11v1" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span class="value priority-low">P3-低</span>
      </div>
      <div class="status-item">
        <span class="label">版本：</span>
        <span class="value">--</span>
      </div>
      <div class="status-item">
        <span class="label">Sprint：</span>
        <span class="value">--</span>
      </div>
      <div class="status-item">
        <span class="label">解决结果：</span>
        <span class="value">未解决</span>
      </div>
    </div>

    <!-- 操作按钮栏 -->
    <div class="action-bar">
      <div class="action-buttons">
        <QButton>编辑</QButton>
        <QButton>分配</QButton>
        <QButton>更多操作</QButton>
        <QButton>开始处理</QButton>
        <QButton>同步任务处理</QButton>
        <QButton>任务取消</QButton>
        <QButton>暂停</QButton>
        <QButton>工具箱</QButton>
      </div>
      <label class="checkbox-label">
        <input type="checkbox" v-model="showOnlyValues" />
        仅展示有值字段
      </label>
    </div>

    <!-- 主内容区 -->
    <div class="content-wrapper">
      <!-- 左侧字段区 -->
      <div class="left-section">
        <!-- Tab 切换 -->
        <QTabs v-model="activeTab" :tabs="tabs" />

        <!-- 团队自定义信息 -->
        <div v-show="activeTab === 'custom'" class="fields-section">
          <div class="field-item">
            <span class="field-label">ug产品线</span>
            <span class="field-value">用户运营/低购福袋</span>
          </div>
          <div class="field-item">
            <span class="field-label">任务类型/事项</span>
            <span class="field-value">测试/需求测试</span>
          </div>
          <div class="field-item">
            <span class="field-label">是否完成宣贯case执行</span>
            <span class="field-value">--</span>
          </div>
          <div class="field-item">
            <span class="field-label">需求收益类型</span>
            <span class="field-value">--</span>
          </div>
          <div class="field-item">
            <span class="field-label">模块（APP&WEB）</span>
            <span class="field-value">--</span>
          </div>
          <div class="field-item">
            <span class="field-label">涉及的端(UG)</span>
            <span class="field-value">--</span>
          </div>
          <div class="field-item">
            <span class="field-label">代码分支</span>
            <span class="field-value"></span>
          </div>
          <div class="field-item">
            <span class="field-label">是否完成测试Case评审</span>
            <span class="field-value">--</span>
          </div>
          <div class="field-item">
            <span class="field-label">产研需求类型</span>
            <span class="field-value">业务需求</span>
          </div>
          <div class="field-item">
            <span class="field-label">归属中心</span>
            <span class="field-value">全球运营中心</span>
            <span class="field-code">102786</span>
          </div>
          <div class="field-item">
            <span class="field-label">归属部门(二级)</span>
            <span class="field-value">运营产品部</span>
            <span class="field-code">100105</span>
          </div>
        </div>

        <!-- 公司标准信息 -->
        <div v-show="activeTab === 'standard'" class="fields-section">
          <div class="empty-state">暂无公司标准信息</div>
        </div>
      </div>

      <!-- 右侧人员和时间区 -->
      <div class="right-section">
        <!-- 人员信息 -->
        <div class="info-section">
          <div class="info-item">
            <span class="info-label">经办人</span>
            <div class="user-info">
              <div class="user-avatar">A</div>
              <span class="user-name">Allen Shen(10284941)</span>
            </div>
          </div>
          <div class="info-item">
            <span class="info-label">报告人</span>
            <div class="user-info">
              <div class="user-avatar">R</div>
              <span class="user-name">Ryan Huang(1021804...)</span>
              <button class="link-btn">🔗</button>
            </div>
          </div>
          <div class="info-item">
            <span class="info-label">需求归属人</span>
            <div class="user-info">
              <div class="user-avatar">W</div>
              <span class="user-name">Wanbo Wang(10253...)</span>
              <button class="link-btn">🔗</button>
            </div>
          </div>
          <div class="info-item">
            <span class="info-label">任务处理人</span>
            <div class="user-info">
              <div class="user-avatar">A</div>
              <span class="user-name">Allen Shen(10284941)</span>
            </div>
          </div>
          <div class="info-item">
            <span class="info-label">任务创建人</span>
            <div class="user-info">
              <div class="user-avatar">R</div>
              <span class="user-name">Ryan Huang(1021804...)</span>
              <button class="link-btn">🔗</button>
            </div>
          </div>
          <div class="info-item">
            <span class="info-label">需求提出人(单选)</span>
            <div class="user-info">
              <div class="user-avatar">W</div>
              <span class="user-name">Wanbo Wang(10253...)</span>
              <button class="link-btn">🔗</button>
            </div>
          </div>
        </div>

        <!-- 时间信息 -->
        <div class="info-section">
          <div class="section-title">时间信息</div>
          <div class="info-item">
            <span class="info-label">创建时间</span>
            <span class="info-value">2026-01-05 14:25:52</span>
          </div>
          <div class="info-item">
            <span class="info-label">已解决</span>
            <span class="info-value">--</span>
          </div>
          <div class="info-item">
            <span class="info-label">更新时间</span>
            <span class="info-value">2026-01-13 19:45:03</span>
          </div>
          <div class="info-item">
            <span class="info-label">计划推测日期</span>
            <span class="info-value">--</span>
          </div>
          <div class="info-item">
            <span class="info-label">取消时间</span>
            <span class="info-value">--</span>
          </div>
          <div class="info-item">
            <span class="info-label">需求计划完成日期</span>
            <span class="info-value">2026-02-03</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import QButton from '../components/QButton/index.vue'
import QTabs from '../components/QTabs/index.vue'

const activeTab = ref('custom')
const showOnlyValues = ref(false)

const tabs = [
  { key: 'custom', label: '团队自定义信息' },
  { key: 'standard', label: '公司标准信息' }
]
</script>

<style scoped>
.task-detail-page {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
}

/* 顶部标题栏 */
.page-header {
  padding: 20px 24px;
  border-bottom: 1px solid #e7e7e7;
}

.task-info {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.task-icon {
  flex-shrink: 0;
}

.task-meta {
  flex: 1;
}

.task-type-id {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #606266;
}

.task-type {
  color: #303133;
  font-weight: 500;
}

.separator {
  color: #909399;
}

.task-id {
  color: #606266;
}

.icon-btn {
  padding: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  color: #909399;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.icon-btn:hover {
  background-color: #f5f7fa;
  color: #606266;
}

.task-title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #303133;
  line-height: 1.5;
}

/* 状态栏 */
.status-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 24px;
  background-color: #fafafa;
  border-bottom: 1px solid #e7e7e7;
  font-size: 13px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.status-item .label {
  color: #606266;
}

.status-item .value {
  color: #303133;
}

.status-item .link {
  color: #0052D9;
  text-decoration: none;
  font-size: 12px;
}

.status-item .link:hover {
  text-decoration: underline;
}

.badge {
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 12px;
}

.badge-task {
  background-color: #e8f4ff;
  color: #0052D9;
}

.priority-icon {
  vertical-align: middle;
}

.priority-low {
  color: #FA9550;
}

/* 操作按钮栏 */
.action-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid #e7e7e7;
  gap: 12px;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #606266;
  cursor: pointer;
  white-space: nowrap;
}

/* 主内容区 */
.content-wrapper {
  display: flex;
  gap: 24px;
  padding: 0;
}

.left-section {
  flex: 1;
  min-width: 0;
}

.right-section {
  width: 400px;
  flex-shrink: 0;
  border-left: 1px solid #e7e7e7;
  padding: 24px;
}

/* 字段区域 */
.fields-section {
  padding: 16px 24px;
}

.field-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #f5f7fa;
}

.field-item:last-child {
  border-bottom: none;
}

.field-label {
  min-width: 180px;
  font-size: 13px;
  color: #606266;
  flex-shrink: 0;
}

.field-value {
  flex: 1;
  font-size: 13px;
  color: #303133;
}

.field-code {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;
  background-color: #f0f9ff;
  border: 1px solid #91d5ff;
  border-radius: 3px;
  font-size: 12px;
  color: #52C41A;
  font-family: 'Consolas', 'Monaco', monospace;
}

.empty-state {
  text-align: center;
  padding: 40px 24px;
  color: #909399;
  font-size: 14px;
}

/* 人员和时间信息 */
.info-section {
  margin-bottom: 32px;
}

.info-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e7e7e7;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  gap: 12px;
}

.info-label {
  font-size: 13px;
  color: #606266;
  min-width: 120px;
  flex-shrink: 0;
}

.info-value {
  flex: 1;
  font-size: 13px;
  color: #303133;
  text-align: right;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: flex-end;
}

.user-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #0052D9;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}

.user-name {
  font-size: 13px;
  color: #303133;
}

.link-btn {
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.link-btn:hover {
  opacity: 1;
}
</style>

<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="header-left">
        <h1 class="header-logo">QDesign</h1>
      </div>
      <div class="header-center">
        <div class="header-search">
          <input type="text" placeholder="搜索" class="search-input" v-model="searchText" />
          <svg class="search-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 14L11.1 11.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <nav class="header-nav">
        <a href="#" class="nav-link">基础组件</a>
        <a href="https://github.com" target="_blank" class="nav-link">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </nav>
    </header>

    <div class="app-body">
      <!-- 侧边栏 -->
      <aside class="sidebar">
        <nav class="sidebar-nav">
          <template v-for="group in menuGroups" :key="group.title">
            <div class="nav-group-title">{{ group.title }}</div>
            <router-link
              v-for="item in group.items"
              :key="item.path"
              :to="item.path"
              class="nav-item"
            >
              <span class="nav-text">{{ item.label }}</span>
            </router-link>
          </template>
        </nav>
      </aside>

      <!-- 主内容区 -->
      <main class="app-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchText = ref('')

const menuGroups = [
  {
    title: '基础组件',
    items: [
      { path: '/button', label: 'Button 按钮' },
      { path: '/input', label: 'Input 输入框' },
      { path: '/search', label: 'Search 搜索框' },
      { path: '/select', label: 'Select 下拉框' }
    ]
  },
  {
    title: '高级组件',
    items: [
      { path: '/user-select', label: 'UserSelect 人员选择' },
      { path: '/richtext', label: 'RichText 富文本' },
      { path: '/tag-input', label: 'TagInput 标签输入' },
      { path: '/editable-text', label: 'EditableText 可编辑文本' },
      { path: '/collapse', label: 'Collapse 折叠面板' }
    ]
  },
  {
    title: '表单',
    items: [
      { path: '/form', label: 'Form 完整表单' }
    ]
  },
  {
    title: '页面示例',
    items: [
      { path: '/task-detail', label: 'TaskDetail 任务详情' },
      { path: '/task-detail-page', label: 'TaskDetailPage 完整任务页' }
    ]
  }
]
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background-color: #ffffff;
}

/* 顶部导航栏 */
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.header-logo {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #0052D9;
  letter-spacing: 0;
  cursor: pointer;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.header-search {
  position: relative;
  width: 100%;
  max-width: 280px;
}

.search-input {
  width: 100%;
  height: 32px;
  padding: 0 36px 0 12px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  font-size: 14px;
  color: #000000;
  background-color: #f3f3f3;
  outline: none;
  transition: all 0.2s;
}

.search-input::placeholder {
  color: #999999;
}

.search-input:focus {
  background-color: #ffffff;
  border-color: #0052D9;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #999999;
  pointer-events: none;
}

.header-nav {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-shrink: 0;
}

.nav-link {
  color: #606266;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #0052D9;
}

/* 主体区域 */
.app-body {
  display: flex;
  margin-top: 64px;
  min-height: calc(100vh - 64px);
}

/* 侧边栏 */
.sidebar {
  width: 200px;
  background: #ffffff;
  border-right: 1px solid #e7e7e7;
  position: fixed;
  top: 64px;
  left: 0;
  height: calc(100vh - 64px);
  overflow-y: auto;
  flex-shrink: 0;
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #dcdcdc;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #bbb;
}

.sidebar-header {
  padding: 16px 24px;
  font-size: 12px;
  font-weight: 600;
  color: #909399;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.sidebar-nav {
  padding: 8px 0;
}

.nav-group-title {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #606266;
  background-color: #ffffff;
  letter-spacing: 0;
  margin-top: 8px;
  text-align: left;
}

.nav-group-title:first-child {
  margin-top: 0;
}

.nav-item {
  display: block;
  padding: 8px 24px;
  margin: 0;
  color: #606266;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  border-left: 2px solid transparent;
}

.nav-item:hover {
  color: #0052D9;
  background-color: rgba(0, 82, 217, 0.05);
}

.nav-item.router-link-active {
  color: #0052D9;
  background-color: rgba(0, 82, 217, 0.1);
  border-left-color: #0052D9;
  font-weight: 500;
}

.nav-text {
  display: block;
}

/* 主内容区 */
.app-main {
  flex: 1;
  margin-left: 200px;
  min-width: 0;
  background-color: #ffffff;
  padding: 32px 24px;
}

@media (max-width: 768px) {
  .app-header {
    padding: 0 16px;
  }

  .header-desc {
    display: none;
  }

  .app-body {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    position: relative;
    top: 0;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e7e7e7;
  }

  .sidebar-nav {
    display: flex;
    overflow-x: auto;
    padding: 8px;
  }

  .nav-item {
    white-space: nowrap;
    margin-right: 4px;
    margin-bottom: 0;
  }

  .app-main {
    margin-left: 0;
    padding: 16px;
  }
}
</style>

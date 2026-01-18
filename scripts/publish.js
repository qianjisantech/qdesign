#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 开始发布 QDesign 组件库...\n')

try {
  // 检查是否有未提交的更改
  const status = execSync('git status --porcelain').toString().trim()
  if (status) {
    console.error('❌ 工作区有未提交的更改，请先提交或暂存')
    console.log('未提交的文件：')
    console.log(status)
    process.exit(1)
  }

  // 运行测试（如果有的话）
  // console.log('🧪 运行测试...')
  // execSync('npm test', { stdio: 'inherit' })

  // 构建组件库
  console.log('🔨 构建组件库...')
  execSync('npm run build:lib', { stdio: 'inherit' })

  // 发布到npm
  console.log('📦 发布到npm...')
  execSync('npm publish', { stdio: 'inherit' })

  console.log('✅ 发布成功！')

} catch (error) {
  console.error('❌ 发布失败:', error.message)
  process.exit(1)
}

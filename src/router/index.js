import { createRouter, createWebHistory } from 'vue-router'
import InputDemo from '../views/InputDemo.vue'
import SearchDemo from '../views/SearchDemo.vue'
import SelectDemo from '../views/SelectDemo.vue'
import UserSelectDemo from '../views/UserSelectDemo.vue'
import RichTextDemo from '../views/RichTextDemo.vue'
import TagInputDemo from '../views/TagInputDemo.vue'
import EditableTextDemo from '../views/EditableTextDemo.vue'
import CollapseDemo from '../views/CollapseDemo.vue'
import ButtonDemo from '../views/ButtonDemo.vue'
import FormExample from '../views/FormExample.vue'
import TaskDetailDemo from '../views/TaskDetailDemo.vue'
import TaskDetailPage from '../views/TaskDetailPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/input'
  },
  {
    path: '/input',
    name: 'Input',
    component: InputDemo
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchDemo
  },
  {
    path: '/select',
    name: 'Select',
    component: SelectDemo
  },
  {
    path: '/user-select',
    name: 'UserSelect',
    component: UserSelectDemo
  },
  {
    path: '/richtext',
    name: 'RichText',
    component: RichTextDemo
  },
  {
    path: '/tag-input',
    name: 'TagInput',
    component: TagInputDemo
  },
  {
    path: '/editable-text',
    name: 'EditableText',
    component: EditableTextDemo
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: CollapseDemo
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonDemo
  },
  {
    path: '/form',
    name: 'Form',
    component: FormExample
  },
  {
    path: '/task-detail',
    name: 'TaskDetail',
    component: TaskDetailDemo
  },
  {
    path: '/task-detail-page',
    name: 'TaskDetailPage',
    component: TaskDetailPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})
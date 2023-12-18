import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import SkillSet from '../pages/SkillSet.vue'
import AboutMe from '../pages/AboutMe.vue'
import ContactMe from '../pages/ContactMe.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/skill-set', component: SkillSet },
  { path: '/about-me', component: AboutMe },
  { path: '/contact-me', component: ContactMe },
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})
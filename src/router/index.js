import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import SkillSet from '../views/SkillSet.vue'
import AboutMe from '../views/AboutMe.vue'
import ContactMe from '../views/ContactMe.vue'
import HeroSelect from '../views/HeroSelect.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { isUnlocked } from '../auth/auth-guards'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects, name: 'projects'},
  { path: '/skill-set', component: SkillSet, name: 'skill-set' },
  { path: '/about-me', component: AboutMe, name: 'about-me' },
  { path: '/contact-me', component: ContactMe, name: 'contact-me' },
  { path: '/hero-select', component: HeroSelect, name: 'hero-select' },
]

const unlockableRoutes = ['projects']

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})

router.beforeEach( async (to) => {
  if(unlockableRoutes.includes(to.name)) {
    return isUnlocked(to.name)
  }
}
)
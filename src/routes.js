import { createRouter, createWebHistory } from 'vue-router'
import AuthCallback from './views/AuthCallback.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/auth/callback', component: AuthCallback }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

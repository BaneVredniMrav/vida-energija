import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usluge',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/o-nama',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/galerija',
    name: 'gallery',
    component: () => import('../views/GalleryView.vue')
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router

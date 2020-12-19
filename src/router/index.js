import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page1',
    name: 'SamplePage1',
    component: () => import('../views/SamplePage1.vue')
  },
  {
    path: '/page2',
    name: 'SamplePage2',
    component: () => import('../views/SamplePage2.vue')
  },
  {
    path: '/page3',
    name: 'SamplePage3',
    component: () => import('../views/SamplePage3.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

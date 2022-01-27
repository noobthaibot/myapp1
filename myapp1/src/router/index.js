import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: dashboard,
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "Overview" */ '../views/News.vue')
      },
      {
        path: 'peoples',
        component: () =>
          import(/* webpackChunkName: "Messages" */ '../views/Peoples.vue')
      },
      {
        path: 'profile',
        component: () =>
          import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
      },
      {
        path: 'settings',
        component: () =>
          import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student.vue')
    },
    {
      path: '/employee',
      name: 'employee',
      component: () => import('./views/Employee.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./views/Account.vue')
    },
    {
      path: '/exams_score',
      name: 'exams_score',
      component: () => import('./views/ExamsScores.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('./views/Library.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/transportation',
      name: 'transportation',
      component: () => import('./views/Transportation.vue')
    }
  ]
})

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import(/* webpackChunkName: "student" */ './views/Student.vue')
    },
    {
      path: '/employee',
      name: 'employee',
      component: () => import(/* webpackChunkName: "student" */ './views/Employee.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "student" */ './views/Account.vue')
    },
    {
      path: '/exams_score',
      name: 'exams_score',
      component: () => import(/* webpackChunkName: "student" */ './views/ExamsScores.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import(/* webpackChunkName: "student" */ './views/Library.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "student" */ './views/Admin.vue')
    }//,
    // {
    //   path: '/student',
    //   name: 'student',
    //   component: () => import(/* webpackChunkName: "student" */ './views/Student.vue')
    // }
  ]
})

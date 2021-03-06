import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '../views/Login'
import {Message} from 'element-ui';

import store from '@/store'

import {getToken} from '@/request/token'
import Home from '@/Home'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'',
      name:'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: r => require.ensure([], () => r(require('../views/Index')), 'index')
        },
        {
          path: '/:type/all',
          component: r => require.ensure([], () => r(require('@/views/task/TaskAllCategoryTag')), 'taskallcategorytag')
        },
        {
          path: '/archives/:year?/:month?',
          component: r => require.ensure([], () => r(require('@/views/task/TaskArchive')), 'archives')
        },
        {
          path: '/subtasks',
          component: r => require.ensure([], () => r(require('@/views/IndexUserTask')), 'taskuserscrollpage'),
          meta: {
            requireLogin: true
          },

        },
        {
          path: '/taskaccepted',
          component: r => require.ensure([], () => r(require('@/views/usertask/TaskUserAccScrollPage')), 'taskusersccscrollpage'),
          meta: {
            requireLogin: true
          },

        },
      //  查看任务内容
        {
          path: '/view/:id',
          name:'taskview',
          component: r => require.ensure([], () => r(require('@/views/task/TaskView')), 'taskview')
        },
      //  发布任务
        {
          path:'/tasks/publish',
          name:'publish',
          component: r => require.ensure([], () => r(require('@/views/task/TaskWrite')), 'taskwrite'),
          meta: {
            requireLogin: true
          },
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/login',
      component: r => require.ensure([], () => r(require('@/views/Login')), 'login')
    },
    {
      path: '/register',
      component: r => require.ensure([], () => r(require('@/views/Register')), 'register')
    },

  ]
})
router.beforeEach((to, from, next) => {

  if (getToken()) {

    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.state.account.length === 0) {
        store.dispatch('getUserInfo').then(data => { //获取用户信息
          next()
        }).catch(() => {
          Message({
            type: 'warning',
            showClose: true,
            message: '登录已过期'
          })
          next({path: '/'})
        })
      } else {

        next()
      }
    }
  } else {
    if (to.matched.some(r => r.meta.requireLogin)) {
      Message({
        type: 'warning',
        showClose: true,
        message: '请先登录哦'
      })

    }
    else {
      next();
    }
  }
})

export default router

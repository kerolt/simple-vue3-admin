import router from './index'
import store from '@/store'

// 设置白名单，即未登录时也可以访问
const whiteList = ['/login']

// 设置路由守卫，在路由跳转时触发
router.beforeEach((to, from, next) => {
  if (store.getters.token) { // 已经存在token，即已登录
    if (to.path === '/login') { // 若将去login，没必要
      next('/')
    } else { // 否则放行
      next()
    }
  } else { // 若未存在token
    if (whiteList.includes(to.path)) { // 如果当前访问在白名单中，则放行
      next()
    } else {
      next('/login') // 否则跳转至登录
    }
  }
})

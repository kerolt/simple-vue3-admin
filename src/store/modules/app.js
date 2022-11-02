import { login as loginApi } from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/utils/authorize'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '', // token
    siderType: true // 菜单栏状态
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    // 修改菜单栏状态
    changeSiderType(state) {
      state.siderType = !state.siderType
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo).then((res) => {
          commit('setToken', res.token)
          setTokenTime() // 设置登录时间
          router.replace('/') // 设置路由
          resolve()
        }).catch((err) => {
          reject(err)
        })
      })
    },
    // 退出
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear() // 清空localStorage
      router.replace('/login') // 跳转到登录页面
    }
  }
}

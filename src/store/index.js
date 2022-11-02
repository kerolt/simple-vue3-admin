import { createStore } from 'vuex'
import app from '@/store/modules/app'
import getters from './getters'

export default createStore({
  modules: {
    app
  },
  getters
})

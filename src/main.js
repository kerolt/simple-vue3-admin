import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import store from '@/store'
import '@/router/permission'
import * as ELIcon from '@element-plus/icons-vue'
import i18n from './i18n'
import myData from './utils/my-day'

const app = createApp(App)

// 全局注册element-icon组件
for (const iconName in ELIcon) {
  app.component(iconName, ELIcon[iconName])
}

myData(app)

app.use(store).use(router).use(ElementPlus).use(i18n).mount('#app')

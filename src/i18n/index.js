import { createI18n } from 'vue-i18n'
import ZH from './zh'
import EN from './en'

const messages = {
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
}

/**
 * 获取当前浏览器的语言
 * @returns
 */
const getCurrentLanguage = () => {
  const UALang = navigator.language
  const langCode = UALang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLanguage() || 'zh',
  messages: messages
})

export default i18n

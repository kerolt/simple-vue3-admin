<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <el-icon><Tools /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'"
          >简体中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

const i18n = useI18n()
const store = useStore()

// 得到当前的语言种类
const currentLanguage = computed(() => {
  return i18n.locale.value
})

const handleCommand = (value) => {
  store.commit('app/changeLang', value)
  i18n.locale.value = value
  localStorage.setItem('lang', value)
}
</script>

<template>
  <div @click="handleToggle">
    <el-icon><Rank /></el-icon>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'

/**
 * 利用screenfull插件来实现全屏切换
 */
const handleToggle = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
</script>

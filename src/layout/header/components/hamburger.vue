<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon size="25px">
      <component :is="icon"></component>
      <!-- <el-icon><Expand /></el-icon> -->
    </el-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const toggleClick = () => {
  store.commit('app/changeSiderType')
}

const icon = computed(() => {
  return store.getters.siderType ? 'Fold' : 'Expand'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

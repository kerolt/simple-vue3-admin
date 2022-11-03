<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="size" :src="avatarUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const avatarUrl = ref('https://liuyxcc.github.io/img/avatar.png')

// 利用在vuex中定义好的logout
const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style lang="scss"></style>

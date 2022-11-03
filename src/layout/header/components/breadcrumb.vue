<template>
  <el-breadcrumb separator="/" class="breadcrumb-container">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
        $t(`menus.${item.name}`)
      }}</span>
      <span class="redirect" @click="handleClick(item.path)" v-else>{{
        $t(`menus.${item.name}`)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()
const router = useRouter()
const breadcrumbList = ref([]) // 面包屑列表

/**
 * 给breadcrumbList赋值
 */
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
}

// 监听route，每次route改变，重新设置breadcrumbList
watch(
  route,
  () => {
    initBreadcrumbList()
  },
  {
    deep: true,
    immediate: true
  }
)

/**
 * 添加当前路由
 * @param {String} path
 */
const handleClick = (path) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  font-size: 17px;
}
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>

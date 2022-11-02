<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened="true"
  >
    <el-sub-menu
      :index="item.id"
      v-for="(item, idx) in menuList"
      :key="item.id"
    >
      <template #title>
        <el-icon>
          <component :is="level1IconList[idx]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
      >
        <template #title>
          <el-icon>
            <component :is="level2Icon"></component>
          </el-icon>
          <span>{{ it.authName }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { getMenuList } from '@/api/menu'
import { ref } from 'vue'

// 一级、二级菜单图标
const level1IconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const level2Icon = ref('menu')

// 菜单列表
const menuList = ref([])
// 初始化菜单列表
const initMenuList = async () => {
  menuList.value = await getMenuList()
}
initMenuList()

// 网页打开默认的菜单选项，从session中获取，若无则默认为'/user'
const defaultActive = ref(sessionStorage.getItem('path') || '/user')
// 每次点击改变存储在session中的菜单选项
const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

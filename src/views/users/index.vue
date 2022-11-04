<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input v-model="input" :placeholder="$t('table.placeholder')" />
      </el-col>
      <el-button type="primary" :icon="Search">{{
        $t('table.search')
      }}</el-button>
      <el-button type="primary">{{ $t('table.adduser') }}</el-button>
    </el-row>
    <!-- 表格信息 -->
    <el-table :data="tableData" border style="width: 100%">
      <!-- 用户名 -->
      <el-table-column
        prop="username"
        :label="$t('table.username')"
        width="180"
      />
      <!-- 角色名 -->
      <el-table-column
        prop="role_name"
        :label="$t('table.role_name')"
        width="180"
      />
      <!-- 邮箱 -->
      <el-table-column prop="email" :label="$t('table.email')" width="180" />
      <!-- 电话 -->
      <el-table-column prop="mobile" :label="$t('table.mobile')" width="180" />
      <!-- 创建时间 -->
      <el-table-column
        prop="create_time"
        :label="$t('table.create_time')"
        width="180"
      >
        <!-- 利用插槽来显示格式化后的日期 -->
        <template v-slot="{ row }">
          {{ $filters.filterTime(row.create_time) }}
        </template>
      </el-table-column>
      <!-- 状态 -->
      <el-table-column
        prop="mg_state"
        :label="$t('table.mg_state')"
        width="180"
      >
        <template v-slot="{ row }">
          <el-switch v-model="row.mg_state" disabled />
        </template>
      </el-table-column>
      <!-- 操作按钮 -->
      <el-table-column>
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle />
        <el-button type="warning" :icon="Setting" circle />
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { Search, Edit, Delete, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { getUserList } from '@/api/user'

const tableData = ref([])
const params = ref({
  query: '',
  pagenum: 1,
  pagesize: 2
})

const initUserList = async () => {
  const res = await getUserList(params.value)
  tableData.value = res.users
  console.log(tableData.value)
}
initUserList()
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 18px;
  box-sizing: border-box;
}
</style>

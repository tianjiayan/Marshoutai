<template>
  <el-sub-menu
    v-if="item.children && item.children.length > 0"
    :key="item.path"
    :index="item.path"
  >
    <!-- <template #icon>
      <setting-outlined v-if="item.path === '/system'" />
      <send-outlined v-if="item.path === '/audit'" />
    </template> -->
    <template #title>{{ item.meta.title }}</template>
    <MenuItem
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    ></MenuItem>
  </el-sub-menu>
  <el-menu-item v-else :key="item.pat" :index="item.path">
    {{ item.meta.title }}
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
// import { SettingOutlined, SendOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// console.log(router.getRoutes(), 'routers')
defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>
</style>

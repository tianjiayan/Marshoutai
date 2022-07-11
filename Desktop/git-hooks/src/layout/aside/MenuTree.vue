<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#001529"
    class="el-menu-vertical-demo"
    default-active="/index"
    text-color="#fff"
    router
  >
    <MenuItem v-for="item in menuList" :key="item.path" :item="item">
      {{menuList}}
    </MenuItem>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ObtainingLevel1Routing, GeneratingMenuData } from '@/utils/route'
import { computed } from 'vue'
import { removeChildren } from '@/utils/removeChildren'
import MenuItem from './MenuItem.vue'

const router = useRouter()
const menuList = computed(() => {
  const routes = GeneratingMenuData(ObtainingLevel1Routing(router.getRoutes()))
  return removeChildren(routes)
})
// const changePath = ({ key }) => {
//   router.push(key)
// }
</script>

<style scoped>
.el-menu {
  height: 100%;
  background-color: #001529;
  overflow: auto;
  border-right: 0;
}
</style>

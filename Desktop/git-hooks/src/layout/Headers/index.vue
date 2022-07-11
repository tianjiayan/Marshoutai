<template>
  <div class="con">
    <el-icon><Expand /></el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div class="right">
    <el-icon><Bell /></el-icon>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link"> admin </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="email"
            >邮箱:admin@mooc.com</el-dropdown-item
          >
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const handleCommand = (command) => {
  switch (command) {
    case 'email':
      gotoEmail()
      break
    case 'logout':
      handleLogout()
      break
  }
}

//去邮箱
const gotoEmail = () => {
  console.log('gotoEmail')
}
//回到登录页
const handleLogout = () => {
  //   console.log('handleLogout')
  store.dispatch('user/logout')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.right {
  width: 70px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.con {
  // width: 230px;
  display: flex;
  // justify-content: space-between;
  .el-icon{
    margin-right: 20px;
  }
}
</style>
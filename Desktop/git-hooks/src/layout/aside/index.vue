<template>
  <el-aside width="230px">
    <div class="logo">
      <img
        src="http://manager.9yuecloud.com/img/logo.384b81fb.png"
        class="image"
        alt=""
      />
      <span>Manager</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  border: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  padding-left:20px ;
  font-size: 18px;
  height: 50px;
  span {
    color: white;
    margin-left: 15px;
  }
}
.image {
  width: 32px;
  height: 32px;
}
.el-menu {
  height: 100%;
  background-color: #001529;
  // overflow-x: hidden;
  // overflow-y: scroll;
  overflow: auto;
  border-right: 0;
}
</style>
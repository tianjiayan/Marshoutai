<template>
  <el-container>
    <asideVue></asideVue>
    <el-container>
      <el-header>
        <Headers></Headers>
      </el-header>
      <mainVue></mainVue>
    </el-container>
  </el-container>
</template>

<script setup>
import asideVue from './aside'
import headers from './Headers'
import mainVue from './main'
import Headers from './Headers/index.vue'
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: white;
  color: #333;
  border-bottom: solid 1px #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
  background-color: #001529;
  overflow: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.el-container {
  //   margin-bottom: 40px;
  height: 100%;
}
</style>
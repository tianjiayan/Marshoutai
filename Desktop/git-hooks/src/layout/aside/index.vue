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
    <MenuTree></MenuTree>
  </el-aside>
</template>

<script setup>
import MenuTree from './MenuTree.vue'
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

</style>
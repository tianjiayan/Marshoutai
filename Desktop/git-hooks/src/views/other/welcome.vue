<template>
  <div class='welcome'>
    <div class='content'>
      <div class='sub-title'>欢迎体验</div>
      <div class='title'>慕课通用后台管理系统</div>
      <div class='desc'>- Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统</div>
    </div>
    <div class='img'></div>
  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);

  .content {
    position: relative;
    bottom: 40px;

    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }

    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }

    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }

  .img {
    width: 371px;
    height: 438px;
    margin-left: 105px;
    background: url("http://manager.9yuecloud.com/img/welcome.7a3ee224.png");
  }
}
</style>

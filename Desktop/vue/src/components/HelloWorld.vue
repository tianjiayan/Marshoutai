<template>
  <div >
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

  </div>
</template>

<script>  

import { Button} from "vant"
import { banner,cartList} from "../request/http"
export default {
  name: 'HelloWorld',
  components:{
    [Button.name]: Button,

  },
  mounted(){
    banner().then(res => {
      console.log(res)
    })
    cartList().then(res => {
      console.log(res)
    })


  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

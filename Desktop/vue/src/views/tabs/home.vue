<template>
    <div class="wahh">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in list" :key="index">
                <img :src="item.banner_img" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="daohang" >
            <ul class="whh">
                <li class="hh" @click="$router.push('curriculum')">
                    <van-icon name="vip-card" class="dd dd1" />
                    <p>特色课</p>
                </li>
                <li class="hh" @click="$router.push('fudao')">
                    <van-icon name="wechat" class="dd dd2"  />
                    <p>一对一辅导</p>
                </li>
                <li class="hh" @click="$router.push('rili')">
                    <van-icon name="live" class="dd dd3" />
                    <p>学习日历</p>
                </li>
            </ul>
        </div>
        <div v-for="(item,index) in shuju" :key="index" class="da">
            <p  class="title">{{item.channel_info.name}}</p>
            <div >
                <div v-for="(item,index) in item.list" :key="index" class="xiao" @click="yyjk(item)">
                    <div >
                        <img :src="item.teacher_avatar" alt="" class="tupian" v-if="item.teacher_avatar">
                    </div>
                    <div>
                        <p class="big">{{item.teacher_name}}</p>
                        <p class="small">{{item.introduction}}</p>
                        <p class="big" v-if="item.title">{{item.title}}</p>
                        <p class="small2" v-if="item.id">共点击量</p>
                        <p class="small" v-if="item.id"><span class="hou">{{item.id}}人报名</span><span class="qian"> <van-icon name="points" />{{item.price}}.00</span></p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="yyds"></div>
    </div>
</template>

<script>
// import {tu} from "../../request/http.js"
import { banner, cartList } from "../../request/http";
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      list: [],
      shuju:[],
    };
  },
  methods:{
    yyjk(item){
        console.log(item);

        sessionStorage.setItem('zy',JSON.stringify(item))
        if(item.teacher_name){

            this.$router.push({
                path:"/teacher",
                query:{id:item.teacher_id}
            })
            
        }else{
            this.$router.push('/books')
        }
    }
  },
  mounted() {
    banner().then(res => {
    //   console.log(res);
      this.list=res.data.data
        // console.log(this.list)
    });
    cartList().then(res => {
    //   console.log(res);
      this.shuju=res.data.data
      console.log(this.shuju)
    });
  }
};
</script>

<style scoped>
    .yyds {
  width: 100%;
  height: 1.5rem;
  background: #f2f3f5;
  
}
.wahh {
    background: #f2f3f5;
}
.dd{
    font-size: 1rem; 
    margin-top: 0.5rem;
    
}
.dd1{
    color: #5251da;
}
.dd2{
    color: #73b3a5;
}
.dd3{
    color: #d88f72
}
.small{
    font-size: .32rem;
    color: #999;
}
.small2{
    font-size: .32rem;
    color: #999;
    padding-bottom: 1rem
}
.big{
    font-size: .373rem;
    color: #323233;
}
.tupian{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-top: 0.5rem;
    margin-right: 0.3rem;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
}

img {
    width: 100%;
}

.qian{
    margin-left: 5.5rem;
    /* float: right; */
    color: #ff5d1e;
    font-size: .32rem;
}

.whh{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    /* position: absolute; */
    
    
}
.xiao{
    display: flex;
    background: #ffffff;
    border-radius: 0.2rem;
    margin: 0.2rem 0;
    padding: 0.2rem 0.2rem;
}
.da{
    margin: 0.2rem 0.4rem;
}

.hh {
    width: 2.747rem;
    height: 2.747rem;
    background: #fff;
    color: #8c8c8c;
    border-radius: 0.267rem;
    text-align: center;
    /* isplay: -webkit-box; */
    /* display: -webkit-flex; */
    
    
}
.daohang{
    /* padding: 0 40px ; */
    width: 90%;
    /* height: 2.747rem; */
    margin: 0 auto;
    position: relative;
    top: -1.667rem;
    margin-bottom: -1.4rem;
    
}
.title{
    border-left: 0.08rem solid red;
    padding-left: 0.267rem;
    font-size: .453rem;
    
}
</style>
<template>
    <div>
        <van-nav-bar title="课程详情" left-text="" right-text="=" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
        
            <div class="header">
            <div class="ch">
                <p class="title"><span>{{list.title}}</span> <span ><van-icon name="star-o" :color="flag?'black': '#ffa500'" class="tb" @click="bs()"/></span></p>
                <p class="act" v-if="list.price==0"><van-icon name="gold-coin-o" />免费</p>
                <p class="act" v-if="list.price!==0"><van-icon name="gold-coin-o" />{{list.price}}</p>
                <p class="xiao">共{{list.sales_num}}课时|{{list.brows_num}}人已报名</p>
            </div>
        </div>
        <div class="body">
            <div class="ch">
                <p class="title">教学团队</p>
                <ul v-for="(item,index) in list.teachers_list" :key="index">
                    <li class="box"> 
                        <img :src="item.teacher_avatar" alt="" class="imag">
                        <p class="zi">{{item.teacher_name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bb">
            <div class="ch">
                <p class="title">课程介绍</p>
                <p>暂无</p>
            </div>
        </div>
        <div class="bb">
            <div class="ch">
                <p class="title">课程大纲</p>
                <div data-v-686ff34c="" data-v-375b27ef="" class="main">
                    <div data-v-686ff34c="" class="charpter_top">
                        <i data-v-686ff34c="" class="iconfont icon-dian"></i>
                        <div data-v-686ff34c="" class="huifang">回访</div>
                        <div data-v-686ff34c="" class="title">{{list.title}}</div>
                    </div>
                    <div data-v-686ff34c="" class="content">2021.07.08 00:00</div>
                </div>
            </div>
        </div>
        <div class="bb">
            <div class="ch">
                <p class="title">课程评论</p>
                <img src="http://xl.9yuecloud.com/assets/img/empty.0d284c2e.png" alt="" class="whh">

            </div>
        </div>
        <div class="yyds"></div>
        <div data-v-22604d1c="" class="btn">立即报名</div>
        
        
    </div>
</template>

<script>
import { Toast } from "vant";
import { NavBar } from "vant";
export default {
  components: {
    [Toast.name]: Toast,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      list: [],
      flag:false
    };
  },
  created() {
    this.dd();
  },
  methods: {
    dd() {
      // JSON.parse(sessionStorage.getItem('zy'))
      //    console.log(JSON.parse(sessionStorage.getItem('zy')));
      this.list = JSON.parse(sessionStorage.getItem("cc"));
      console.log(this.list);
    },
    onClickLeft() {
      Toast("返回");
      this.$router.push("/curriculum");
    },
    onClickRight() {
      Toast("按钮");
    },
    bs(){
      this.flag=!this.flag
    }
  }
};
</script>

<style scoped>
    .whh {
    width: 2.4rem;
    height: 2.667rem;
    margin-left: 40%;
}
    .charpter_top .title[data-v-686ff34c] {
    margin: 0 0.267rem;
}
    .charpter_top .huifang[data-v-686ff34c] {
    background: #ea7a2f;
    color: #fff;
    border-radius: 0.133rem;
    padding: 0.053rem 0.107rem;
}
    .icon-dian:before {
    content: "\e6a1";
}
    .charpter_top .iconfont[data-v-686ff34c] {
    color: orange;
}
    .content[data-v-686ff34c] {
    padding-left: 0.8rem;
    color: #777;
    padding-bottom: 0.2rem
}
    .charpter_top[data-v-686ff34c] {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
}
.btn[data-v-22604d1c] {
  width: 100%;
  height: 1.173rem;
  background: #eb6100;
  text-align: center;
  line-height: 1.173rem;
  color: #fff;
  font-size: 0.453rem;
  position: fixed;
  bottom: 0;
}
.header {
  width: 100%;
  background: #fff;
  padding: 0.2rem 0;
}
.act {
  color: #ee1f1f;
  font-size: 0.448rem;
  line-height: 0.133rem;
}
.body {
  width: 100%;
  background: #fff;
  padding: 0.2rem 0;
  margin-top: 0.2rem;
  height: 3.5rem;
}
.bb {
  width: 100%;
  background: #fff;
  padding:  0.05rem 0 0.2rem 0;
  margin-top: 0.2rem;
}
.yyds {
  width: 100%;
  height: 1.5rem;
  background: #f2f3f5;
  
}
.ch {
  margin: 0rem 0.2rem;
}
.box {
  width: 1rem;
  height: 1rem;
  text-align: center;
  float: left;
  margin-right: 0.267rem;
}
.imag {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.title {
  font-size: 0.453rem;
}
.xiao {
  font-size: 0.427rem;
  color: #777;
}
.title {
    font-size: .427rem;
    padding-top: 0.267rem;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
p {
    padding-left: 0.267rem;
    line-height: .4rem;
}


p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.tb{
  font-size: .527rem;
  margin-right: 0.3rem
}
.zi{
  padding: 0;

}
</style>
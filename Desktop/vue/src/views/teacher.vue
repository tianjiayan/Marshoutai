<template>
    <div>
        <div data-v-7a237af2="" class="hand">
            <div data-v-7a237af2="" class="detail_hander">
                <i data-v-7a237af2=""
                    class="icon van-icon van-icon-arrow-left"
                    @click="$router.push('/home')"
                    >
                返回
                </i>
                <!-- <van-icon name="arrow-left" @click="$router.push('/home')"/> -->
                讲师详情
             </div>
            <div data-v-7a237af2="" class="detail_cart"><img data-v-7a237af2="" alt="" class="img"
                    :src="list.teacher_avatar">
                <div data-v-7a237af2="" class="cart_content">
                    <p data-v-7a237af2="" class="name"></p>
                    <p data-v-7a237af2="" class="cart_xq"><span data-v-7a237af2="">女</span><span data-v-7a237af2="">
                            年教龄</span></p>
                </div>
                <div data-v-7a237af2 class="cart_right" @click="add">{{flag == 1?'取消关注':'关注'}}</div>
            </div>
        </div>
        <div class="hh">
            <van-tabs v-model="active" >
            <van-tab title="讲师介绍"></van-tab>
            <van-tab title="主讲课程"></van-tab>
            <van-tab title="学员评价"></van-tab>
        </van-tabs>
        </div>
        <!-- {{id}}  -->
        
    </div>
</template>

<script>
    import { getTeacher, guan } from '@/request/http'
    import { Tab, Tabs } from 'vant';
export default {
    components:{
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,

  },
  data() {
    return {
        active: 2,
        list:[],
        index: 1,
            id: this.$route.query.id,
            info: {},
            flag: '',
    }
  },
    created() {
        this.dd()
    },
    methods: {
        tab(i) {
            this.index = i
        }
    },
    methods: {
        dd() {
            JSON.parse(sessionStorage.getItem('zy'))
            console.log(JSON.parse(sessionStorage.getItem('zy')));
            this.list=JSON.parse(sessionStorage.getItem('zy'))
            console.log(this.list);

        },
        add() {
            // console.log(11);
                guan(this.id).then(res => {
                    console.log(res);
                    this.flag = res.flag
                })
                getTeacher(this.id).then(res => {
                    console.log(res);
                    this.info = res.teacher
                })
           
        }
        
    },
    created(){
        // this.id = this.$router.query.id
    }

}
</script>

<style scoped>
    .hh{
        margin-top: 1.5rem
    }
    .hand[data-v-7a237af2] {
    width: 100%;
    height: 2.667rem;
    background: #5ba2f4;
}
.hand .detail_hander[data-v-7a237af2] {
    width: 95%;
    margin: 0 auto;
    height: 1.173rem;
    text-align: center;
    color: #fff;
    line-height: 1.173rem;
    font-size: .48rem;
}
.hand .detail_hander .icon[data-v-7a237af2] {
    line-height: 1.173rem;
    float: left;
}
.van-icon {
    position: relative;
    font: normal normal normal 0.373rem/1 vant-icon;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
.van-icon, .van-icon:before {
    display: inline-block;
}
.van-icon-arrow-left:before {
    content: "\F008";
}
.van-icon, .van-icon:before {
    display: inline-block;
}
.detail_cart[data-v-7a237af2] {
    height: 2.667rem;
    width: 95%;
    margin: 0 auto;
    background: #fff;
    border-radius: 0.133rem;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.detail_cart img[data-v-7a237af2] {
    width: 1.333rem;
    height: 1.333rem;
    margin: 0 0.267rem;
    border-radius: 100%;
}
.detail_cart .cart_content[data-v-7a237af2] {
    width: 5.6rem;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.detail_cart .cart_content .name[data-v-7a237af2] {
    font-size: .4rem;
}
.detail_cart .cart_content .cart_xq[data-v-7a237af2] {
    color: #777;
}
.detail_cart .cart_right[data-v-7a237af2] {
    width: 1.653rem;
    height: 0.747rem;
    background: #ebeefe;
    border-radius: 0.4rem;
    text-align: center;
    line-height: .747rem;
    color: #eb6100;
}
.detail_content[data-v-7a237af2] {
    width: 100%;
    margin: 0 auto;
    background: #fff;
    color: #777;
    margin-top: 1.6rem;
    font-size: .347rem;
}

.van-tab__text-wrapper, .van-tabs {
    position: relative;
}
.van-tabs--line .van-tabs__wrap {
    height: 1.173rem;
}
.van-tabs__wrap {
    overflow: hidden;
}
.van-tabs__nav--line {
    box-sizing: content-box;
    height: 100%;
    padding-bottom: 0.4rem;
}
.van-tabs__nav {
    position: relative;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    background-color: #fff;
    /* -webkit-user-select: none; */
    user-select: none;
}
</style>
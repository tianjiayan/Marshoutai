<template>
    <div>
        <van-nav-bar title="课程详情" left-text="" right-text="￥" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
        <div class="header">
            <div class="ch">
                <p class="title">{{list.title}}</p>
                <p class="act">{{list.price}}</p>
                <p class="xiao">共{{list.sales_num}}课时|{{list.sales_base}}人已报名</p>
            </div>
        </div>
        <div class="body">
            <div class="ch">
                <p class="title">教学团队</p>
                <ul v-for="(item,index) in list.teachers_list" :key="index">
                    <li class="box"> 
                        <img :src="item.teacher_avatar" alt="" class="imag">
                        <p>{{item.teacher_name}}</p>
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
                <p>暂无</p>
            </div>
        </div>
        <div class="yyds"></div>
        <div data-v-22604d1c="" class="btn">立即报名</div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { NavBar } from 'vant';
export default {
    components: {
        [Toast.name]: Toast,
        [NavBar.name]: NavBar
    },
    data() {
        return {
            list: []
        }
    },
    created() {
        this.dd()
    },
    methods: {
        dd() {
            // JSON.parse(sessionStorage.getItem('zy'))
            //    console.log(JSON.parse(sessionStorage.getItem('zy'))); 
            this.list = JSON.parse(sessionStorage.getItem('zy'))
            console.log(this.list);
        },
        onClickLeft() {
            Toast('返回');
            this.$router.push('/home')
        },
        onClickRight() {
            Toast('按钮');
        },
    },
}
</script>

<style scoped>
    .btn[data-v-22604d1c] {
    width: 100%;
    height: 1.173rem;
    background: #eb6100;
    text-align: center;
    line-height: 1.173rem;
    color: #fff;
    font-size: .453rem;
    position: fixed;
    bottom: 0;
}
    .header{
        width: 100%;
        background: #fff;
        padding: 0.2rem 0;
    }
    .act{
        color: orange;
    font-size: .448rem;
    line-height: .133rem;
    }
    .body{
        width: 100%;
        background: #fff;
        padding: 0.2rem 0;
        margin-top: 0.2rem;
        height: 3.5rem;
    }
    .bb{
        width: 100%;
        background: #fff;
        padding: 0.2rem 0;
        margin-top: 0.2rem;
    }
    .ch{
        margin: 0rem 0.2rem;
    }
    .yyds {
  width: 100%;
  height: 1.5rem;
  background: #f2f3f5;
  
}
    .box{
        width: 1rem;
        height: 1rem;
    text-align: center;
    float: left;
    margin-right: 0.267rem;
    }
    .imag{
        width: 100%;
        height: 100%;
        border-radius: 100%
    }
    .title{
        font-size: .453rem;
    }
    .xiao{
        font-size: .427rem;
    color: #777;
    }
</style>
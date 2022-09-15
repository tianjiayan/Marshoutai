<template>
    <div class="sex">
        <van-nav-bar title="修改个人信息" right-text="保存" left-arrow @click-left="$router.back()"
            @click-right="onClickRight" />

        <ul data-v-28c1a3b2="" class="content">
            <li data-v-28c1a3b2="" class="" @click="tab(0)">男 <i class="iconfont icon-duihao" v-if="sex == 0"></i></li>
            <li data-v-28c1a3b2="" class="active" @click="tab(1)">女 <i class="iconfont icon-duihao" v-if="sex == 1"></i></li>
        </ul>

    </div>
</template>
<script>
import { NavBar } from 'vant';
import { xgUser ,userInfo} from '@/request/http';
export default {
    components: {
        [NavBar.name]: NavBar,
    },
    data() {
        return {
            sex:''
        }
    },
    methods:{
        
        tab(i){
            // console.log(this.sex);
            this.sex = i
            console.log(i);
        },
         // 保存
         onClickRight() {
            xgUser({sex:this.sec}).then(res=>{
                console.log(res);
            })

            userInfo().then(res=>{
                console.log(res);
            })

            this.$router.push('/userInfo')
        }
    },
    created(){
        // this.sex = 
    }
}
</script>

<style lang="scss" scoped>
.content {
    margin-top: 0.4rem;
    width: 100%;
    background: #fff;
}

.content li {
    padding-left: 0.267rem;
    height: 1.333rem;
    line-height: 1.333rem;
    font-size: .4rem;
    color: #595959;
    position: relative;
    padding-right: 0.8rem;
    i{
        color: orange;
        float: right;
        display: inline-block;
    }
    .active{
    display: none;
    
}
}

</style>

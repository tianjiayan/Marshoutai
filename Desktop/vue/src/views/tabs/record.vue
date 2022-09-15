<template>
    <div class="whh">
        <div class="biaoti">
            <p>约课记录</p>
        </div>
        <van-tabs v-model="active">
            <van-tab title="待上课"><img src="	http://xl.9yuecloud.com/assets/img/no-message.8d3ca5af.png" alt=""></van-tab>
            <van-tab title="已上课"><img src="	http://xl.9yuecloud.com/assets/img/no-message.8d3ca5af.png" alt=""></van-tab>
            <van-tab title="已取消"><img src="	http://xl.9yuecloud.com/assets/img/no-message.8d3ca5af.png" alt=""></van-tab>
        </van-tabs>
    </div>
</template>

<script>
// import Vue from 'vue';
import { Tab, Tabs } from 'vant';
export default {
    components:{
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,

  },
    data() {
        return {
            active: 2
        };
    }
};
</script>

<style scoped>
    
.biaoti {
    max-width: 100%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: 0.427rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
    background: #ffff;
}
img{
    width: 100%;
}
</style>
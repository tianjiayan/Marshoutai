<template>
    <div>
        <div data-v-431c6ab0="" class="van-nav-bar van-hairline--bottom">
            <div class="van-nav-bar__left" @click="$router.back()">
                <van-icon name="arrow-left" class="van-icon van-icon-arrow-left van-nav-bar__arrow" />
                </div>
            <div class="van-nav-bar__title van-ellipsis" >{{hh==0?"课程订单":hh==1?"会员订单":"约课订单"}}</div>
            <div class="van-nav-bar__right"></div>
        </div>
        <Gongxiang></Gongxiang>
    </div>

</template>

<script>
import Gongxiang from "./gongxiang.vue";
export default {
    components: { Gongxiang },
    data() {
        return {
            hh:this.$route.query.item
            
        }
    },
    methods: {
       
    },
    created(){
        console.log(this.hh);
    }
}
</script>

<style scoped>
.van-nav-bar {
    position: relative;
    z-index: 1;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
    height: 1.227rem;
    line-height: 1.5;
    text-align: center;
    background-color: #fff;
    /* -webkit-user-select: none; */
    user-select: none;
}

.van-nav-bar__left,
.van-nav-bar__right {
    position: absolute;
    top: 0;
    bottom: 0;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
    padding: 0 0.427rem;
    font-size: .373rem;
    cursor: pointer;
}

.van-nav-bar .van-icon {
    color: #1989fa;
}

.van-nav-bar__arrow {
    min-width: 1em;
    margin-right: 0.107rem;
    font-size: .427rem;
}

.van-icon,
.van-icon:before {
    display: inline-block;
}

.van-icon {
    position: relative;
    font: normal normal normal 0.373rem/1 vant-icon;
    /* font-size: inherit; */
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: .427rem;
}

.van-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.van-nav-bar__left,
.van-nav-bar__right {
    position: absolute;
    top: 0;
    bottom: 0;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
    padding: 0 0.427rem;
    font-size: .373rem;
    cursor: pointer;
}
</style>
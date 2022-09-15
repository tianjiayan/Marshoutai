<template>
    <div>
        <div class="hh">
            <router-view />
        </div>
        <van-tabbar route>
            <van-tabbar-item v-for="(item, index) in tabs" :key="index" replace :to="'/' + item.path" :icon="item.icon">
                {{ item.title }}
            </van-tabbar-item>
            <van-tabbar-item  replace to="/wode" icon="user-circle-o" >
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    data() {
        return {
            tabs: [
                { title: "首页", path: "home", icon: "home-o" },
                { title: "课程", path: "curriculum", icon: "label-o" },
                { title: "约课记录", path: "record", icon: "completed" },
                { title: "练习", path: "practice", icon: "orders-o" },
                // { title: "我的", path: "my", icon: "user-circle-o" },
            ],
         
        }
    },
    // directives:{

    // },
    methods: {
    //     greet(val, el) {            
    // // 返回的val和el元
    //   console.log(val,el);
    //     }
    },
    beforeRouteEnter (to, from, next) {
        // ...
        if(localStorage.getItem("adminToken")){
            next()
        }
        else{
            next("/my")

        }
    } 
}
</script>

<style scoped>
/* body{
    position: relative;
} */
.hh {
    margin-bottom: 1.325rem;
}


</style>
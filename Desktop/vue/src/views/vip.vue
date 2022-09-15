<template>
    <div>
        <van-nav-bar title="开通会员" left-text="" right-text="" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
    </div>
</template>

<script>

import { NavBar } from 'vant';

export default {
    components: {
        [NavBar.name]: NavBar,
    },
    methods: {
        onClickLeft() {
            // Toast('返回');
            this.$router.go(-1)
        },
        onClickRight() {
            // Toast('按钮');
        },
    },
}
</script>

<style scoped>

</style>
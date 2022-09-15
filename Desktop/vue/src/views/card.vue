<template>
    <div>
        <van-nav-bar title="我的学习卡" left-text="" right-text="学习卡兑换" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
        <div data-v-4c79d668=""><div data-v-f37153fa="" data-v-4c79d668="" class="empty"><img data-v-f37153fa="" src="	http://xl.9yuecloud.com/assets/img/empty.0d284c2e.png"><p data-v-f37153fa="">暂无兑换记录</p></div></div>

    </div>
</template>

<script>
import { Toast } from 'vant';
import { NavBar } from 'vant';

export default {
    data() {
        return {
            active: 2,
        };
    },
    components: {
        [NavBar.name]: NavBar,
    },
    methods: {
        onClickLeft() {
            Toast('返回');
            this.$router.go(-1)
        },
        onClickRight() {
            Toast('功能暂未开放');
        },
    },
};
</script>

<style scoped>
.empty[data-v-f37153fa] {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    /* -webkit-flex-direction: column; */
    flex-direction: column;
    text-align: center;
}

.empty img[data-v-f37153fa] {
    width: 70%;
    margin: 0 auto;
}

.empty p[data-v-f37153fa] {
    font-size: .4rem;
    color: #8c8c8c;
    margin-top: 1.067rem;
}


p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
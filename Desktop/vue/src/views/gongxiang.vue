<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="全部订单">
                <div data-v-431c6ab0="" class="no-login"><img data-v-431c6ab0="" src="http://xl.9yuecloud.com/assets/img/empty.0d284c2e.png"
                        alt="">
                    <div data-v-431c6ab0="" class="info">暂无订单</div>
                </div>
            </van-tab>
            <van-tab title="待支付">
                <div data-v-431c6ab0="" class="no-login"><img data-v-431c6ab0="" src="http://xl.9yuecloud.com/assets/img/empty.0d284c2e.png"
                        alt="">
                    <div data-v-431c6ab0="" class="info">暂无订单</div>
                </div>
            </van-tab>
            <van-tab title="已完成">
                <div data-v-431c6ab0="" class="no-login"><img data-v-431c6ab0="" src="http://xl.9yuecloud.com/assets/img/empty.0d284c2e.png"
                        alt="">
                    <div data-v-431c6ab0="" class="info">暂无订单</div>
                </div>
            </van-tab>
            <van-tab title="已取消">
                <div data-v-431c6ab0="" class="no-login"><img data-v-431c6ab0="" src="http://xl.9yuecloud.com/assets/img/empty.0d284c2e.png"
                        alt="">
                    <div data-v-431c6ab0="" class="info">暂无订单</div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,

    },
    data() {
        return {
            active: 2,
        };
    },
}
</script>

<style scoped>
.no-login[data-v-431c6ab0] {
    text-align: center;
}
</style>
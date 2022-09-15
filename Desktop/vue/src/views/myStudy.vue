<template>
    <div>
        <van-nav-bar title="我的关注" left-arrow @click-left="$router.back()" />

        <div data-v-6fbc6c02="" class="content">
            <div data-v-6fbc6c02="" role="feed" class="van-list" v-for="(item,index) in list" :key="index">
                <div data-v-6fbc6c02="" class="content_item"><img data-v-6fbc6c02=""
                        :src="item.avatar"
                        alt="" srcset="" class="avact">
                    <div data-v-6fbc6c02="" class="xq">
                        <p data-v-6fbc6c02="" class="title"> {{item.teacher_name}} <span data-v-6fbc6c02="" class="title_ms"></span></p>
                        <p data-v-6fbc6c02="" class="phone"> {{item.introduction}}</p>
                    </div>
                    <div data-v-6fbc6c02="" class="fouc">取消关注</div>
                </div>
            </div>
            <div class="van-list__finished-text">没有更多了</div>
            <div class="van-list__placeholder"></div>
        </div>
    </div>
</template>


<script>
import { NavBar } from 'vant';
import { myStudy } from "@/request/http"
export default {
    components: {
        [NavBar.name]: NavBar
    },
    data() {
        return {
            page: {
                limt: 10,
                page: 1,
                type: 2
            },
            list:[]
        }
    },
    methods: {

    },
    created() {
        myStudy(this.page).then(res => {
            console.log(res);
            this.list = res.list
        })
    }
}
</script>

<style lang="scss" scoped>
.box {
    height: 100px;
    background: #fff;
    width: 100%;
    font-size: 30px;
    // line-height: 100px;
    text-align: center;

    p {
        width: 400px;
        height: 100px;
        line-height: 96px;
        text-align: center;
        border-bottom: 4px solid red;
        margin: auto;
    }
}
.content{
    margin: 0.4rem 0.267rem;
}
.content .content_item {
    margin-bottom: 0.4rem;
    display: flex;
    // padding: 40px 0;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 0.133rem 0.267rem;
    border-radius: 0.133rem;
}
.content .content_item .avact {
    width: 1.067rem;
    height: 1.067rem;
}
.content .content_item .xq {
    margin-left: 0.4rem;
    line-height: .4rem;
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    flex: 3;
}
.content .content_item .xq .title {
    font-size: .4rem;
}
.content .content_item .xq .phone {
    color: #777;
}
.content .content_item .fouc {
    padding: 0.133rem 0.267rem;
    background: #fdefe5;
    color: #eb6100;
    border-radius: 0.267rem;
}
.van-list__error-text, .van-list__finished-text, .van-list__loading {
    color: #969799;
    font-size: .373rem;
    line-height: 1.333rem;
    text-align: center;
}
</style>

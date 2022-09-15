<template>
    <div class="da">
        <div data-v-8f0c8708="" class="hand"> 特色课 <i data-v-8f0c8708="" class="icon van-icon van-icon-search"
                @click="$router.push('/sousuo')">
                <!---->
            </i>
        </div>
        <van-dropdown-menu>
            <van-dropdown-item title="分类" >
            <template>
                <div>
                    111
                </div>
            </template>
            </van-dropdown-item>
            <van-dropdown-item title="排序" />
            <van-dropdown-item title="筛选" />
        </van-dropdown-menu>
        <!---->
        <div class="body">

            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="hh" v-for="(item, index) in list" :key="index" @click="zz(item)">
                    <p data-v-05b54b9c class="title">{{ item.title }}</p>
                    <p data-v-05b54b9c class="cource_xq">
                        <i data-v-05b54b9c="" class="icon van-icon van-icon-clock-o">
                            <!---->
                        </i>
                        <span>{{ item.end_play_date | filtime}}|共{{ item.sales_num }}课时</span>
                    </p>
                    <div data-v-05b54b9c class="cource_img">
                        <ul>
                            <li class="li">
                                <div class="image">
                                    <img :src="item.teachers_list[0].teacher_avatar" alt="" />
                                </div>

                                <div class="yyy">
                                    <span class="zz">{{ item.teachers_list[0].teacher_name }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div data-v-05b54b9c="" class="cource_bottom"><span data-v-05b54b9c=""
                            class="places">{{item.brows_num}}人已报名</span>
                        <span data-v-05b54b9c="" class="status" v-if="item.price==0">
                            <!-- {{item.price}} -->
                            免费
                        </span>
                        <span data-v-05b54b9c="" class="status" v-if="item.price!==0">
                            {{item.price}}
                        </span>
                    </div>
                </div>
            </van-list>

        </div>
    </div>
</template>

<script>
import { List } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { tu } from "../../request/http";
export default {
    components: {
        [List.name]: List,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
    },
    data() {
        return {

            limit: 5,
            page: 1,
            // course_type:1,

            list: [],
            loading: false,
            finished: false,
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        };
    },
    filters:{
        filtime(val){
            let time = new Date(val*1000).toLocaleString()
            return time
        }
    },
    methods: {
        layerList() {
            // 请求列表
            tu({ page: this.page, limit: this.limit }).then(res => {
                console.log(res);
                this.loading = false;
                if (res.data.data.list.length === 0) {
                    this.finished = true;
                    return;
                } else {
                    let arr1 = this.list;
                    const arr2 = res.data.data.list;
                    arr1 = arr1.concat(arr2);
                    this.list = arr1;

                    this.page++;
                }
            });
        },
        onLoad() {
            console.log('屏幕滚动')
            this.layerList()
        },
        zz(item) {
            console.log(item);
            sessionStorage.setItem('cc', JSON.stringify(item))
            this.$router.push('/bookss')
        }
    },

};
</script>

<style scoped>
.da {
    background-color: #f2f3f5;
}

.zz {
    text-align: center;
    color:  #777;
    font-size: 0.3rem;
}


.image {
    width: 0.8rem;
    height: 0.8rem;

    margin-right: 0.267rem;
    /* margin-top: 0.2rem */
    margin-left: 0.2rem;

}

li {
    position: relative;
}

.image img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

.yyy {
    position: absolute;
    top: 0.2rem;
    left: 1.3rem;
}

.cource_xq[data-v-05b54b9c] {
    color: #777;
    padding: 0 0.267rem;
    margin-top: -0.267rem;
}

.title[data-v-05b54b9c] {
    font-size: 0.453rem;
    padding: 0 0.267rem;
    padding-top: 0.267rem;
}

.status[data-v-05b54b9c] {
    color: #44a426;
    font-size: 0.427rem;
}

.places[data-v-05b54b9c] {
    color: #777;
}

.cource_bottom[data-v-05b54b9c] {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-pack: justify;
    /* -webkit-justify-content: space-between; */
    justify-content: space-between;
    padding: 0.667rem 0.267rem;
}

.hand {
    width: 100%;
    margin: 0 auto;
    line-height: 1rem;
    text-align: center;
    font-size: 0.5rem;
    background: #fff;
}

.icon[data-v-8f0c8708] {
    float: right;
    line-height: 1rem;
    font-weight: 600;
    padding-right: 0.267rem;
}

.van-dropdown-menu {
    /* -webkit-user-select: none; */
    user-select: none;
}

.van-dropdown-menu__bar {
    position: relative;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    height: 1.28rem;
    background-color: #fff;
    box-shadow: 0 0.053rem 0.32rem rgb(100 101 102 / 12%);
}

.van-dropdown-menu__item {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-flex: 1;
    /* -webkit-flex: 1; */
    flex: 1;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
    -webkit-box-pack: center;
    /* -webkit-justify-content: center; */
    justify-content: center;
    min-width: 0;
    cursor: pointer;
}

.van-dropdown-menu__title {
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    padding: 0 0.213rem;
    color: #323233;
    font-size: 0.4rem;
    line-height: 0.587rem;
}

.van-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.van-dropdown-menu__title:after {
    position: absolute;
    top: 50%;
    right: -0.107rem;
    margin-top: -0.133rem;
    border: 0.08rem solid;
    border-color: transparent transparent #dcdee0 #dcdee0;
    /* -webkit-transform: rotate(-45deg); */
    transform: rotate(-45deg);
    opacity: 0.8;
    content: "";
}

.body {
    width: 100%;
    margin-bottom: 2rem;
}

.hh {
    /* width: 100%; */
    margin-top: 0.4rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    background: #fff;
    padding: 0.02rem 0rem;
    border-radius: 0.2rem;
}

.van-icon {
    position: relative;
    font: normal normal normal 0.373rem/1 vant-icon;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
</style>
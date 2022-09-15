<template>
    <div class="bj">
        <form data-v-f8b3c75e="" action="/">
            <div data-v-f8b3c75e="" class="van-search van-search--show-action"><i data-v-f8b3c75e=""
                    class="icon van-icon van-icon-arrow-left" style="font-size: 17px;" @click="$router.push('/curriculum')">
                    <!---->
                </i>
                <div data-v-f8b3c75e="" class="van-search__content van-search__content--square">
                    <div data-v-f8b3c75e="" class="van-cell van-cell--borderless van-field">
                        <div class="van-field__left-icon"><i class="van-icon van-icon-search">
                                <!---->
                            </i></div>
                        <div class="van-cell__value van-cell__value--alone van-field__value">
                            <div class="van-field__body">
                                <input type="search" placeholder="请输入搜索关键词"
                                    class="van-field__control"
                                    v-model="keywords">
                                </div>
                        </div>
                    </div>
                </div>
                <div data-v-f8b3c75e="" role="button" tabindex="0" class="van-search__action">
                    <div data-v-f8b3c75e="" @click="layerList()">搜索</div>
                </div>
            </div>
        </form>
        <div data-v-f8b3c75e="" class="content" v-if="list.length==0">
            <div data-v-f8b3c75e="">
                <div data-v-f8b3c75e="" class="title">
                    <h3 data-v-f8b3c75e="">搜索历史</h3><van-icon name="delete" @click="qc()" />
                    
                </div>
                <div >
                    <span v-for="(item,index) in hh" :key="index" class="zy">
                    {{item}}
                </span>
                </div>
            </div>
        </div>


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
    </div>
</template>

<script>


import { tu } from "../request/http";
export default {
    data() {
        return {
            keywords:'',
            list:[],
            ss:[],
            hh:[]
        }
    },
    filters:{
        filtime(val){
            let time = new Date(val*1000).toLocaleString()
            return time
        }
    },
    methods:{
        qc(){
            this.hh=[]
        },
        layerList(){

            if(this.keywords !==""){
                this.ss.push(this.keywords)
                localStorage.setItem("sousuo",JSON.stringify(this.ss))
                this.hh=JSON.parse(localStorage.getItem("sousuo"))
                tu({keywords:this.keywords}).then(res=>{
                // console.log(res);
                this.list=res.data.data.list
                // console.log(this.list);
                
            })
            }else{
                this.list=[]
                alert("请输入")
                

            }
            
        },
        zz(item) {
            console.log(item);
            sessionStorage.setItem('cc', JSON.stringify(item))
            this.$router.push('/bookss')
        },
        
    },
    created() {
            this.hh=JSON.parse(localStorage.getItem("sousuo"))
            console.log(this.hh);
        },
};
</script>

<style scoped>
    .zy{
        padding: 0.1rem 0.2rem;
        background: #ffff;
        margin-left: 0.2rem;
        margin-top: 1rem
    }
    .icon-lajixiang:before {
    content: "\e659";
}
     .title .iconfont[data-v-f8b3c75e] {
    font-size: .507rem;
}
    .iconfont {
    font-family: iconfont!important;
    /* font-size: .427rem; */
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    /* -moz-osx-font-smoothing: grayscale; */
}
    h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
 .title[data-v-f8b3c75e] {
    width: 95%;
    margin: 0 auto;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
    -webkit-box-pack: justify;
    /* -webkit-justify-content: space-between; */
    justify-content: space-between;
}
form {
    display: block;
    margin-top: 0em;
}

.van-search--show-action {
    padding-right: 0;
}

.van-search,
.van-search__content {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
}

.van-search {
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
    box-sizing: border-box;
    padding: 0.267rem 0.32rem;
    background-color: #fff;
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

.van-search__content {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-left: 0.213rem;
    background-color: #f7f8fa;
    border-radius: 0.053rem;
}

.van-search,
.van-search__content {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
}

.van-search .van-cell {
    -webkit-box-flex: 1;
    /* -webkit-flex: 1; */
    flex: 1;
    padding: 0.133rem 0.213rem 0.133rem 0;
    background-color: transparent;
}

.van-cell {
    position: relative;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    box-sizing: border-box;
    width: 100%;
    /* padding: 0.267rem 0.427rem; */
    overflow: hidden;
    color: #323233;
    font-size: .373rem;
    line-height: .64rem;
    /* background-color: #fff; */
}

.van-field__left-icon {
    margin-right: 0.107rem;
}

.van-field__value {
    overflow: visible;
}

.van-cell__value--alone {
    color: #323233;
    text-align: left;
}

.van-cell__value {
    position: relative;
    /* overflow: hidden; */
    /* color: #969799; */
    /* text-align: right; */
    vertical-align: middle;
    word-wrap: break-word;
}

.van-cell__title,
.van-cell__value {
    -webkit-box-flex: 1;
    /* -webkit-flex: 1; */
    flex: 1;
}

.van-search__action {
    padding: 0 0.213rem;
    color: #323233;
    font-size: .373rem;
    line-height: .907rem;
    cursor: pointer;
    /* -webkit-user-select: none; */
    user-select: none;
}

.van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
}
.hh {
    /* width: 100%; */
    margin-top: 0.4rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    background: #fff;
    padding: 0.02rem 0rem;
    border-radius: 0.2rem;
}
.title {
    font-size: 0.453rem;
    padding: 0.1rem 0.267rem;
    /* padding-top: 0.267rem; */
}
.cource_xq[data-v-05b54b9c] {
    color: #777;
    padding: 0 0.267rem;
    margin-top: -0.267rem;
}
li {
    position: relative;
}
.image {
    width: 0.8rem;
    height: 0.8rem;

    margin-right: 0.267rem;
    /* margin-top: 0.2rem */
    margin-left: 0.2rem;

}
.yyy {
    position: absolute;
    top: 0.2rem;
    left: 1.3rem;
}
.zz {
    text-align: center;
    color: #777;
    font-size: 0.3rem;
}
.places[data-v-05b54b9c] {
    color: #777;
}
.status[data-v-05b54b9c] {
    color: #44a426;
    font-size: 0.427rem;
}
.image img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.cource_bottom{
    padding-left: 0.2rem;
    padding-bottom: 0.4rem
}
.bj{
    background: #f2f3f5;
}
</style>
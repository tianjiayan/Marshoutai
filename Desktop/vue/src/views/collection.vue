<template>
    <div class="collection">
        <header>
            
            <van-icon name="arrow-left" class="iconfont icon-fanhui1" @click="$router.back()"/>
            <p>我的收藏</p>
            
            <van-icon name="weapp-nav" class="iconfont icon-24gf-branches icon-fanhui1"/>
        </header>


        <div data-v-9992bdc4="" class="content">
            <div data-v-9992bdc4="" slot="item" class="item" v-for="(item,index) in list" :key="index">
                <div data-v-9992bdc4="" class="collect-icon"></div>
                <div data-v-9992bdc4="" class="top">
                    <p data-v-9992bdc4="" class="title">{{item.title}}</p>
                    <p data-v-9992bdc4="" class="time"><span data-v-9992bdc4="" class="duration"><img data-v-9992bdc4=""
                                src="data:image/png;base64,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"
                                alt="" class="clock"><span data-v-9992bdc4="">07月08日 00:00 ~ 07月09日
                                00:00</span></span><span data-v-9992bdc4="">共1课时</span></p> 
                    <ul data-v-9992bdc4="" class="teachers">
                        <li data-v-9992bdc4=""><img data-v-9992bdc4=""
                                :src="item.teachersAvatar"><span
                                data-v-9992bdc4="">{{item.teachers}}</span></li>
                    </ul>
                </div>
                <div data-v-9992bdc4="" class="bottom">
                    <div data-v-9992bdc4="" class="info">
                        <p data-v-9992bdc4="" class="sign">{{item.sales_num}}人已报名</p>
                        <div data-v-9992bdc4="" class="price">
                            <!---->
                            <p data-v-9992bdc4="" class="price-now"><i data-v-9992bdc4=""
                                    class="iconfont icon-jinbi"></i> 0 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {collections} from "@/request/http"
    export default{
        data() {
            return {
                page:{
                    page:1,
                    limit:10,
                    type:1
                },
                list:[]
            }
        },
        created() {
            collections(this.page).then(res=>{
                console.log(res);
                this.list = res.list
            })
        },
    }
</script>


<style lang="scss" scoped>
    .icon-fanhui1{
        font-size: 0.5rem
    }
header {
    background-color: #fff;
    height: 100px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cccc;

    i {
        color: blue;
    }


    p {
        font-size: 30px;

    }
}

.content {
    padding: 0.4rem 0.267rem;
}
.item {
    background-color: #fff;
    padding: 0.267rem;
    margin-bottom: 0.4rem;
    border-radius: 0.133rem;
    position: relative;
}
.item .collect-icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTQ0RDlCOUZCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTQ0RDlCQTBCNzRDMTFFOTlEMzU4OTdFRjlDNjMxNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNDREOUI5REI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNDREOUI5RUI3NEMxMUU5OUQzNTg5N0VGOUM2MzE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtJNOngAAAP1SURBVHja3JpbSFRRFIb3TJpmecvISosSDLLSFLtQUQRFEaWEZEWRRUEX8aELFEX4Ej3UU9hL9BT2UAk9FhURUdDFwtBuD/USkZCZdvFSXqZ/df4JkRnneM4+zh4XfDDMuf57r733WmsfX+9m5aX5QQZYSJLBS/AIfAZ/3D5gzPVAyP/jPBQ1DmwHlWC+vMOAYyKqDpzlb+3mlTAfqABnQHqI49PAQTAWHAc/vHAVL0xevCqMqKDFg91ghVdjwAs7APJsnJfIXh0fC8Kms7fs2lyw03Rhcr8jIGWY1xyK4LZRF5YPSh1cl83rfCYK8/PlshxcK2NtE5hoorBJFBbvcHlYA+aZKKyUruhmQT85aCGPujCZrk9peKlVYK1JwvZxmtcRCUkDJZggrAjs1+jSMs62uA33nFycwkV1DsfUepCjUZi49TmwDtSD1+AN+DSs2ShE2pLImydypstjdF7A1pyhomMSKDeCJtJIsV2gA3QihQmEEiaRdgnYyJ7I5rriV+ZaB9Me6dWH4ArEfRkobAI4z0UyTWcEMILWDV6AXRD33s8p+jCTwvQYFRUcQkvB6b5yX5qfuVOFjinWAPNxKK32sxYxU40eSwJbRdhiwycIJ7ZIBAXU6LN+EfZqFAp7J8LuKY9KYFGyXlArwlrBJa7gMe+C4Ca4I8KkGlvDP2LdJMSqxgLdEgyCW7lAJzD4jIsxQQGK2gBRTYPTlt/KKoNdUxpq6iMsSrKAsqCoUPlYGzgKbsWQMJn4qhgnDpm2BOsPNyQ0MdgtAxS1ET3VYDeD7uKYqzPULQPsobJQoiKVBr4pq6p710BhzXS/eqc1D7lBORdxU0KvFmWV+p5w3XJczOlUVhWq2RAXlDr/80gn2o3q24ZbTPHIeljvULqExSmNdXUXJnWZTJ3CpCaSZcgYW6BTWC5rCiZYvk5hhcqcIk+BTmHFBq1hs5WNPWu7wooMEiYZSJ4OYalglmGRR5EOYYUGhlTFOoTlGyiscLQKy4wUMNgRlmugMIlAJrsVlqzhRb6DCyw93FdWicyN+ZkMuxLmNPiVSPwneKCsTXPJn2qVtXm+F3xgncVJOtTDwNyVsDoHD+7mdTuU9f1Gw6CXugyWgGN2UpAQJh9zfhzqBJ+NL0xl9+I2WG7zoZLVVoPHoD3CubI3N1VZG44nwBSbjSYbKY3/bhDmC1O7ieYe8HaIjLWXLShJ4EplVbnabdy7j65ew4a7ShfrD+PacqwyKMptjw1cO2RslLCVpbV/gWesi9Rx3LgxCbSXgW104Rw2vhR0n4KL9J7/BaZwPeYb5sfOSczLMhizfR1An8bpPIlumcrZr421jtbBk004YX8FGABRbtJaWBD0xgAAAABJRU5ErkJggg==) no-repeat 50%;
    background-size: 0.48rem 0.48rem;
    width: 0.667rem;
    height: 0.667rem;
    float: right;
}
.item .top .title {
    font-size: .453rem;
    font-weight: 500;
    color: #000;
    margin-top: 0;
}
.item .top .time{
    margin-bottom: 0.533rem;
    font-size: .373rem;
    font-weight: 400;
    color: #666;
    margin-top: 0.533rem;
}
.item .top .teachers{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    margin-top: 0.267rem;
}
.item .top .time .duration[data-v-9992bdc4] {
    margin-right: 0.533rem;
    position: relative;
}
.item .top .teachers li img{
    width: 0.96rem;
    height: 0.96rem;
    border-radius: 50%;
    vertical-align: middle;
}
.item .top .teachers li span {
    font-size: .4rem;
    color: rgba(0,0,0,.45);
    vertical-align: middle;
    margin-left: 0.4rem;
    display: inline-block;
    width: 3.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item .bottom {
    border-top: 1px solid #f5f5f5;
    margin-top: 0;
    padding-top: 0.267rem;
}
.item .bottom .info .sign {
    font-size: .373rem;
    color: rgba(0,0,0,.45);
    display: inline-block;
    text-align: left;
}
.item .bottom .info .price {
    float: right;
}
.item .bottom .info .price .price-now {
    font-size: .4rem;
    color: #ee1f1f;
    display: inline-block;
}
.item .bottom .info .price .price-now .iconfont {
    color: orange;
}
</style>

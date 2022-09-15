<template>
    <div>
        <div class="top" data-v-7a25469a>

        
        <div data-v-7a25469a="" class="hander">
            <div data-v-7a25469a="">给我们留言</div>
            <div data-v-7a25469a="" @click="$router.go(-1)">关闭</div>
        </div>
        <div data-v-7a25469a="" class="xq">您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</div>
        <div data-v-7a25469a="" class="from">
            <ul data-v-7a25469a="">
                <li data-v-7a25469a="">
                    <div data-v-7a25469a="">手机</div>
                    <p data-v-7a25469a="">
                        <input data-v-7a25469a="" placeholder="请输入" type="text" name="" id="">
                    </p>
                </li>
                <li data-v-7a25469a="">
                    <div data-v-7a25469a="">
                     留言内容 
                     <span data-v-7a25469a="" style="color: red;">*</span>
                    </div>
                    <p data-v-7a25469a="">
                        <input data-v-7a25469a="" placeholder="请输入" type="text" name="" id="">
                    </p>
                </li>
            </ul>
        </div>
        <button data-v-7a25469a="" class="btn van-button van-button--info  van-button--normal">
            <div data-v-7a25469a="" class="van-button__content">
                <span data-v-7a25469a="" class="van-button__text">提交</span>
            </div>
        </button>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.hander[data-v-7a25469a] {
    width: 95%;
    margin: 0px auto;
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.427rem;
    line-height: 1.6rem;
    /* background: rgb(0, 122, 255); */
}
.top[data-v-7a25469a] {
    width: 100%;
    height: 1.6rem;
    background: rgb(0, 122, 255);
}
.xq[data-v-7a25469a] {
    width: 95%;
    margin: 0.4rem auto;
    height: 1.6rem;
    color: rgb(119, 119, 119);
}
.from ul li div[data-v-7a25469a] {
    padding-left: 0.267rem;
}
.from ul li input[data-v-7a25469a] {
    width: 100%;
    height: 0.933rem;
    border: none;
    padding-left: 0.267rem;
}
.btn[data-v-7a25469a] {
    width: 95%;
    margin-left: 0.267rem;
}
.van-button--normal {
    padding: 0 0.4rem;
    font-size: .373rem;
}
.van-button--info {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
}
.van-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 1.173rem;
    margin: 0;
    /* padding: 0; */
    /* font-size: .427rem; */
    line-height: 1.2;
    text-align: center;
    border-radius: 0.053rem;
    cursor: pointer;
    /* -webkit-transition: opacity .2s; */
    transition: opacity .2s;
    /* -webkit-appearance: none; */
}
.van-button:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    opacity: 0;
    content: " ";
}
</style>
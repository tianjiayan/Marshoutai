<template>
    <div class="body">
        <div class="logo">
            <img src="	http://xl.9yuecloud.com/assets/img/login.a4c656a9.png" alt="">
        </div>
        <div data-v-48c6e664="" class="form">
            <!-- <form data-v-48c6e664="" class="van-form"> -->
                <div data-v-48c6e664="" class="van-cell van-field">
                    <div class="van-cell__title van-field__label"><span>用户名</span></div>
                    <div class="van-cell__value van-field__value">
                        <div class="van-field__body"><input type="text" name="用户名" placeholder="用户名/手机号"
                                v-model="userInfo.mobile" class="van-field__control"></div>
                    </div>
                </div>
                <div data-v-48c6e664="" class="van-cell van-field">
                    <div class="van-cell__title van-field__label"><span>密码</span></div>
                    <div class="van-cell__value van-field__value">
                        <div class="van-field__body"><input type="password" v-model="userInfo.password" name="密码"
                                placeholder="密码" class="van-field__control"></div>
                    </div>
                </div>
                <div data-v-48c6e664="" class="others"><span data-v-48c6e664="" class="forget">找回密码</span><span
                        data-v-48c6e664="" class="login_CAPTCHA" @click="tz()">手机号注册/验证码登录</span></div>
                <div data-v-48c6e664="" class="btn"><button data-v-48c6e664="" type="submit"
                        class="van-button van-button--info van-button--normal van-button--block van-button--round"
                        style="color: rgb(255, 255, 255); background: rgb(253, 102, 20); border-color: rgb(253, 102, 20);">
                        <div data-v-48c6e664="" class="van-button__content"><span data-v-48c6e664=""
                                class="van-button__text" @click="login()">登录</span></div>
                    </button></div>
                <div data-v-48c6e664="" class="otherLogin"> 第三方登录 <div data-v-48c6e664="" class="txLogin">
                        <div data-v-48c6e664="" class="wxLogin"><img data-v-48c6e664=""
                                src="data:image/png;base64,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"><span
                                data-v-48c6e664="">微信登录</span></div>
                        <div data-v-48c6e664="" class="qqLogin"><img data-v-48c6e664=""
                                src="data:image/png;base64,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"
                                alt=""><span data-v-48c6e664="">QQ登录</span></div>
                    </div>
                </div>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
import { getLogin } from "../request/http";
export default {
    data() {
        return {
            userInfo: {
                mobile: "",
                password: "",
                type: "1",
                client: "1",
            },

        }
    },
    methods: {

        login() {
            getLogin(this.userInfo).then(res => {
                console.log(res);
                // this.loading = false;
                localStorage.setItem("adminToken",res.remember_token)
                this.$router.push("/wode")
            });
        },
        tz(){
            this.$router.push("/myzc")
        }
    }
}
</script>

<style scoped>
.logo {
    width: 70%;
    height: 1.36rem;
    margin: 1.6rem auto;
}

.body {
    background: #ffffff;
    height: 100vh;
}

img {
    width: 100%;
}

.form[data-v-48c6e664] {
    width: 83%;
    margin: 0 auto;
}

form {
    display: block;
    margin-top: 0em;
}

.van-cell {
    position: relative;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0.267rem 0.427rem;
    overflow: hidden;
    color: #323233;
    font-size: .373rem;
    line-height: .64rem;
    background-color: #fff;
}

.van-field__label {
    -webkit-box-flex: 0;
    /* -webkit-flex: none; */
    flex: none;
    box-sizing: border-box;
    width: 6.2em;
    margin-right: 0.32rem;
    color: #646566;
    text-align: left;
    word-wrap: break-word;
}

.van-field__body {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
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

.van-cell:after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0.427rem;
    bottom: 0;
    left: 0.427rem;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}

.others[data-v-48c6e664] {
    width: 90%;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    margin: 0.133rem auto;
    -webkit-box-pack: justify;
    /* -webkit-justify-content: space-between; */
    justify-content: space-between;
}

.others .forget[data-v-48c6e664],
.others .login_CAPTCHA[data-v-48c6e664] {
    font-size: .347rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
}

.others .forget[data-v-48c6e664],
.others .login_CAPTCHA[data-v-48c6e664] {
    font-size: .347rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
}

.btn[data-v-48c6e664] {
    margin-top: 1.333rem;
}

element.style {
    color: rgb(255, 255, 255);
    background: rgb(253, 102, 20);
    border-color: rgb(253, 102, 20);
}

.van-button--round {
    border-radius: 26.64rem;
}

.van-button--block {
    display: block;
    width: 100%;
}

.van-button--normal {
    padding: 0 0.4rem;
    font-size: .373rem;
}

.van-button--info {
    /* color: #fff; */
    /* background-color: #1989fa; */
    border: 1px solid #1989fa;
}

.van-button {
    position: relative;
    /* display: inline-block; */
    box-sizing: border-box;
    height: 1.173rem;
    margin: 0;
    /* padding: 0; */
    /* font-size: .427rem; */
    line-height: 1.2;
    text-align: center;
    /* border-radius: 0.053rem; */
    cursor: pointer;
    /* -webkit-transition: opacity .2s; */
    transition: opacity .2s;
    /* -webkit-appearance: none; */
}

.otherLogin[data-v-48c6e664] {
    width: 95%;
    margin: 0.533rem auto;
    text-align: center;
}

.otherLogin .txLogin[data-v-48c6e664] {
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    margin-top: 0.8rem;
}

.otherLogin .txLogin .wxLogin[data-v-48c6e664] {
    border-right: 1px solid #f1f1f1;
}

.otherLogin .txLogin .qqLogin[data-v-48c6e664],
.otherLogin .txLogin .wxLogin[data-v-48c6e664] {
    width: 50%;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-pack: center;
    /* -webkit-justify-content: center; */
    justify-content: center;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
}

.otherLogin .txLogin .wxLogin img[data-v-48c6e664] {
    width: 1.013rem;
    height: 0.747rem;
}

.otherLogin .txLogin .qqLogin img[data-v-48c6e664],
.otherLogin .txLogin .wxLogin img[data-v-48c6e664] {
    margin-right: 0.533rem;
}

.otherLogin .txLogin .qqLogin span[data-v-48c6e664],
.otherLogin .txLogin .wxLogin span[data-v-48c6e664] {
    font-size: .4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #8c8c8c;
}

.otherLogin .txLogin .qqLogin[data-v-48c6e664],
.otherLogin .txLogin .wxLogin[data-v-48c6e664] {
    width: 50%;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    display: flex;
    -webkit-box-pack: center;
    /* -webkit-justify-content: center; */
    justify-content: center;
    -webkit-box-align: center;
    /* -webkit-align-items: center; */
    align-items: center;
}

.otherLogin .txLogin .qqLogin img[data-v-48c6e664] {
    width: 0.907rem;
    height: 0.907rem;
}

.otherLogin .txLogin .qqLogin img[data-v-48c6e664],
.otherLogin .txLogin .wxLogin img[data-v-48c6e664] {
    margin-right: 0.533rem;
}

.otherLogin .txLogin .qqLogin span[data-v-48c6e664],
.otherLogin .txLogin .wxLogin span[data-v-48c6e664] {
    font-size: .4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #8c8c8c;
}
</style>
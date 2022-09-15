<template>
    <div>
        <div data-v-48c6e664="" class="form">
            <!-- < data-v-48c6e664="" class="van-form"> -->
                <div data-v-48c6e664="" class="van-cell van-field">
                    
                        <input type="text" name="手机号" placeholder="请输入手机号"
                                class="van-field__control" v-model="mobile">
                               <span  class="huoqu" @click="hq">获取验证码</span>
                    
                </div>
                <div data-v-48c6e664="" class="van-cell van-field">
                    <input type="password" name="密码" placeholder="请输入短信验证码"
                                class="van-field__control" v-model="sms_code">
                </div>
                <div data-v-48c6e664="" class="van-cell van-field">
                    <input type="password" name="密码" placeholder="请输入密码"
                                class="van-field__control" v-model="password">
                </div>
                
                <div data-v-48c6e664="" class="btn"><button data-v-48c6e664="" type="submit"
                        class="van-button van-button--info van-button--normal van-button--block van-button--round"
                        style="color: rgb(255, 255, 255); background: rgb(253, 102, 20); border-color: rgb(253, 102, 20);">
                        <div data-v-48c6e664="" class="van-button__content"><span data-v-48c6e664=""
                                class="van-button__text" @click="btn()">设置密码</span></div>
                    </button></div>
                
                
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
    import { getCode,getpassword } from "../request/http";
    export default {
        data() {
            return {
                mobile:"",
                sms_code:"",
                password:"",
                sms_type:"login"

            }
        },
        methods:{
            hq() {
            getCode({ sms_type: this.sms_type, mobile: this.mobile }).then(res => {
                console.log(res);
            })
        },
        btn(){
            getpassword({ sms_code: this.sms_code, mobile: this.mobile,password: this.password }).then(res => {
                console.log(res);
                if(res){
                    this.$router.push("/wode")
                }
            })

        }
        }
    }
</script>

<style scoped>
    
    .huoqu{
        font-size: 0.3rem;
        color: #eb613d;
    }
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
    width: 70%;
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
.others .forget[data-v-48c6e664], .others .login_CAPTCHA[data-v-48c6e664] {
    font-size: .347rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
}
.others .forget[data-v-48c6e664], .others .login_CAPTCHA[data-v-48c6e664] {
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
.otherLogin .txLogin .qqLogin[data-v-48c6e664], .otherLogin .txLogin .wxLogin[data-v-48c6e664] {
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
.otherLogin .txLogin .qqLogin img[data-v-48c6e664], .otherLogin .txLogin .wxLogin img[data-v-48c6e664] {
    margin-right: 0.533rem;
}
.otherLogin .txLogin .qqLogin span[data-v-48c6e664], .otherLogin .txLogin .wxLogin span[data-v-48c6e664] {
    font-size: .4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #8c8c8c;
}
.otherLogin .txLogin .qqLogin[data-v-48c6e664], .otherLogin .txLogin .wxLogin[data-v-48c6e664] {
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
.otherLogin .txLogin .qqLogin img[data-v-48c6e664], .otherLogin .txLogin .wxLogin img[data-v-48c6e664] {
    margin-right: 0.533rem;
}
.otherLogin .txLogin .qqLogin span[data-v-48c6e664], .otherLogin .txLogin .wxLogin span[data-v-48c6e664] {
    font-size: .4rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #8c8c8c;
}
</style>
<template>
    <div class="yy">
        <div class="biaoti">
            <p>练习</p>
        </div>
        <div class="body1">
            <div class="body">
                <ul v-for="(item,index) in arr" :key="index">
                    <li>
                        <div class="imgmain"><img :src="item.img" alt="" class="hh"></div>
                        
                        <p>{{item.name}}</p>
                    </li>
                </ul>
                
            </div>
        </div>
        <div class="footer">
            <p class="yjk">近期模考</p>
            <div data-v-18a0590b="" class="title2">
                <span data-v-18a0590b="" style="color: rgb(235, 97, 0);">
                    默认排序
                </span>
                <span data-v-18a0590b="">时间</span>
            </div>
                <img data-v-18a0590b="" src="http://xl.9yuecloud.com/assets/img/empty@2x.a2fa524d.png" alt=""/>
                <div data-v-18a0590b="">暂无安排，敬请期待</div>
        </div>
        <div class="yyds"></div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            arr: [
                { name: "考点专练", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAwCAYAAAC8NUKEAAAF0UlEQVRoQ9WZaWxUVRTH/+e+brRGBATFBdC0QGG6t0Lng4JIBgybBBswGjERSSARS6VAC0lBDDGGGBKjJgZC/ECkSpQuKbTgtFC60NJZWkrZxAQqLVDbWEvpMveYN+1ILR3mzXTKTN/HmfPu/f/e+b9z7r2P4M9XNiuxL19LFUy7ABZM2Gpqv/EN5s/vHUo2+R1LFotZqy6E1ut0HQnnrqYxYQeYx6o6GdRKhL01SeFfjgqYuOorWyF5JUjcJOZFAEIHCe8AY3/NnIjMwUB+k5lpxush48J6thBotwa33GfmdNO9xm8HWs4vYFSQCWG2TMn8CQFPaIABA60M3msuOLwPWVlSvccvYOIqLu8EIV0riAOWgQ6bggXWxOmVPoexW2tMbzqBd2nJxkMxxC1SykRzcuQfPoVRQcaHdO1gok3uZqS/sllY2jaY9ZFlDkif2SyuomEnmNKh8R0ZlJVrkOI9U1F4JbLI/r74JDN91uraAtZUtYZ0n1rJzPqZD/Wax5oZO0hwVwaAVA8z0p8COm5KnrHYp30m/mxDpiRs8+QdGSC8E1AWm/QRJT6BmWY0howPmpzG4D0eVa2+pQwTo0VKftfyauQJnyxnVJCxgZO2E4nNw8oI464E1lt6mnJ8ttCMLb2QAdD2YYEQ7rGCFebOZqMzkBGtZmpGngp8djMxf+6xtUhdteAuKQHvmJKnn3Q1zohUMxVknDIxg4lSh5MRBm6Dab25KTIXKWTzCUxcSZ3a2bcOBwRAh5S81HJ79mktIF63mT0jYuKnAD5z9RSd/c9EqrXuSMYa62uzf3NnHK/ZzN4QRXsmQ2hexg8llIFmAj4yNdfnIyXFpbUGjuE1mJhi606Cx2sth6Z/wFhqvnPxjLsgXrGZvWrh6TQAHjdE9FWt2wxaY5mnM7pjLa9lxt4QeUIG7FWLNe0QnVirCaB1ljsXCzzJiFdWzbFGy/vM9PUwq1Y7bLZl5tYrHlnLa5mJPWU6zCRWE7u//eY+azUTyTXm+XHFnlrLazAxJ83TiegQA3PJ3fMEoluqtcx3Lx4fjrW8BqMeiOhOno9SSMkmxgztT5f/tkllWW1bQ6m3QDyqZupLH9oVHFpfUdjmOOKJPmF5SSiymEEvErPTcq82RGJuskllda0h+rR2eG2RbveZ6CLTV8RIBss9FkNCnmMau+XAh5idW46BRib5oXVBfCHowd5dm1TXUW7BRBVVRwlWqggIVju1ZP6g1hBf0D8NRRVZdQLyJ2J+yHIM+ksKuaS2NO5/hxCuJWqP0A6TZQyI0T+ZTUxvOYa3nyoS3raW5Rgdlos8VTM12IYSBqaoVa6/ajVKgZTaN+LLtUtzP1IzTPSJ868T6DABzwychkGXiG1p5kWJ+Y7fIwtNEUHAQUjWk8ANMK0zlx875QB2X6a2OzTBJFRXB/a2YB+YNhJBDB6agSZIrLUsTnDszSm20BQOxsJeKUvrKnPrRhpEczWLzK+ZGqxI1SKTnT0jZmplxirrudzixyF8KB2aMhNbUK0euKn7lEdeDL4kBa2oNSQ2uIodif9dwswsKJ8WgsA6AGGuBfA1Jl5uWfTKBdex3o94NEwWi5ikqgMgWut0akIPGG0g+rGzt/uLy0v1jd6XqW3ER8JE51fPIcijAD0/1HAMqHY6ggD8bDUkqdnz6eUcJpuVmLAqdcO1BYAySOUtML4jJfCH7vbAP+tTdN0+peif3CnMjGM1z4UoPSUAhdtjCern6jYAeRzAu62GOdf9AWCgBqcwMfkV28C0ty+YfmfCEWZ5tHbJ3PP+BuHQMyTMrJwzUwJFkBVADyAO2ET39/cx6ebVNyO6/BWkzzxDXFG5VRsJciWk2GBdnnTJnwFc2uyF7LIxN1P0naMF4oHNsowBurggg4CykBQSUv73iXBUsAgmIQWVtUD5lWLyKg2QMg+ggFGh3olIhkyl6Jzy/cT4eDSD9BVcOku6X8rnCYE80rT28ltk9bBr078EKT6KxTKQyAAAAABJRU5ErkJggg==",  },
                { name: "套卷练习", img: "data:image/png;base64,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"},
                { name: "仿真模考", img: "data:image/png;base64,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"},
                { name: "错题练习", img: "data:image/png;base64,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"},
                { name: "测评记录", img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAyCAYAAAD845PIAAAFO0lEQVRoQ+2aaWxUVRiG3/fOVmwLYiwYtWqiBIEYIhaUKkoTnLZAW1DbKIoLUQlGEcQKSIyTALbQgmUpkhjikqAshshSiCB0QWhTWgy2QDVqNBESrSCz0GWW85k7VNLSO5KGHz1jPP9u7jLPM9+5537fOYcAkNuyItklyTkG8ZwIbxfCQULMczo3EZBAiMRvEG5WDu7YfudsL6ef+GCIIwFlFEwHkKCzxFXYgiKoEKcxjwUtG4oBvgmBLY6FLqETEYhsZMGpci/IgToLiUiYZIcAQsAhgIumgkUToI0Fpzdo/u5Iq4DFCAYrICpAZ8JYIV8nZAJg3btYcEprqZAombF9VOsO0KO6AsP85vLRMLiHwC1W0TK7n7aREuA7b6gtff/owotXwuefXr+ZwhmWUvkn9ZWC4GhHR+uju9M8bb2kmsvXgXg17qQEOGc3jLQtI+b80h0+t2VTsjPcfohkWgyp9dp2vyiwyAkMGjp+e2pBu3mYL9tscvqPxRR5B6DTUuqJ5vXnAQzWeUinSLMYxhcSET8o6QQmgxxgySxykY+fXLeMgiU6S/WNjeXMrls7MDGRHwPRNCmum0AqQ1BPRb/K2cfXpgxw8ElAMg3whrgzIy4okYPhED/fNea1sz1SDfeJkkSnJF3vZIg2MbMRvVuEoSh/2N/u3fXQQv8/tJb5k94qV6f770uZxaI96EgR5bSjs/Pqf0l/X+FyQcJtkc5wQuu+B+b6enS/nIbSG+12+ysUzASRGK1M4qeJCMw0amvEjrW77pn3O3ObyoYaYfmIYHb8eMQgFakW4nnmHV9dbIAL416oS0AJyjmt8f0LIAZpLhUB+D1gFowYS+C6WLwi0sFpjas1/x7xnFLqLV/A/1lVhqcjr650JOy2lQSyQLGcV2Feg85SEoTCszvHLdjaPTJTv10zzK4iFSIYZpml5zWs0jlSTV6/P70qwxO4Ej6nftUaw8Bca6lj+koJ0CBMemR32uxelW9OfWmRQS6ylMo9VqpzpC5S6N45bsHR7vDuIyVDXA7uJXGftVS91lIm809KbDP33D+/1jyYcrhosM3lWArgJQDWlW9ufUmniPVJbYZ50geFfWR0DjADkFGx2EgoTq0r+ZTETG0ErhFEgN2cWrfSHBa3EBhzjc/T4fYWETwdTVzdR0vvdhqqCCKTANriK501DSQCGkckFF5SMWFxY49sfErtihFKqVQI42cFhEbEAM9WPFjY/H/lq8PL0heGy91vYqUnIdHuujniUEnR4T/Yl8f047VOQFS4zQfXmdr0N6KzuFGprG9WDDcg80HcC8jA+Cp8YS5OmzNJTSTK9qYvaqL7iGeITVyHCMT8oPVjHPr60z+EI+EsTq4p+hDEi329W9/rZRuzDxf5AEnWFzL6lnhBfC0KflLGARj5L7ztppS6tD6saxNfWDjZHkhq+DVwXm661Z7ijBhlBB4DYFhm6dk1yzUuPdiuFDK/mvj24e7wWZWeO2A4D5Byl6VUltZSOK7a/3p4f2ZprzXfzOrlm0jMspaq1jdSAqn/0xfOaMzpveabWbV8A4k5MaSWadv9RBAQ4fj9GUsu53WmRHbNeykiUgWI5YDBrCp9pbqi0ATFQm/CgJra8fM73FVFw0lVSOIZxChumVm51A8ySdexr4vLC8jPAAICDAc42NzOE4M5SHfl0o0gX46110dz2R545t4lCLbRXb0sFQqfdO31sceTRA9Wwtzm0xhU8oL50eWkA++mGoYxi2S+kLfR3L0QB3YmvAgMGnJGKXypHGrTwYP48W8D8BADkrcd/AAAAABJRU5ErkJggg=="},
                { name: "习题收藏", img: "data:image/png;base64,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"},
            ],
         
        }
    },
    }
</script>

<style scoped>
    .yyds {
  width: 100%;
  height: 1.5rem;
  background: #f2f3f5;
  
}
    
.biaoti {
    max-width: 100%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: 0.427rem;
    text-align: center;
    border-bottom: 1px solid rgb(245, 245, 245);
    background: #ffff;
}
.body1{
    width: 100%;
    
    /* background-color: #fff */
}
.body{
    
    margin: 0.5rem  0.3rem;
    height: 5rem;
    border-radius: 0.2rem;
    background: #fff;
    /* margin-top: 0.5rem */
}
.imgmain{
    width: 1.067rem;
    height: 1.067rem;
    
    background-size: 100% 100%;
    border-radius: 50%;
    border:0.05rem solid #f2f3f5;
    text-align: center
    
}
.hh{
    
    width: 0.533rem;
    height: 0.533rem;
    margin-top: 0.24rem;
}
li{
    width: 2.347rem;
    height: 2.24rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.187rem;
    color: #595959;
    float: left;
}
ul{
    list-style: none;
    
}
.yjk{
    font-size: .427rem;
    text-align: left;
    padding: 0.267rem 0.267rem;
    padding-bottom: 0;
    color: #8c8c8c;
}
.footer{
    width: 100%;
    height: 6.4rem;
    background: #fff;
    text-align: center;
}
.title2{
    display: flex;
    justify-content: space-between;
}
 .title2 span[data-v-18a0590b] {
    padding: 0 0.267rem;
}
 img[data-v-18a0590b] {
    width: 30%;
    height: 3.733rem;
}

</style>
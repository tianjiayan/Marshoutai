<template>
    <div class="xgUser">
        <van-nav-bar title="修改个人信息" right-text="保存" left-arrow @click-left="$router.back()"
            @click-right="onClickRight" />

        <van-cell-group>
            <van-field v-model="nickname"/>
        </van-cell-group>
    </div>
</template>

<script>
import { NavBar, Field , CellGroup } from 'vant';
import { xgUser ,userInfo} from '@/request/http';
export default {
    components: {
        [NavBar.name]: NavBar,
        [Field.name]: Field,
        [CellGroup.name]:CellGroup
    },
    data() {
        return {
            nickname:''
        }
    },
    methods: {
        // 保存
        onClickRight() {
            xgUser({nickname:this.nickname}).then(res=>{
                console.log(res);
            })

            userInfo().then(res=>{
                console.log(res);
            })

            this.$router.go(-1)
        }
    },
    created(){
        this.nickname = this.$route.query.nickname
    }
}
</script>
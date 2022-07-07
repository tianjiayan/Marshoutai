<template>
  <div class="box">
    <p>火星</p>

    <el-form
      ref="ruleFormRef"
      :model="loginForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      size="large"
      status-icon
    >
      <el-form-item prop="userName">
        <el-input placeholder="请输入用户名" v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item prop="userPwd">
        <el-input placeholder="请输入密码" v-model="loginForm.userPwd" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlogin(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import user from '../../api/user'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
const ruleFormRef = ref()
const loginForm = reactive({
  userName: '',
  userPwd: ''
})
//校验
const rules = reactive({
  userName: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名不能为空'
    }
  ],
  userPwd: [
    {
      required: true,
      trigger: 'blur',
      message: '密码不能为空'
    }
  ]
})

const handlogin = async () => {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const response = await store.dispatch('user/login', loginForm)
      if (response.token) router.push('/')
    }
  })
}
</script>
<style lang="scss" scoped>
.box {
  width: 500px;
  height: 400px;
  box-shadow: 5px 5px 10px 5px #ddd;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-sizing: border-box;
  padding-right: 50px;
  p {
    text-align: center;
    font-size: 50px;
  }
}
.demo-ruleForm {
  width: 100%;
  .el-input {
    width: 100%;
  }
}
</style>

<template>
  <div>
    <el-card>
      <div class="query-form">
        <el-form ref="form" :inline="true">
          <el-form-item label="用户ID" prop="userId">
            <el-input placeholder="请输入用户ID" v-model="userId" />
          </el-form-item>
          <el-form-item label="用户名称" prop="userName">
            <el-input placeholder="请输入用户名称" />
          </el-form-item>
          <el-form-item label="状态" prop="state">
            <el-select>
              <el-option :value="0" label="所有"></el-option>
              <el-option :value="1" label="在职"></el-option>
              <el-option :value="2" label="离职"></el-option>
              <el-option :value="3" label="试用期"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleQuery">查询</el-button>
            <el-button @click="handleReset('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref, toRaw } from 'vue'
const { proxy } = getCurrentInstance()
const handleReset = (form) => {
  proxy.$refs[form].resetFields()
}
</script>

<style lang="scss" scoped>
.el-card {
  // height: 70px;
  margin-bottom: 15px;
}
</style>
<template>
  <div>
    <!-- <header-layout></header-layout> -->
    <!-- <table-layout></table-layout> -->
    <el-card>
      <div class="query-form">
        <el-form ref="form" :inline="true" :model="tableData">
          <el-form-item label="用户ID" prop="userId">
            <el-input v-model="tableData.userId" placeholder="请输入用户ID" />
          </el-form-item>
          <el-form-item label="用户名称" prop="userName">
            <el-input v-model="tableData.userName" placeholder="请输入用户名称" />
          </el-form-item>
          <el-form-item label="状态" prop="state">
            <el-select v-model="tableData.state">
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

    <el-card>
      <el-button type="primary">新增</el-button>
      <el-button type="danger">批量删除</el-button>

      <!-- 表格 -->
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="用户ID" property="userId">
          <!-- <template #default="scope">{{ scope.row.date }}</template> -->
        </el-table-column>
        <el-table-column property="userName" label="用户名" />
        <el-table-column
          property="userEmail"
          label="用户邮箱"
          show-overflow-tooltip
        />
        <el-table-column property="state" label="用户状态">
          <template #default="scope">
            <span v-if="scope.row.state == 3">试用期</span>
            <span v-if="scope.row.state == 2">离职</span>
            <span v-if="scope.row.state == 1">在职</span>
            <span v-if="scope.row.state == 0">所有</span>
          </template>
        </el-table-column>
        <el-table-column property="createTime" label="注册时间" />
        <el-table-column property="lastLoginTime" label="最后登录时间" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pageSize"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script setup>
import headerLayout from '@/components/headerLayout.vue'
// import tableLayout from '@/components/tableLayout.vue';
import { ref, getCurrentInstance, reactive, computed } from 'vue'
import user from '@/api/user.js'
const { proxy } = getCurrentInstance()
const tableData = ref([])
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref()
const getDate = async () => {
  const obj = {
    userID: '',
    userName: '',
    state: '',
    pageNum: pageNum.value,
    pageSize: pageSize.value
  }
  const response = await user.userList(obj)
  tableData.value = response.list
  total.value = response.page.total
  console.log(response)
}

getDate()
//查询
const handleQuery = () => {
  getDate()
}
// 重置查询表单
const handleReset = (form) => {
  proxy.$refs[form].resetFields()
}
//分页
const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
  pageSize.value = val
  getDate()
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  pageNum.value = val
  getDate()
}
//编辑
const handleEdit = (index, row) => {
  console.log(index, row)
}
//删除
const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<style scoped>
.el-table {
  margin: 15px 0;
}
.el-card {
  margin-bottom: 15px;
}
</style>

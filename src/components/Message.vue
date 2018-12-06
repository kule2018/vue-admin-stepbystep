<template>
  <div class="me-main">
    <!-- 表格 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        border
        header-row-class-name="table-bg"
      >
        <el-table-column prop="ID" label="序号" align="center" min-width="50"></el-table-column>
        <el-table-column prop="name" label="内容" align="center" min-width="670"></el-table-column>
        <el-table-column prop="num" label="发送时间" align="center" min-width="106"></el-table-column>
        <el-table-column prop="num" label="操作" align="center" min-width="70"></el-table-column>
        
      </el-table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    }
  }
}
</script>
<style lang="less">
  .me-main{
    padding: 20px;
    background-color: #fff;
     // 表格样式
  tr.table-bg,
  .el-table th {
    background-color: #f3f7fb;
  }
  }
</style>


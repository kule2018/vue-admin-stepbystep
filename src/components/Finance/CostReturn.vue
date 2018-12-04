<template>
  <div class="cr-main">
    <div class="rm-bottom">
      <div class="import">
        用户名ID
        <input type="text">
        返还时间
        <el-date-picker v-model="value1" type="date" placeholder="在此处输入初始时间"></el-date-picker>
        <el-date-picker v-model="value2" type="date" placeholder="在此处输入结束时间"></el-date-picker>
        <div class="com-name">公司名称
        <input type="text" placeholder="在此处输入公司名称" >
        <button>查询</button>
        </div>
      </div>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        border
        header-row-class-name="table-bg"
      >
        <el-table-column prop="ID" label="用户ID" align="center" min-width="94"></el-table-column>
        <el-table-column prop="name" label="公司名称" align="center" min-width="380"></el-table-column>
        <el-table-column prop="num" label="发送总数" align="center" min-width="116"></el-table-column>
        <el-table-column prop="fnum" label="失败返还数" align="center" min-width="132"></el-table-column>
        <el-table-column prop="date" label="日期" align="center" min-width="170"></el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 1,
      value2: 3,
      currentPage: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "上海希奥信息科技股份有限公司",
          num: 120,
          fnum: 12,
          ID: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 1
        },
        {
          date: "2016-05-04",
          num: 100,
          ID: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 1
        },
        {
          date: "2016-05-01",
          num: 100,
          ID: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: 1
        },
        {
          date: "2016-05-03",
          num: 100,
          ID: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: 1
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less">
@color: #00c1de;
.cr-main {
  background-color: #f2f7fb;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  .rm-bottom {
    background-color: #fff;
    padding: 20px;
    .import {
      margin-bottom: 20px;
      input {
        height: 36px;
        width: 190px;
        border-radius: 4px;
        border: 1px solid #d4d4d4;
        margin-right: 20px;
        box-sizing: border-box;
      }
      .com-name{
        display: inline-block;
      }
      button {
        width: 90px;
        height: 36px;
        background-color: @color;
        border-radius: 4px;
        color: #fff;
        // margin-left: 20px;
      }
    }
    tr.table-bg,
    .el-table th {
      background-color: #f3f7fb;
    }
    .el-pagination{
        margin-top: 10px;
      }
  }
}
@media screen and (max-width: 1450px){
  .cr-main .rm-bottom .import .com-name{
    margin-right: 150px;
    margin-top: 10px;
  }
}
</style>


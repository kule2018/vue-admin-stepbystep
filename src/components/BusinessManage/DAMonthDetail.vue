<template>
  <div class="mo-main">
    <div class="top">
      <el-breadcrumb separator=">>">
        <el-breadcrumb-item :to="{ path: '/DataAnalysis' }">数据统计分析</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/DataAnalysis' }">用量统计</el-breadcrumb-item>
        <el-breadcrumb-item>统计详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="time">
        发送时间
        <span>9</span>
        <select name id>
          <option value="volvo" selected="selected">10</option>
          <option value="saab">1</option>
          <option value="opel">13</option>
          <option value="audi">31</option>
        </select>
      </div>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        border
        header-row-class-name="table-bg"
      >
        <el-table-column prop="ID" label="统计时间" align="center"></el-table-column>
        <el-table-column prop="name" label="发送总数" align="center"></el-table-column>
        <el-table-column prop="num" label="成功数" align="center"></el-table-column>
        <el-table-column prop="num" label="失败数" align="center"></el-table-column>
        <el-table-column prop="fnum" label="发送成功率" align="center"></el-table-column>
        <el-table-column prop="date" label="失败分析" align="center"></el-table-column>
      </el-table>
      <p>本月发送总数： 发送成功数： 发送失败数： 发送成功率：</p>
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
    };
  }
};
</script>
<style lang="less">
@color: #00c1de;
.mo-main {
  // 表格样式
  tr.table-bg,
  .el-table th {
    background-color: #f3f7fb;
  }
  .content {
    background-color: #fff;
    margin-top: 20px;
    padding: 20px;
    .time {
      margin-bottom: 20px;
      line-height: 36px;
      span {
        display: inline-block;
        text-align: center;
        width: 30px;
        height: 36px;
        box-sizing: border-box;
        border: 1px solid #d4d4d4;
        border-radius: 4px 0 0 4px;
        transform: translateY(2px);
      }
      select {
        margin-left: -5px;
        border-radius: 0 4px 4px 0;
        vertical-align: middle;
        width: 73px;
        height: 36px;
        border: 1px solid #d4d4d4;
        box-sizing: border-box;
      }
    }
    // 分页
    .el-pagination {
      text-align: right;
    }
  }
}
</style>
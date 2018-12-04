<template>
  <div class="co-main">
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="已开票" name="first">
          <div class="first-content content">
            <div class="rm-bottom">
              <div class="import">
                发票抬头
                <input type="text" placeholder="在此处输入公司名称" >
                发票类型
                <select name id>
                  <option value="volvo" selected="selected">选择栏目</option>
                  <option value="saab">普通发票</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                发票单号
                <input type="text" placeholder="在此处输入发票的订单号" >
                <div class="time">
                  订单时段
                  <el-date-picker v-model="value1" type="date" placeholder="在此处输入初始时间"></el-date-picker>
                  <el-date-picker v-model="value1" type="date" placeholder="在此处输入结束时间"></el-date-picker>
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
                <el-table-column prop="ID" label="订单号" align="center"></el-table-column>
                <el-table-column prop="name" label="发票类型" align="center"></el-table-column>
                <el-table-column prop="num" label="发票抬头" align="center"></el-table-column>
                <el-table-column prop="num" label="订单日期" align="center"></el-table-column>
                <el-table-column prop="fnum" label="订单金额" align="center"></el-table-column>
                <el-table-column prop="date" label="开票状态" align="center"></el-table-column>
                <el-table-column prop="date" label="邮递状态" align="center"></el-table-column>
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
        </el-tab-pane>
        <el-tab-pane label="已邮寄" name="second">
          <div class="second-content contents">
            <div class="rm-bottom">
              <div class="import">
                发票抬头
                <input type="text" placeholder="在此处输入公司名称">
                发票类型
                <select name id>
                  <option value="volvo" selected="selected">选择栏目</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                发票单号
                <input type="text" placeholder="在此处输入发票的订单号" >
                <div class="time">
                  订单时段
                  <el-date-picker v-model="value1" type="date" placeholder="在此处输入初始时间"></el-date-picker>
                  <el-date-picker v-model="value1" type="date" placeholder="在此处输入结束时间"></el-date-picker>
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
                <el-table-column prop="ID" label="订单号" align="center"></el-table-column>
                <el-table-column prop="name" label="发票类型" align="center"></el-table-column>
                <el-table-column prop="num" label="发票抬头" align="center"></el-table-column>
                <el-table-column prop="num" label="订单日期" align="center"></el-table-column>
                <el-table-column prop="fnum" label="订单金额" align="center"></el-table-column>
                <el-table-column prop="date" label="开票状态" align="center"></el-table-column>
                <el-table-column prop="date" label="邮递状态" align="center"></el-table-column>
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 1,
      activeName: "first",
      currentPage: 2,
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
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    }
  }
};
</script>
<style lang="less">
@color: #00c1de;
.co-main {
  padding: 20px;
  background-color: #fff;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  // tab样式调整
  .el-tabs__nav.is-top {
    font-size: 14px;
    padding: 0 20px;
    color: #333;
  }
  .el-tabs__item.is-active {
    color: @color;
  }
  .el-tabs__item:hover {
    color: @color;
  }
  .el-tabs__active-bar {
    background-color: @color;
    padding: 0 20px;
  }
  .import {
    margin-bottom: 20px;
    padding-top: 5px;
    input,
    button,
    select {
      height: 36px;
      border: 1px solid #d4d4d4;
      border-radius: 4px;
      box-sizing: border-box;
    }
    input,
    select  {
      margin-right: 48px;
    }
    select ,input {
      width: 190px;
    }
    button {
      width: 90px;
      background-color: @color;
      color: #fff;
      margin-left: 20px;
    }
    .time{
      display: inline-block;
    }
  }
  // 表格样式
  tr.table-bg,
  .el-table th {
    background-color: #f3f7fb;
  }
  // 分页样式
  .el-pagination{
        margin-top: 10px;
      }
}
@media screen and (max-width: 1790px) {
  .co-main {
    .import {
      .time {
        margin-right: 200px;
        margin-top: 10px;
      }
    }
  }
}
</style>



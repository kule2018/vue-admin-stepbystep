<template>
  <div class="main">
    <div class="rm-top">
      <el-row>
        <el-col :span="8">
          <span>
            用户ID:3003240
            <strong>0</strong>条
          </span>
          <button>充值</button>
        </el-col>
        <el-col :span="8">
          <span>
            用户ID:3003241
            <strong>1293</strong>条
          </span>
          <button>充值</button>
        </el-col>
        <el-col :span="8">
          <span>
            用户ID:3003240
            <strong>13729</strong>条
          </span>
          <button>充值</button>
        </el-col>
      </el-row>
    </div>
    <div class="rm-bottom">
     <div class="import">
        用户名ID
      <input type="text">
      充值日期
      <el-date-picker v-model="value1" type="date" placeholder="请输入充值日期"></el-date-picker>
      <button>查询</button>
     </div>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        border
        header-row-class-name="table-bg"
      >
        <el-table-column prop="ID" label="用户ID" align="center"></el-table-column>
        <el-table-column prop="num" label="充值条数" align="center"></el-table-column>
        <el-table-column prop="date" label="日期" align="center"></el-table-column>
        <el-table-column prop="address" label="充值说明" align="center"></el-table-column>
        <el-table-column prop="status" label="充值状态" align="center"></el-table-column>
      </el-table>
    <!-- 分页 -->
    <el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[100, 200, 300, 400]"
				:page-size="100"
				layout="total, sizes, prev, pager, next, jumper"
				:total="400">
     </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1:0,
      currentPage:1,
      tableData: [
        {
          date: "2016-05-02",
          num: 100,
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
  methods:{
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
.main {
  background-color: #f2f7fb;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  .rm-top {
    height: 50px;
    background-color: #eaf1f7;
    line-height: 50px;
    padding-left: 20px;
    font-size: 14px;
    strong {
      font-weight: 400;
      color: #e55715;
    }
    button {
      background-color: @color;
      height: 30px;
      width: 60px;
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }
  }
  .rm-bottom {
    background-color: #fff;
    padding: 20px;
    .import{
      margin-bottom: 20px;
        input {
          height: 36px;
          width: 190px;
          border-radius: 4px;
          border: 1px solid #d4d4d4;
        }
        button {
          width: 90px;
          height: 36px;
          background-color: @color;
          border-radius: 4px;
          color: #fff;
        }
    }
      tr.table-bg,
      .el-table th {
        background-color: #f3f7fb;
      }
  }
}
</style>

<template>
  <div class="in-main">
    <div class="in-top">
      <p>说明 :</p>
      <p>1、开票条件：个人开发者可申请普通发票(一百元起)，企业开发者可申请普通发票(一百元起)或增值税专用发票(五百元起)</p>
      <p>2、申请过程中请注意保证信息、金额的正确性，因为信息填写错误导致的发票开具、邮寄出错，将不能重开</p>
      <p>3、申请纸质发票、如金额未满五百元，快递费用到付需自行承担</p>
    </div>
    <div class="in-bottom">
      <button>索取发票</button>
      <span>
        可开票订单数：
        <i>5</i>
      </span>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        stripe
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" min-width="36" align="center"></el-table-column>
        <el-table-column label="订单号" min-width="194" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="订单日期" min-width="280" align="center"></el-table-column>
        <el-table-column prop="address" label="订单金额" show-overflow-tooltip min-width="196" align="center"></el-table-column>
        <el-table-column prop="action" label="操作" show-overflow-tooltip min-width="185" align="center"></el-table-column>
      </el-table>
      <p>已开订单数
        <i>0 </i>单，待开发票金额
        <strong>￥0.00</strong>元
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods:{
    handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  }
};
</script>

<style lang="less">
@color: #00c1de;
.in-main {
  background-color: #F2F7FB;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  .in-top {
    padding: 20px;
    background-color: #f0f0f0;
  }
  .in-bottom {
    background-color: #fff;
    padding: 10px 20px;
    button {
      border: 1px solid @color;
      width: 90px;
      height: 36px;
      background-color: #fff;
      color: @color;
      border-radius: 4px;
      font-size: 14px;
      margin-bottom: 10px;
    }
    span {
      float: right;
      line-height: 36px;
      i {
        font-style: normal;
        color: @color;
      }
    }
    tr.table-bg,
    .el-table th {
      background-color: #f3f7fb;
    }
    .el-table .cell{
      padding: 0;
    }
    p {
      margin-top: 20px;
      i {
        color: @color;
        font-style: normal;
      }
      strong {
        color: #d85f5f;
      }
    }
  }
}
</style>


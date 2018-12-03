<template>
  <!-- <el-row>
  <el-col :span="24">-->
  <div class="main">
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="账户余额充值" name="first">
          <div class="first-content content">
            <p>
              <strong>当前余额</strong>
              <span>￥100</span>
            </p>
            <div>
              <strong>充值金额</strong>
              <input type="text" placeholder="请输入充值金额">
            </div>
            <div class="pay">
              <div class="top clearfix">
                <strong>支付方式</strong>
                <div class="button">
                  <img src="../../assets/main/微信支付.png" alt> 微信支付
                </div>
                <div class="button">
                  <img src="../../assets/main/支付宝.png" alt> 支付宝支付
                </div>
              </div>
              <div class="button3">在线支付</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="在线购买" name="second">
          <div class="second-content contents">
            <div class="number">
              <span>充值金额</span>
              <input type="text" placeholder="请输入充值金额">
            </div>
            <el-table
              :data="tableData"
              stripe
              style="width: 100%"
              border
              header-row-class-name="table-bg"
            >
              <el-table-column prop="date" label="充值金额" align="center"></el-table-column>
              <el-table-column prop="name" label="单价" align="center"></el-table-column>
              <el-table-column prop="address" label="充值条数" align="center"></el-table-column>
            </el-table>
            <div class="pay">
              <div class="top clearfix">
                <strong>支付方式</strong>
                <div class="button">
                  <img src="../../assets/main/微信支付.png" alt> 微信支付
                </div>
                <div class="button">
                  <img src="../../assets/main/支付宝.png" alt> 支付宝支付
                </div>
                <div class="button">账户余额充值</div>
              </div>
              <div class="button3">在线支付</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="套餐购买" name="third">
          <div class="third-content content">
            <div class="combo-buy">
              <h4>选择购买的套餐</h4>
              <div class="combo">
                <ul class="clearfix">
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                  <li>
                    <p>短信10000条</p>
                    <p>标准包</p>
                  </li>
                </ul>
              </div>
              <div class="combo-number">
                <p>选择套餐包数量</p>
                <div class="input-number">
                  <span>-</span>
                  <input type="text">
                  <span>+</span>
                </div>
                  
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="子账号充值" name="fourth">子账号充值</el-tab-pane>
        <el-tab-pane label="线下充值" name="fifth">线下充值</el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <!-- </el-col>
  </el-row>-->
</template>
<script>
export default {
  data() {
    return {
      activeName: "third",
      num1: 1,
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
     handleChange(value) {
        console.log(value);
      }
  }
};
</script>
<style lang="less">
@color: #00c1de;
.main {
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
  // 账户余额充值
  .first-content {
    p {
      margin-top: 20px;
      span {
        color: #d3602e;
        font-size: 18px;
      }
    }
    > div {
      margin-top: 20px;
    }
    input {
      height: 36px;
      border-radius: 4px;
      border: 1px solid #d4d4d4;
      text-indent: 0.5em;
    }
    strong {
      font-weight: normal;
      padding-right: 20px;
    }
  }
  .pay {
    strong {
      font-weight: normal;
      float: left;
    }
    .button {
      border: 1px solid #d4d4d4;
      background-color: #fff;
      height: 60px;
      width: 210px;
      border-radius: 4px;
      float: left;
      text-align: center;
      line-height: 60px;
      margin-right: 10px;
      &:hover {
        border: 1px solid @color;
      }
    }
    .button3 {
      // float: left;
      width: 90px;
      height: 36px;
      border-radius: 4px;
      text-align: center;
      line-height: 36px;
      background-color: @color;
      color: #fff;
      margin-left: 84px;
      margin-top: 20px;
    }
  }
  // 在线购买
  .second-content {
    .number {
      margin-bottom: 20px;
      margin-top: 20px;
      input {
        width: 190px;
        height: 36px;
        text-indent: 0.5em;
        border: 1px solid #d4d4d4;
        border-radius: 4px;
      }
    }
    tr.table-bg,
    .el-table th {
      background-color: #f3f7fb;
    }
    .pay {
      margin-top: 20px;
      strong {
        line-height: 60px;
        padding-right: 20px;
      }
    }
  }
  // 套餐购买
  .third-content {
    li {
      border: 1px solid #d4d4d4;
      width: 200px;
      height: 80px;
      float: left;
      margin-right: 10px;
      margin-top: 10px;
      text-align: center;
    }
    .el-input-number .el-input__inner{
      padding: 0 60px;
      border: 1px solid #000;
    }
    .input-number{
      input{
        width: 70px;
        height: 36px;
        text-align: center;
      }
      span{
        position: absolute;
        height: 36px;
        width: 36px;
        background-color: @color;
        text-align: center;
        line-height: 36px;
      }
    }
  }
}
</style>



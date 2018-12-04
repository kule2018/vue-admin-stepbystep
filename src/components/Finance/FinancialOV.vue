<template>
  <div>
    <div class="account">
      <el-row :gutter="80">
        <el-col :span="8">
          <!-- 基本账户 -->
          <div class="acc acc1">
            <div class="title">
              <h2>基本账户</h2>
            </div>
            <div class="detail">
              <p>
                账户金额：
                <span>124555555</span>元
              </p>
              <p>
                赠送金额：
                <span>12</span>元
              </p>
            </div>
            <div class="recharge">
              <span>充值</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <!-- 套餐账户 -->
          <div class="acc acc2">
            <div class="title">
              <h2>充值账户</h2>
            </div>
            <div class="detail">
              <p>
                账户金额：
                <span>124555555</span>元
              </p>
              <p>
                赠送金额：
                <span>12</span>元
              </p>
            </div>
            <div class="recharge">
              <span>充值</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <!-- 积分商城 -->
          <div class="acc acc3">
            <div class="title">
              <h2>积分商城</h2>
            </div>
            <div class="detail">
              <p>
                账户金额：
                <span>124555555</span>元
              </p>
            </div>
            <div class="recharge">
              <span>充值</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <el-row>
        <el-col :span="24">
          <div class="count">余额预警提示</div>
        </el-col>
      </el-row>
      <div class="switch">
        余额预警提示
        <button @click="changeSwitch" :class="switchName">
          <span ></span>
        </button>
      </div>
      <div class="input">
        提示电话1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text">
        <span>删除</span>
      </div>
      <div class="input">
        提示电话2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text">
        <span>删除</span>
        <i>|</i>
        <span>添加</span>
      </div>
      <div class="input">
        报警阀值 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text">
      </div>
      <div class="input">
        报警次数 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchName: "open",
      value: true
    };
  },
  methods: {
    // 切换预警开关
    changeSwitch() {
      if (this.value) {
        this.switchName = "close";
        this.value = !this.value;
      } else {
        this.switchName = "open";
        this.value = !this.value;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@color: #00c1de;
.account {
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  .acc {
    float: left;
    width: 100%;
    height: 190px;
    border: 1px solid #ebebeb;
    padding: 30px 0 0 35px;
    box-sizing: border-box;
    position: relative;
    color: #858585;
    // background: url(../../assets/main/账户余额.png) no-repeat right bottom;
    background-size: 30%;
    .detail {
      margin-top: 25px;
    }
    h2 {
      font-size: 18px;
    }
    p,
    span {
      font-size: 14px;
    }
  }
  .acc1{
    background: url(../../assets/main/账户余额.png) no-repeat 95% bottom;
    background-size: 25%;
  }
  .acc2{
    background: url(../../assets/main/邮件余额.png) no-repeat 102% 75%;
    background-size: 30%;

  }
  .acc3{
    background: url(../../assets/main/剩余积分.png) no-repeat 100% 90%;
    background-size: 30%;

  }
  .recharge {
    background-color: @color;
    width: 100%;
    height: 36px;
    position: absolute;
    left: -1px;
    bottom: 0;
    // padding-left: 30px;
    border: 1px solid @color;
    span {
      padding-left: 30px;
    }
    span,
    i {
      color: #fff;
      font-size: 18px;
      line-height: 30px;
    }
  }
}
.bottom {
  margin-top: 30px;
  background-color: #fff;
  padding-left: 20px;
  padding-top: 22px;
  padding-bottom: 22px;
  .switch {
    line-height: 38px;
    margin-top: 20px;
  }
  // 开关样式
  button {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    vertical-align: middle;
    background-color: #fff;
    transition: all 1s;
    span {
      display: block;
      width: 28px;
      height: 28px;
      transition: all 1s;
      border-radius: 14px;
      background-color: @color;
    }
  }
  button.open {
    border: 1px solid #d4d4d4;
    background-color: #fff;
    span {
      // width: 26px;
      // height: 26px;
      // box-sizing: border-box;
      background-color: @color;
      margin-top: -1px;
      margin-left: -1px;
    }
  }
  button.close {
    border: 1px solid @color;
    background-color: @color;
    span {
      box-sizing: border-box;
      background-color: #fff;
      margin-top: -1px;
      transform: translateX(42px);
      border: 1px solid #ccc;
    }
  }
  .input {
    margin-top: 10px;
    input {
      height: 38px;
      width: 400px;
      border-radius: 4px;
      border: 1px solid #d4d4d4;
      font-size: 18px;
      text-indent: 0.5em;
      margin-right: 10px;
    }
  }
  span {
    color: @color;
    font-size: 12px;
    cursor: pointer;
  }
  i {
    font-style: normal;
    color: #ebebeb;
    font-size: 12px;
  }
}

</style>

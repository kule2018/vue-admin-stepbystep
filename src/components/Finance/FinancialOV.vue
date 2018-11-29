<template>
  <div>
    <div class="account">
        <el-row :gutter="100">
          <el-col :span="8">
            <!-- 基本账户 -->
            <li>
              <div class="title">
                <h2>基本账户</h2>
              </div>
              <div class="detail">
                <p>
                  账户金额：<span>124555555</span>元
                </p>
                <p>
                  赠送金额：<span>12</span>元
                </p>
              </div>
              <div class="recharge">
                <span>充值</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </li>
          </el-col>
          <el-col :span="8">
            <!-- 套餐账户 -->
            <li>
              <div class="title">
                <h2>充值账户</h2>
              </div>
              <div class="detail">
                <p>
                  账户金额：<span>124555555</span>元
                </p>
                <p>
                  赠送金额：<span>12</span>元
                </p>
              </div>
              <div class="recharge">
                <span>充值</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </li>
          </el-col>
          <el-col :span="8">
            <!-- 积分商城 -->
            <li>
              <div class="title">
                <h2>积分商城</h2>
              </div>
              <div class="detail">
                <p>
                  账户金额：<span>124555555</span>元
                </p>
              </div>
              <div class="recharge">
                <span>充值</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </li>
          </el-col>
        </el-row>
     
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@color: #00c1de;
.account {
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  li {
    float: left;
    width: 100%;
    height: 190px;
    border: 1px solid #ebebeb;
    padding: 30px 0 0 35px;
    box-sizing: border-box;
    position: relative;
    color: #858585;
    .detail{
      margin-top: 25px;
    }
    h2{
      font-size: 18px;
    }
    p,span{
      font-size: 14px;
    }
  }
  li:nth-child(1) {
    h2 {
      color: @color;
    } 
    p span {
      color: @color;
    } 
  }
  li:nth-child(2){
    h2{
      color: #6EAD61;
    }
  }
  li:nth-child(3){
    h2,p span{
      color: #D3602E;
    }
  }
  .recharge {
    background-color: @color;
    width: 100%;
    height: 36px;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-left: 30px;
    box-sizing: border-box;
    span,
    i {
      color: #fff;
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>

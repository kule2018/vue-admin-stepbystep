<template>
  <div id="temS">
    <div class="temS-t bg-purple">
      <div class="count">信息编辑框</div>
      <div class="temS-c">
        <div class="t-c-l">模板选择</div>
        <div class="t-c-a">+</div>
        <div class="t-c-r">已输入【
          <span>100</span>】字,短信计费【
          <span>3</span>】条
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>
      <div class="t-check">
        <div class="t-check-a">
          <el-checkbox v-model="checked">企业签名</el-checkbox>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="t-check-b">
          <div class="t-checkbox">
            <el-checkbox v-model="checked">定时发送</el-checkbox>
          </div>

          <div class="t-input">
            <el-input v-model="input" placeholder="输入天数"></el-input>
          </div>
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <div class="t-back">
          <el-checkbox v-model="checked">回T退订</el-checkbox>
        </div>
      </div>
    </div>
    <div class="temS-b bg-purple">
      <div class="count">通讯录编辑框</div>
      <div class="tem-up">
        <span>导入文件</span>
        <input type="file" value><span>（仅支持TXT、CSV类文件）</span>
        <ul>
          <li>合计(0)</li>
          <li>电信(0)</li>
          <li>联通(0)</li>
          <li>移动(0)</li>
        </ul>
      </div>
      <div class="tem-select">
        <div class="bianhao">编号</div>
        <ul>
          <li>
            <select name id>
              <option value="volvo" selected="selected">选择栏目</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </li>
          <li>
            <select name id>
              <option value="volvo" selected="selected">选择栏目</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </li>
          <li>
            <select name id>
              <option value="volvo" selected="selected">选择栏目</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </li>
          <li>
            <select name id>
              <option value="volvo" selected="selected">选择栏目</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </li>
          <li>
            <select name id>
              <option value="volvo" selected="selected">选择栏目</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </li>
        </ul>
      </div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        :header-cell-style="{display:'none'}"
        style="width: 100%"
      >
        <el-table-column type="index" label="编号" align="center" width="50"></el-table-column>
        <el-table-column property="date" align="center"></el-table-column>
        <el-table-column property="name" align="center"></el-table-column>
        <el-table-column property="address" align="center"></el-table-column>
        <el-table-column property="address" align="center"></el-table-column>
        <el-table-column property="address" align="center"></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
      </div>
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
      ],
      currentRow: null
    };
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>

<style lang="less" scoped="scoped">
@color: #00c1de;
#temS {
  height: 100%;
  width: 100%;
  // 信息编辑
  .temS-t {
    height: 383px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    .temS-c {
      height: 40px;
      margin-top: 20px;
      margin-bottom: 10px;
      .t-c-l {
        float: left;
        width: 90px;
        height: 36px;
        border-radius: 4px;
        color: #59bfda;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #59bfda;
      }
      .t-c-a {
        float: left;
        margin-left: 10px;
        color: #ffffff;
        text-align: center;
        line-height: 36px;
        height: 36px;
        width: 36px;
        border-radius: 4px;
        font-size: 18px;
        border: 1px solid #59bfda;
				background-color: #59bfda;
				cursor: pointer;
      }
      .t-c-r {
        float: right;
        margin-top: 10px;
        span {
          color: #da7a50;
        }
      }
    }
    textarea {
      height: 200px;
      width: 100%;
			border: 1px solid #d4d4d4;
			box-sizing: border-box;
    }
    // 企业签名定时发送
    .t-check {
      width: 100%;
      height: 36px;
      margin-top: 10px;
      // input框去padding
      // .el-input__inner{
      // 	padding: 0;
      // }
      .t-check-a {
        width: 40%;
        float: left;
        .el-select {
          width: 60%;
        }
      }
      .t-check-b {
        float: left;
        width: 50%;
        .t-checkbox {
          float: left;
          line-height: 36px;
        }
        .t-input {
          float: left;
          .el-input {
            width: 90px;
						height: 36px;
						margin-right: 10px;
          }
        }
      }
      .t-back {
        float: left;
        width: 10%;
        line-height: 40px;
      }
    }
  }
  // 通讯录编辑
  .temS-b {
    // height: 383px;
    margin-top: 20px;
    padding: 20px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    .tem-up {
      height: 24px;
      margin: 10px 0 10px 0;
      span {
        float: left;
      }
      input {
				float: left;
				background-color: @color;
      }
      ul {
        height: 100%;
        li {
          float: right;
          margin-left: 30px;
        }
        li:first-child {
          color: #da7a50;
        }
      }
    }
    .tem-select {
      height: 48px;
      background-color: #f3f7fb;
      padding-left: 50px;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      position: relative;
      .bianhao {
        position: absolute;
        top: 50%;
        left: 25px;
        font-size: 14px;
        margin-left: -14px;
        margin-top: -10px;
      }
      ul {
        width: 100%;
        li {
          float: left;
          text-align: center;
          line-height: 48px;
          width: 20%;
        }
      }
    }
  }
}
</style>

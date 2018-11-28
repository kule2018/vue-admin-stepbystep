<template>
	<div id="temS">
		<div class="temS-t bg-purple">
			<div class="count">
				信息编辑框
			</div>
			<div class="temS-c">
				<div class="t-c-l">
					模板选择
				</div>
				<div class="t-c-a">
					+
				</div>
				<div class="t-c-r">
					已输入【<span>100</span>】字,短信计费【<span>3</span>】条
				</div>
			</div>
		</div>
		<div class="temS-b bg-purple">
			<div class="count">
				通讯录编辑框
			</div>
			<div class="tem-up">
				<span>导入文件</span>
				<input type="file" value="" />
				<ul>
				<li>合计(0)</li>
				<li>电信(0)</li>
				<li>联通(0)</li>
				<li>移动(0)</li>
				</ul>
			</div>
			<div class="tem-select">
				<div class="bianhao">
					编号
				</div>
				<ul>
					<li>
						<select name="" id="">
							  <option value ="volvo" selected="selected">选择栏目</option>
								<option value ="saab">Saab</option>
								<option value="opel">Opel</option>
								<option value="audi">Audi</option>
						</select>
					</li>
					<li>
						<select name="" id="">
							<option value ="volvo" selected="selected">选择栏目</option>
							<option value ="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>

					</li>
					<li>
						<select name="" id="">
							<option value ="volvo" selected="selected">选择栏目</option>
							<option value ="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>

					</li>
					<li>
						<select name="" id="">
							<option value ="volvo" selected="selected">选择栏目</option>
							<option value ="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>

					</li>
					<li>
						<select name="" id="">
							<option value ="volvo" selected="selected">选择栏目</option>
							<option value ="saab">Saab</option>
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
			style="width: 100%">
			<el-table-column
			  type="index"
			  label="编号"
			  align="center"

			  width="50">
			</el-table-column>
			<el-table-column
			  property="date"
			 
			  align="center"

			  >
			</el-table-column>
			<el-table-column
			  property="name"
			 
			  align="center"

			  >
			</el-table-column>
			<el-table-column
			  property="address"
			  align="center"

			  >
			</el-table-column>
			<el-table-column
			  property="address"
			  align="center"

			  >
			</el-table-column>
			<el-table-column
			  property="address"
			  align="center"

			  >
			</el-table-column>
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
	
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
					color: #59BFDA;
					line-height: 36px;
					text-align: center;
					font-size: 14px;
					border: 1px solid #59BFDA;
				}
				.t-c-a {
					float: left;
					margin-left: 10px;
					color: #FFFFFF;
					text-align: center;
					line-height: 36px;
					height: 36px;
					width: 36px;
					border-radius: 4px;
					font-size: 18px;
					border: 1px solid #59BFDA;
					background-color: #59BFDA;
				}
				.t-c-r {
					float: right;
					margin-top: 10px;
					span {
						color: #DA7A50;
					}
				}
			}
		}
		// 通讯录编辑
		.temS-b {
			height: 383px;
			margin-top: 20px;
			padding: 20px;
			box-sizing: border-box;
			-moz-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			.tem-up {
				height: 24px;
				margin:10px 0 10px 0;
				span {
					float: left;
				}
				input {
					float: left;
				}
				ul {
					height: 100%;
					li {
						float: right;
						margin-left: 30px;
					}
					li:first-child {
						color: #DA7A50;
					}
				}
			}
			.tem-select {
				height: 48px;
				background-color: #f3f7fb;
				padding-left:50px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				position:relative;
				.bianhao{
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

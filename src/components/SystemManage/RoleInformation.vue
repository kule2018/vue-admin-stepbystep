<template>
	<div id="roleInformation">
		<div class="ri-top bg-purple">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="角色列表" name="first">
					<div class="ri-sign">
						<div class="ri-s-a">
							<span>角色名称</span>
							<el-input v-model="input" placeholder="请输入角色名称"></el-input>
						</div>
						
						
						
						<div class="ri-s-e">
							<el-button>查询</el-button>
						</div>
						
					</div>
					<div class="ri-table">
						<el-table
						ref="multipleTable"
						:data="tableData3"
						tooltip-effect="dark"
						border
						style="width: 100%"
						:header-cell-style="{background:'rgba(243,247,251,1)',fontSize:'14px'}"
						>
						<el-table-column
						prop="phone"
						align="center"
						min-width="10%"
						label="角色名称"
						>
						</el-table-column>
						
						
						<el-table-column
						prop="data"
						align="center"
						min-width="20%"
						label="角色权限"
						>
						</el-table-column>
						<el-table-column
						prop="name"
						label="创建时间"
						align="center"
						min-width="10%"
						>
						<!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
						</el-table-column>
					</el-table>
					<div class="ri-table-bottom">
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage4"
							:page-sizes="[100, 200, 300, 400]"
							:page-size="100"
							layout="total, sizes, prev, pager, next, jumper"
							:total="400">
						</el-pagination>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="用户列表" name="second">
					<div class="ri-sign">
						<div class="ri-s-a">
							<span>角色名称</span>
							<el-input v-model="input" placeholder="请输入角色名称"></el-input>
						</div>
						<div class="ri-s-b">
							<span>姓名</span>
							<el-input v-model="input" placeholder="请输入姓名"></el-input>
						</div>
						<div class="ri-s-c">
							<span>电话</span>
							<el-input v-model="input" placeholder="请输入电话"></el-input>
						</div>
						<div class="ri-s-d">
							<span>有效状态</span>
							 <el-select v-model="value" placeholder="请选择">
								<el-option
								  v-for="item in options"
								  :key="item.value"
								  :label="item.label"
								  :value="item.value">
								</el-option>
							  </el-select>
						</div>
						<div class="ri-s-e">
							<el-button>查询</el-button>
						</div>
						
					</div>
					<div class="ri-table">
						<el-button>新增用户</el-button>
						 <el-table
						ref="multipleTable"
						:data="tableData3"
						tooltip-effect="dark"
						border
						style="width: 100%"
						:header-cell-style="{background:'rgba(243,247,251,1)',fontSize:'14px'}"
					    >
						<el-table-column
						  prop="name"
						  label="姓名"
						  align="center"
						  min-width="10%"
						 >
						 <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
						</el-table-column>
						<el-table-column
						  prop="phone"
						  align="center"
						  min-width="10%"
						  label="电话"
						  >
						</el-table-column>
						<el-table-column
						prop="phone"
						label="角色名称"
						align="center"
						  min-width="10%"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="创建日期"
						>
						</el-table-column>
						<el-table-column
						prop="data"
						align="center"
						  min-width="20%"
						label="有效状态"
						>
						</el-table-column>
						
						<el-table-column
						prop="operation"
						align="center"
						min-width="20%"

						label="操作"
						>
						<template slot-scope="scope">
							<el-button  size="small">禁用</el-button>
							
							<el-button  size="small">删除</el-button>
						</template>
						</el-table-column>
					  </el-table>
					  <div class="ri-table-bottom">
						  <el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage4"
							:page-sizes="[100, 200, 300, 400]"
							:page-size="100"
							layout="total, sizes, prev, pager, next, jumper"
							:total="400">
						  </el-pagination>
						  </div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="子账号列表" name="thrid">
					<div class="ri-sign">
						<div class="ri-s-a">
							<span>用户ID</span>
							<el-input v-model="input" placeholder="请输入用户ID"></el-input>
						</div>
						<div class="ri-s-b">
							<span>公司名称</span>
							<el-input v-model="input" placeholder="请输入公司名称"></el-input>
						</div>
						<div class="ri-s-c">
							<span>签名</span>
							<el-input v-model="input" placeholder="请输入签名"></el-input>
						</div>	
						<div class="ri-s-c">
							<span>联系人</span>
							<el-input v-model="input" placeholder="请输入联系人"></el-input>
						</div>
						<div class="ri-s-c">
							<span>联系号码</span>
							<el-input v-model="input" placeholder="请输入联系号码"></el-input>
						</div>
							<el-button>查询</el-button>
						
					</div>
					<div class="ri-table">
						<el-button>新增</el-button>
						 <el-table
						ref="multipleTable"
						:data="tableData3"
						tooltip-effect="dark"
						border
						style="width: 100%"
						:header-cell-style="{background:'rgba(243,247,251,1)',fontSize:'14px'}"
					    >
						<el-table-column
						  prop="name"
						  label="UID"
						  align="center"
						  min-width="10%"
						 >
						 <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
						</el-table-column>
						<el-table-column
						  prop="phone"
						  align="center"
						  min-width="10%"
						  label="企业代码"
						  >
						</el-table-column>
						<el-table-column
						prop="phone"
						label="公司名称"
						align="center"
						  min-width="10%"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="联系人"
						>
						</el-table-column>
						<el-table-column
						prop="data"
						align="center"
						  min-width="20%"
						label="电话号码"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="已发短信"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="剩余短信"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="签名"
						>
						</el-table-column>
						<el-table-column
						prop="operation"
						align="center"
						min-width="20%"

						label="操作"
						>
						<template slot-scope="scope">
							<el-button  size="small">修改</el-button>
							<el-button  size="small">密码</el-button>
							<el-button  size="small">充值</el-button>
						</template>
						</el-table-column>
					  </el-table>
					  <div class="ri-table-bottom">
						  <el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage4"
							:page-sizes="[100, 200, 300, 400]"
							:page-size="100"
							layout="total, sizes, prev, pager, next, jumper"
							:total="400">
						  </el-pagination>
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
        activeName: 'first',
			currentPage1: 5,
			currentPage2: 5,
			currentPage3: 5,
			currentPage4: 4,
			tableData3: [
					 {
						name: '30032',
						phone: '18304810',
						sex: '男',
						data:'1992-04-12 10:10:10',
						company: '人事部',
						operation: ''
					   },
			
	                  ],
			multipleSelection: []
   };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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
	#roleInformation {
		.ri-top {
				padding: 20px;
				box-sizing: border-box;
				.el-tabs__item.is-active {
					color: #00C1DE;
				}.el-tabs__item:hover {
					color: #00C1DE;
				}
				.el-tabs__active-bar {
					background-color: #00C1DE;
				}
				// input框	
				.ri-sign {
					width: 100%;
					height: 40px;
					span {
						font-size: 14px;
						color:#333333
					}
					.el-input {
						width: 75%;
					}
					.ri-s-a {
						width: 17.5%;
						float: left;
						min-width: 210px;
					}
					.ri-s-b {
						width: 17.5%;
						float: left;
						min-width: 210px;
		
					}
					.ri-s-c {
						width: 17.5%;
						float: left;
						min-width: 210px;
		
					}
					.ri-s-d {
						width: 17.5%;
						float: left;
						min-width: 210px;
		
						.el-select {
							width: 70%;
							.el-input {
								width: 100%;
							}
						}
					}
					.ri-s-e {
						width: 30%;
						float: left;
						min-width: 270px;
		
						.el-select {
							width: 40.83%;
							.el-input {
								width: 100%;
							}
						}
						.el-button{
							background-color: #00C1DE;
							margin-left: 20px;
							span {
								color: #FFFFFF;
		
							}
						}
					}
					
					
				}
				// 新增
				.ri-table{
					width: 100%;
					margin-top: 20px;
					.el-button {
						margin: 10px 0;
					}
				}
			}
			.ri-table-bottom {
				margin-top: 10px;
			}
		
	}
	
</style>

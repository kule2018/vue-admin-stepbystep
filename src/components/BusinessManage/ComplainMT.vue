<template>
	<div id="messageSign">
		<div class="ms-top bg-purple">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="投诉内容管理" name="first">
					<div class="ms-sign">
						<div class="ms-s-a">
							<span>用户ID</span>
							<el-input v-model="input" placeholder="请输入用户ID"></el-input>
						</div>
						<div class="ms-s-b">
							<span>归属地</span>
							<el-input v-model="input" placeholder="请输入用户签名"></el-input>
						</div>
						
						<div class="ms-s-d">
							<span>短信类型</span>
							 <el-select v-model="value" placeholder="请选择">
								<el-option
								  v-for="item in options"
								  :key="item.value"
								  :label="item.label"
								  :value="item.value">
								</el-option>
							  </el-select>
						</div>
						<div class="ms-s-e">
							<span>签名方式</span>
							<el-select v-model="value" placeholder="请选择">
								<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
								</el-option>
							</el-select>
							<el-button>查询</el-button>
						</div>
						
					</div>
					<div class="ms-table">
						
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
						  label="ID"
						  align="center"
						  min-width="10%"
						 >
						 <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
						</el-table-column>
						<el-table-column
						  prop="phone"
						  align="center"
						  min-width="10%"
						  label="签名"
						  >
						</el-table-column>
						<el-table-column
						prop="phone"
						label="扩展号"
						align="center"
						  min-width="10%"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="推广扩展号"
						>
						</el-table-column>
						<el-table-column
						prop="data"
						align="center"
						  min-width="20%"
						label="创建日期"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="审核状态"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						  min-width="10%"
						label="签名方式"
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
							<el-button  size="small">审核</el-button>
							<el-button  size="small">拉黑</el-button>
							<el-button  size="small">删除</el-button>
						</template>
						</el-table-column>
					  </el-table>
					  <div class="ms-table-bottom">
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
				<el-tab-pane label="投诉率" name="second">
					<div class="ms-sign">
						<div class="ms-s-a">
							<span>用户ID</span>
							<el-input v-model="input" placeholder="请输入用户ID"></el-input>
						</div>
						<div class="ms-s-b">
							<span>查询时间</span>
							<el-input v-model="input" placeholder="请输入查询时间"></el-input>
						</div>
						
						
						<div class="ms-s-e">
							
							<el-button>查询</el-button>
						</div>
						
					</div>
					<div class="ms-table">
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
						label="签名"
						>
						</el-table-column>
						
						
						<el-table-column
						prop="data"
						align="center"
						  min-width="20%"
						label="创建日期"
						>
						</el-table-column>
						<el-table-column
						prop="name"
						label="ID"
						align="center"
						min-width="10%"
						>
						<!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
						</el-table-column>
					  </el-table>
					  <div class="ms-table-bottom">
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
	@media only screen and (max-width: 1459px){
// 		.ms-s-e {
// 			margin-top: 20px;
// 			margin-top: 20px;
// 		}
	}
	.ms-top {
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
		.ms-sign {
			width: 100%;
			height: 40px;
			span {
				font-size: 14px;
				color:#333333
			}
			.el-input {
				width: 70%;
			}
			.ms-s-a {
				width: 17.5%;
				float: left;
				min-width: 210px;
			}
			.ms-s-b {
				width: 17.5%;
				float: left;
				min-width: 210px;

			}
			.ms-s-c {
				width: 17.5%;
				float: left;
				min-width: 210px;

			}
			.ms-s-d {
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
			.ms-s-e {
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
		
	}
	.ms-table-bottom {
		margin-top: 10px;
	}
</style>

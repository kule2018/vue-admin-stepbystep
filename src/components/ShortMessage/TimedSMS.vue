<template>
	<div id="timedSMS">
		<div class="timed-search">
					<div class="block">
						<span class="demonstration">发送时间段</span>
						<el-date-picker v-model="value5" type="datetimerange" :picker-options="pickerOptions2" range-separator="至"
						 start-placeholder="开始日期" end-placeholder="结束日期" align="right">
						</el-date-picker>
					</div>
				
				
					<div class="s-number">
						<span>发送号码</span>
						<el-input v-model="input" placeholder="请输入发送号码"></el-input>
					</div>
				
					<div class="s-n">
						<span>发送内容</span>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
				
				 <el-button>搜索</el-button>
			 
		</div>
		<div class="timed-table">
			 <el-table
				:data="tableData2"
				style="width: 100%"
				:row-class-name="tableRowClassName">
				<el-table-column
					prop="date"
					label="发送时间"
					align="center"
					width="150">
				</el-table-column>
				<el-table-column
					prop="name"
					label="提交时间"
					align="center"

					width="150">
				</el-table-column>
				<el-table-column
					prop="name"
					label="发送号码"
					align="center"

					width="150">
				</el-table-column>
				
				<el-table-column
					prop="address"
					align="center"

					label="内容">
				</el-table-column>
				<el-table-column
									prop="address"
									align="center"
				
									label="计费条数">
								</el-table-column>
				<el-table-column
					prop="name"
					label="操作"
					align="center"
					width="250">
					<template slot-scope="scope">
						<el-button  size="small">取消</el-button>
						
					</template>
				</el-table-column>
			</el-table>
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
</template>

<script>
	export default {
		data() {
			return {
				 currentPage1: 5,
         currentPage2: 5,
         currentPage3: 5,
         currentPage4: 4,
				 tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
				pickerOptions2: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				value5: ''
			};
		},
		methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
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

<style lang="less" scoped="scoped">
	.el-scrollbar__view {
		height: 100%;
	}
	.el-input {
		width: 70%;
	}
	 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
	.timed-table {
		margin-top: 21px;
	}
	/* input 框 */
	.timed-search {
		height: 40px;
		.block {
			float: left;
		}
		.s-n {
			float: left;
			margin-left: 20px;

		}
		.s-number{
			float: left;
			margin-left: 20px;

		}
		.el-button {
			float: left;
			margin-left: 20px;

		}
	}
	.el-pagination {
		text-align: center;
	}
	.el-button {
		background-color: #00c1de;
		color: #FFFFFF;
	}
		@media only screen and (max-width: 1400px){
			.s-n {
						margin-left: inherit !important;
						margin-top: 10px;
						margin-bottom: 10px;
					}
					.el-button {
								margin-top: 10px;
								margin-bottom: 10px;
					
							}
		}
</style>

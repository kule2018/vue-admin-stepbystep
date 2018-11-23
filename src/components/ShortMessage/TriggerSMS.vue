<template>
	<div id="triggerSMS">
		<el-row :gutter="30">
			<el-col :span="13">
				<div class="t-left bg-purple">
					<div class="count">
						通讯组别
					</div>
				     <div class="t-transfer">
						 <el-row :gutter="20">
						  <el-col :span="9">
							  <div class="t-transfer-l">
									<div class="t-select">
										<el-select v-model="value" size="small" placeholder="请选择">
       
									<el-option
									  v-for="item in options"
									  :key="item.value"
									  :label="item.label"
									  :value="item.value">
									</el-option>
								  </el-select>
										<el-button>+</el-button>
									</div>
									<div class="t-table">
									<el-scrollbar style="height: 100%;">
								   <el-table
									ref="multipleTable"
									:data="tableData3"
									tooltip-effect="dark"
									style="width: 100%"
									@selection-change="handleSelectionChange">
									<el-table-column
									  type="selection"
									  width="30">
									</el-table-column>
									<el-table-column
									  label="姓名"
										prop="name"
									  width="80">
									  <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
									</el-table-column>
									<el-table-column
									  prop="date"
									  label="电话"
									  width="125">
									</el-table-column>
								  </el-table>
									</el-scrollbar>
									</div>
									<div class="t-search">
										<input placeholder="请输入要搜索的名字">
										</input>
										<el-button> 搜索</el-button>
									</div>
							  </div>
						  </el-col>
						  <el-col :span="6">
							  <div class="t-transfer-c">
								  
							  </div>
						  </el-col>
						  <el-col :span="9">
							  <div class="t-transfer-r">
								  <div class="t-title">
										短信接收列表
									</div>
							  </div>
						  </el-col>
						</el-row>
					 </div>
				</div>
			</el-col>
			<el-col :span="11">
				<div class="t-right bg-purple">
					<div class="count">
						编辑发送
					</div>
					<div class="already">
					     已输入【<span>100</span>】字，短信内容计费【<span>3</span>】条
					</div>
					<div class="text-i">
						<textarea draggable>
				
						</textarea>
					</div>
					<div class="t-check">
						<div class="t-check-a">
							<el-checkbox v-model="checked">企业签名</el-checkbox>
							 <el-select v-model="value" placeholder="请选择">
								<el-option
								  v-for="item in options"
								  :key="item.value"
								  :label="item.label"
								  :value="item.value">
								</el-option>
							  </el-select>
						</div>
						<div class="t-check-b">
							<el-checkbox v-model="checked">定时发送</el-checkbox>
                            
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	  export default {
    data() {
      return {
		checked: true,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }
		],
        value: '',
		tableData3: [{
			    name: '王小虎',		
          date: '18010772635',
        },
				{
							name: '王小虎',		
							date: '18010772635',
						},
						{
									name: '王小虎',		
									date: '18010772635',
								},
								{
											name: '王小虎',		
											date: '18010772635',
										},
										{
													name: '王小虎',		
													date: '18010772635',
												},
												{
															name: '王小虎',		
															date: '18010772635',
														},
														{
																	name: '王小虎',		
																	date: '18010772635',
																},
																{
																			name: '王小虎',		
																			date: '18010772635',
																		},
																		{
																					name: '王小虎',		
																					date: '18010772635',
																				},
																				{
																							name: '王小虎',		
																							date: '18010772635',
																						},
																						{
																									name: '王小虎',		
																									date: '18010772635',
																								},{
															name: '王小虎',		
															date: '18010772635',
														},
				],
        multipleSelection: []
      }
    },
	 methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
	.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .t-left {
	  height: 660px;
	  padding: 21px;
	  box-sizing: border-box;
		
  }
  .t-right {
	  height: 660px;
	  padding: 21px;
	  box-sizing: border-box;
	  .already {
	  margin-top: 20px;
	  font-size: 12px;
	  span {
		  color: #DA7A50;
	  }
     }
	 .text-i {
		 width: 100%;
		 margin-top: 10px;
		 textarea {
			 width: 100% !important;
			 height: 440px !important;
			 resize:none
		 }
	 }
  }
  .el-select-dropdown__item {
	  line-height: inherit;
  }
  // 控制select的宽度
//   .el-input__inner {
// 	  width: 190px !important;
// 	  height: 36px !important;
//   }
  .t-transfer {
	  width: 100%;
	  margin-top: 22px;
	  height: 484px;
	  .t-transfer-l {
		  height: 577px;
		  padding: 21px;
			padding-right: 0 ;
		  box-sizing: border-box;
		  border: 1px solid rgba(235,235,235,1);
			.t-select {
				width: 100%;
				padding-right: 76px ;
				position: relative;
				box-sizing: border-box;
				.el-select {
					width: 100%;
				}
				.el-button {
					position: absolute;
					top: 0;
					right: 20px;
					width: 32px;
					height: 32px;
					line-height: 8px;
					text-indent: -4px;
					color: #FFFFFF;
					font-size: 18px;
					background-color: rgba(89,191,218,1);
				}
			}
		  .t-table {
		  	height: 400px;
		  	margin-top: 25px;
				margin-bottom: 25px;
		  }
			.t-search {
				width: 100%;
				padding-right:80px ;
				box-sizing: border-box;
				position: relative;
				height: 55px;
				line-height: 50px;
				background-color: rgba(243,247,251,1);
				margin-bottom: 0;
				input {
					height: 34px;
					width: 100%;
					border: 1px solid rgba(236,236,236,1);
					border-right: none;
					border-radius: 4px 0 0 4px;
					font-size: 12px;
					text-indent: 5px;
					
				}
				.el-button {
					position: absolute;
					right: 20px;
					top: 9px;
					width: 60px;
					height: 36px;
					line-height: 11px;
					// text-align: center;
					color: #FFFFFF;
					text-indent: -5px;
					background-color: rgba(89,191,218,1);
					border: 1px solid rgba(236,236,236,1);

				}
			}
		  
			
	  }
	  .t-transfer-c {
		  height: 579px;
	  }
	  .t-transfer-r {
		  height: 577px;
		  border: 1px solid rgba(235,235,235,1);
			.t-title {
				width: 100%;
				height: 55px;
				background-color: rgba(243,247,251,1);
				line-height: 55px;
				text-indent: 20px;
				font-size: 14px;
				font-weight: 400;
			}
	  }
  }
  .el-input .el-input--small .el-input--suffix {
  	width: 190px !important;
  }
</style>

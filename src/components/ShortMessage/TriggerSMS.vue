<template>
	<div id="triggerSMS">
		<el-row :gutter="20">
			<el-col :span="11">
				<div class="t-left bg-purple">
					<div class="count">
						通讯组别
					</div>
				     <div class="t-transfer">
						 <el-row :gutter="20">
						  <el-col :span="10">
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
										<el-button @click="add">+</el-button>
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
										
									  width="70">
									  <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
									</el-table-column>
									<el-table-column
									  prop="date"
									  label="电话"
									  width="120">
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
						  <el-col :span="4">
							  <div class="t-transfer-c">
								  <div class="t-tran-center">
									  <el-button>添加到发送></el-button>
									  <el-button><添加到通讯录</el-button>
								  </div>
								 
							  </div>
						  </el-col>
						  <el-col :span="10">
							  <div class="t-transfer-r">
								  <div class="t-title">
										短信接收列表
									</div>
									<div class="operator">
										<div class="o-left">
											<div class="move">移动(0)</div>
										  <div class="unicom">联通(0)</div>
										</div>
										<div class="o-right">
											<div class="telecom">电信(0)</div>
											<div class="o-total">合计(0)</div>
										</div>
									  <div class="o-table"></div>
									</div>
							  </div>
						  </el-col>
						</el-row>
					 </div>
				</div>
			</el-col>
			<el-col :span="13">
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
							<div class="t-checkbox">
								<el-checkbox v-model="checked">定时发送</el-checkbox>
							</div>
							
							<div class="t-input">
								<el-input v-model="input" placeholder="输入天数"></el-input>

							</div>
                            <el-date-picker
							  v-model="value1"
							  type="datetime"
							  placeholder="选择日期时间">
							</el-date-picker>
						</div>
						<div class="t-back">
							<el-checkbox v-model="checked">回T退订</el-checkbox>
						</div>
					</div>
				    <div class="t-send">
						<div class="t-daily">日常用语</div>
						<el-button>发送</el-button>
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
		   pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
		  // 下拉框
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
      },
			//添加
			add() {
				console.log(111)
				this.$router.push('/triggerAdd')
			}
    }
  }
</script>

<style lang="less" scoped="scoped">
// 	input::-webkit-input-placeholder {
// 		font-size: 12px !important;
//       }
	// 屏幕小于1400
	@media only screen and (max-width: 1400px){
		.el-col-13 {
			width: 100%;
		}
		.el-col-11 {
			width: 100%;
		}
		.el-col-10 {
			width: 38%;
		}
		.el-col-4 {
			width: 24%;
		}
	}
	@media only screen and (max-width: 1680px){
		.el-date-editor.el-input, .el-date-editor.el-input__inner {
			
		}
		
	}
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
  // 编辑栏
  .t-right {
	  height: 660px;
	  padding: 21px;
	  box-sizing: border-box;
	  // 发送
	  .t-send {
		  margin-top: 20px;
		  .t-daily {
			  width: 90px;
			  height: 36px;
			  float: left;
			  font-size: 14px;
			  text-align: center;
			  line-height: 36px;
			  color: #00C1DE;
			  border-radius: 4px;
			  border: 1px solid #00C1DE;
		  }
		  .el-button {
			  float: right;
			  width: 90px;
			  background-color: #00C1DE;
			  color: #FFFFFF;
		  }
	  }
	  .already {
	  margin-top: 20px;
	  font-size: 12px;
	  span {
		  color: #DA7A50;
	  }
     }
	 // 文本框
	 .text-i {
		 width: 100%;
		 margin-top: 10px;
		 textarea {
			 width: 100% !important;
			 height: 440px !important;
			 resize:none;//禁止拖动
		 }
	 }
	// 企业签名定时发送
	.t-check {
		width: 100%;
		height: 40px;
		.t-check-a {
			width: 40%;
			float: left;
			.el-select{
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
			.t-input{
				float:left;
				.el-input {
					width: 90px;
					height: 36px;
					
					
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
	  // 向左向右按钮	
	  .t-transfer-c {
		  height: 579px;
		  position: relative;
		  .t-tran-center {
			  position: absolute;
			  width:120px;
			  height:80px;
			  top:50%;
			  left:50%;
			  margin-top:-40px;
			  margin-left:-60px;
			  .el-button {
			  	margin: 0 auto;
			  	width: 120px;
			  }
			  .el-button:last-child {
			  margin-top: 10px;
			  
			  }
		  }
		  
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
	//运营商
	.operator {
		height: 105px;
		width: 100%;
		border-bottom: 1px solid rgba(235,235,235,1);
		.o-left {
			width: 100%;
			height: 50%;
			.unicom {
				width: 50%;
				float: right;
				text-align: center;
				line-height: 50px;
				font-size: 14px;
			}
			.move {
				width: 50%;
				float: left;
				text-align: center;
				line-height: 50px;
				font-size: 14px;

			}
		}
		.o-right {
			width: 100%;
			height: 50%;
			.telecom {
				width: 50%;
				float: left;
				text-align: center;
				font-size: 14px;
			}
			.o-total {
				width: 50%;
				float: right;
				text-align: center;
				font-size: 14px;
				color: #DA7A50;
			}
		}
	}
</style>

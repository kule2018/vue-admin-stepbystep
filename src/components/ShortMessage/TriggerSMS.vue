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
								   <el-select v-model="value" size="small" placeholder="请选择">
									<el-option
									  v-for="item in options"
									  :key="item.value"
									  :label="item.label"
									  :value="item.value">
									</el-option>
								  </el-select>
								   <el-table
									ref="multipleTable"
									:data="tableData3"
									tooltip-effect="dark"
									style="width: 100%"
									@selection-change="handleSelectionChange">
									<el-table-column
									  type="selection"
									  width="55">
									</el-table-column>
									<el-table-column
									  label="日期"
									  width="50%">
									  <template slot-scope="scope">{{ scope.row.date }}</template>
									</el-table-column>
									<el-table-column
									  prop="name"
									  label="姓名"
									  width="50%">
									</el-table-column>
								  </el-table>
							  </div>
						  </el-col>
						  <el-col :span="6">
							  <div class="t-transfer-c">
								  
							  </div>
						  </el-col>
						  <el-col :span="9">
							  <div class="t-transfer-r">
								  
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
          date: '2016-05-03',
          name: '王小虎',
        }],
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
  .el-input__inner {
	  width: 190px !important;
	  height: 36px !important;
  }
  .t-transfer {
	  width: 100%;
	  margin-top: 22px;
	  height: 484px;
	  .t-transfer-l {
		  height: 577px;
		  padding: 21px;
		  box-sizing: border-box;
		  border: 1px solid rgba(235,235,235,1);
		  
		  
	  }
	  .t-transfer-c {
		  height: 579px;
	  }
	  .t-transfer-r {
		  height: 577px;
		  border: 1px solid rgba(235,235,235,1);
	  }
  }
  .el-input--small .el-input__inner {
  	width: 90px !important;
  }
</style>

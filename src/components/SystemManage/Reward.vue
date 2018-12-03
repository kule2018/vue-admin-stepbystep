<template>
	<div id="reward">
		<div class="red-top">
			<p>说明:</p>
			<p>1、代金券只能用于购买短信，可以叠加使用。</p>
			<p>2、代金券不能兑换成现金，过期作废。</p>
		</div>
		<div class="red-bottom bg-purple">
			<span>失效时间</span>
			  <el-date-picker
				  v-model="value1"
				  type="datetime"
				  placeholder="请选择失效时间">
				</el-date-picker>
				<span>使用状态</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option
					  v-for="item in options"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
				  <el-button type="primary">查询</el-button>
				  
				  <div class="red-table">
					  <div class="red-t-top">
						  <el-button>立即使用</el-button>
						  <el-button>删除</el-button>
						  <p>已使用0张代金卷,共可使用金额0元</p>
					  </div>
					  <el-table
						ref="multipleTable"
						:data="tableData3"
						tooltip-effect="dark"
						border
						style="width: 100%"
						:header-cell-style="{background:'rgba(243,247,251,1)',fontSize:'14px'}"
						@selection-change="handleSelectionChange">
						<el-table-column
						  type="selection"
						  min-width="10%"
  
						  align="center"
						  >
						</el-table-column>
						<el-table-column
						  prop="name"
						  label="编号"
						  align="center"
				          min-width="15%"
						 >
						 <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
						</el-table-column>
						<el-table-column
						  prop="phone"
						  align="center"
						  min-width="10%"
  
						  label="金额"
						  >
						</el-table-column>
						<el-table-column
						  prop="sex"
						  label="使用范围"
						  min-width="10%"
  
						  align="center"
  
						  >
						</el-table-column>
						<el-table-column
						prop="birthday"
						label="金券来源"
						align="center"
						min-width="15%"
  
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						min-width="20%"
  
						label="失效日期"
						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						min-width="10%"
  
						label="使用状态"
						>
						</el-table-column>
						<el-table-column
						prop="operation"
						align="center"
							 min-width="25%"
						label="操作"
						>
						<template slot-scope="scope">
							<el-button  size="small">立即使用</el-button>
							<el-button  size="small">删除</el-button>
						</template>
						</el-table-column>
					  </el-table>
					  <div class="t-table-bottom">
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
		</div>
	</div>
</template>

<script>
	 export default {
    data() {
      return {
		  options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
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
        value3: ''
      };
    }
  };
</script>

<style lang="less" scoped="scoped">
	.red-top {
		padding: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		height: 107px;
		background-color: #f0f0f0;
		p {
			font-size: 12px;
			margin-top: 10px;
		}
		p:first-child {
			margin-top: 0px;
			font-size: 14px;
		}
		
	}
	.red-bottom {
		padding: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		.el-button {
			width: 90px;
		}
		.red-table {
			margin-top: 20px;
			p {
				float: right;
				height: 40px;
				line-height: 40px;
			}
			.el-table {
				margin-top: 10px;
				margin-bottom: 10px;
			}
		}
	}
</style>

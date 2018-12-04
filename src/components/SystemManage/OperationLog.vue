<template>
	<div id="opLog" class="bg-purple">
		<span>操作用户</span>
		<el-select v-model="value" placeholder="请选择">
			<el-option
			  v-for="item in options"
			  :key="item.value"
			  :label="item.label"
			  :value="item.value">
			</el-option>
		  </el-select>
		  <span>操作角色</span>
		<el-select v-model="value" placeholder="请选择">
			<el-option
			  v-for="item in options"
			  :key="item.value"
			  :label="item.label"
			  :value="item.value">
			</el-option>
		  </el-select>
		  <span>操作内容</span>
		  <el-input v-model="input" placeholder="请输入内容"></el-input>
		  <el-button type="primary">查询</el-button>
		  <div class="op-table">
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
			  	label="操作时间"
			  	>
			  	</el-table-column>
			  	<el-table-column
			  	prop="data"
			  	align="center"
			  	min-width="20%"
			  	label="账户账号"
			  	>
			  	</el-table-column>
			  	<el-table-column
			  	prop="name"
			  	label="操作用户"
			  	align="center"
			  	min-width="10%"
			  	>
			  	<!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
			  	</el-table-column>
				<el-table-column
				prop="data"
				align="center"
				min-width="20%"
				label="操作角色"
				>
				</el-table-column>
				<el-table-column
				prop="data"
				align="center"
				min-width="20%"
				label="操作模块"
				>
				</el-table-column>
				<el-table-column
				prop="data"
				align="center"
				min-width="20%"
				label="操作内容"
				>
				</el-table-column>
			  </el-table>
			  <div class="op-table-bottom">
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
</template>

<script>
	 export default {
    data() {
      return {
		  input:'',
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
        value: ''
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
	#opLog {
		padding: 20px;
		box-sizing: border-box;
		span {
			margin-left: 20px;
		}
		span:first-child {
			margin-left: 0;
		}
		.el-button {
			margin-left: 10px;
		}
		.el-input {
			width: 217px;
		}
		.op-table {
			margin-top: 20px;
			.op-table-bottom {
				margin-top: 10px;
			}
 		}
	}
</style>

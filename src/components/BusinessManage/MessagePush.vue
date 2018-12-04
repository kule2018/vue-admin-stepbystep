<template>
	<div id="messagePush" class="bg-purple">
		<div class="mp-top">
			<span>用户ID</span>
			<el-input v-model="input" placeholder="请输入内容"></el-input>
            <span>推送状态</span>
			<el-select v-model="value" placeholder="请选择">
				<el-option
				  v-for="item in options"
				  :key="item.value"
				  :label="item.label"
				  :value="item.value">
				</el-option>
			</el-select>
			 <el-button type="primary">主要按钮</el-button>
		</div>
		<div class="mp-bottom">
			<div class="mp-table">
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
				label="ID"
				align="center"
				width="100"
				>
				<!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
				</el-table-column>
				<el-table-column
				prop="phone"
				align="center"
				label="推送URL"
				>
				</el-table-column>
				<el-table-column
				prop="company"
				align="center"
				label="推送上行URL"
				>
				</el-table-column>
				<el-table-column
				prop="data"
				align="center"
				label="推送状态"
				width="100"

				>
				</el-table-column>
				<el-table-column
				prop="operation"
				align="center"
				label="操作"
				width="200"

				>
				<template slot-scope="scope">
					<el-button  size="small">修改</el-button>
					<el-button  size="small">禁用</el-button>
				
				</template>
				</el-table-column>
			</el-table>
			<div class="mp-table-bottom">
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
        value: ''
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
	#messagePush {
		padding: 20px;
			-moz-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
		.mp-top {
			.el-input {
				width: 217px;
			}
			span {
				font-size: 14px;
			}
			.el-button {
				width: 90px;
			}
		}
		
		.mp-bottom {
			margin-top: 20px;
			
			.el-button {
				margin-bottom: 10px;
				color: #00C1DE;
				border:1px solid #00C1DE;
			}
			.mp-table-bottom {
				margin-top: 10px;
			}
		}
	}
</style>

<template>
	<div id="messageTip" class="bg-purple">
		<div class="mt-top">
			<span>绑定手机号码(最多可以绑定三个手机号)</span>
			<el-button>添加联系人</el-button>
			</div>
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
				>
				<!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
				</el-table-column>
				<el-table-column
				prop="phone"
				align="center"
				label="电话"
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
				label="职位"

				>
				</el-table-column>
				<el-table-column
				prop="data"
				align="center"
				label="提醒类目"

				>
				</el-table-column>
				<el-table-column
				prop="operation"
				align="center"
				label="操作"
				>
				<template slot-scope="scope">
					<el-button  size="small">修改</el-button>
					<el-button  size="small">详情</el-button>
					<el-button  size="small">删除</el-button>
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
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	#messageTip {
		padding: 20px;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		.mt-top {
			margin-bottom: 20px;
			height:40px;
			.el-button {
				float: right;
				color: #00C1DE;
				border: 1px solid #00C1DE;
				font-size: 14px;
			}
		}
	}
</style>

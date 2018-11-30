<template>
	<div class="exemption">
		<div class="ex-top">
			

			<p>说明:</p>
			<p>1、根据短信模板编辑的短信内容，发送时可直达目标手机号码；</p>
			<p>2、常用免审模板无需单独申请，所有注册用户可直接使用；</p>
			<p>3、模板内含有"{}"的蓝色字体部分为参数，用于短信内容进行匹配。详情请查看模板指南；</p>
			<p>4、如您的发送内容与常用模板不匹配，建议如下：</p>
			<p>(1)可将短信内容修改为与常用免审模板相匹配。</p>
			<p>(2)新建一个与您发送内容相匹配的自定义模板。</p>
		</div>
		<div class="ex-bottom bg-purple">
			<div class="ms-sign">
				<div class="ms-s-a">
					<span>用户ID</span>
					<el-input v-model="input" placeholder="请输入用户ID"></el-input>
				</div>
				<div class="ms-s-b">
					<span>签名</span>
					<el-input v-model="input" placeholder="请输入用户签名"></el-input>
				</div>
				<div class="ms-s-d">
					<span>报备状态</span>
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
				  min-width="10%"
				 >
				 <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
				</el-table-column>
				<el-table-column
				  prop="phone"
				  align="center"
				  min-width="10%"
				  label="短信类型"
				  >
				</el-table-column>
				<el-table-column
				prop="company"
				align="center"
				  min-width="20%"
				label="短信内容"
				>
				</el-table-column>
				<el-table-column
				prop="data"
				align="center"
				  min-width="10%"
				label="模板类型"
				>
				</el-table-column>
				<el-table-column
				prop="company"
				align="center"
				  min-width="10%"
				label="模板状态"
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
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.ex-top {
		padding: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		height: 203px;
		background-color: #f0f0f0;
		p {
			font-size: 12px;
			margin-top: 9px;
		}
		p:first-child {
			margin-top: 0px;
			font-size: 14px;
		}
		
	}
	.ex-bottom {
		margin-top: 20px;
		padding: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	
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
			.ms-table{
				width: 100%;
				margin-top: 10px;
				.el-button {
					margin: 10px 0;
				}
			}
			
			
			}
</style>

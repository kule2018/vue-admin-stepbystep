<template>
	<div class="triggerAdd">
		<el-row :gutter="10">
		  <el-col :span="5">
			  <div class="t-grounp">
			  <div class="count">
			  	组别表
			  </div>
				  <div class="a-search">
					  <div class="a-search-top">
						  <input placeholder="输入组别名称">
						  </input>
						  <el-button> 搜索</el-button>
					  </div>
				  	<div class="a-search-bo">
						<ul>
							<li>人事部</li>
							<li>财务部</li>
							<li>运维中心</li>
							<li>销售部</li>
							<li>客服部</li>
							<li>总经办</li>
						</ul>
					</div>
				  </div>
				  <div class="t-bottom">
					  删除组
				  </div>
			  </div>
			  </el-col>
		  <el-col :span="19">
			  
			  <div class="trigger-table bg-purple">
				  <div class="count">
			      通讯表
				  <div class="add-name">
					  +新增名片
				  </div>
			      </div>
				  <div class="t-table-b">
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
						  label="姓名"
						  align="center"
                           min-width="15%"
						 >
						 <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
						</el-table-column>
						<el-table-column
						  prop="phone"
						  align="center"
						  min-width="20%"

						  label="电话"
						  >
						</el-table-column>
						<el-table-column
						  prop="sex"
						  label="性别"
						  min-width="7%"

						  align="center"

						  >
						</el-table-column>
						<el-table-column
						prop="birthday"
						label="生日"
						align="center"
						min-width="15%"

						>
						</el-table-column>
						<el-table-column
						prop="company"
						align="center"
						min-width="10%"

						label="单位"
						>
						</el-table-column>
						<el-table-column
						prop="operation"
						align="center"
                           min-width="25%"
						label="操作"
						>
						<template slot-scope="scope">
							<el-button  size="small">修改</el-button>
							<el-button  size="small">删除</el-button>
						</template>
						</el-table-column>
					  </el-table>
					  <div class="t-table-bottom">
						  <div class="t-delete">
						  	删除
						  </div>
						  <div class="t-export">
						  导出名片
						  </div>
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
			  </el-col>
		  
		</el-row>
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
        tableData3: [
			{
          
          name: '王小虎小和',
		  phone: '18304815116',
		  sex: '男',
          birthday:'1992-04-12',
		  company: '人事部',
		  operation: ''
        },
			{
		
		name: '王小虎',
		phone: '18304815116',
		sex: '男',
		birthday:'1992-04-12',
		company: '人事部',
		operation: ''
		},
			{
		
		name: '王小虎',
		phone: '18304815116',
		sex: '男',
		birthday:'1992-04-12',
		company: '人事部',
		operation: ''
		},
		],
        multipleSelection: []
      }
    },

     methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style lang="less" scoped="scoped">
		@media only screen and (max-width: 1400px){
			.el-col-5 {
			width: 24%;
		}
		.el-col-19 {
			width: 76%;
		}
		}
	// 组别表样式
 .t-grounp {
	 background-color: #FFFFFF;
	 padding: 20px;
	 // width: 310px;
	 box-sizing: border-box;
	 -moz-box-sizing: border-box;
	 -webkit-box-sizing: border-box;
	 .a-search {
		 height: 530px;
		 
		 margin-top: 20px;
		 border: 1px solid rgba(235,235,235,1);
		 .a-search-top {
			 height: 56px;
			 padding: 10px 70px 10px 10px;
			 position: relative;
			 box-sizing: border-box;
			 -moz-box-sizing: border-box;
			 -webkit-box-sizing: border-box;
			  input {
			 width: 100%;
			 height: 34px;
			 border: 1px solid rgba(235,235,235,1);
			 text-indent: 10px;

		     }
			 .el-button {
				 position: absolute;
				 height: 36px;
				 width: 60px;
				 top: 10px;
				 right: 10px;
				 text-indent: -7px;
				 line-height: 14px;
				 // padding: inherit;
				 background-color: rgba(89,191,218,1);
				 color: #FFFFFF;
			 }
		 }
		
	 }
	 .a-search-bo{
		 ul {
			 li {
				 height: 43px;
				 line-height: 43px;
				 text-align: center;
			 }
		 }
	 }
	 .t-bottom {
		 height: 50px;
		 border: 1px solid rgba(235,235,235,1);
		 text-align: center;
		 line-height: 50px;
		 color: #FFFFFF;
		 background-color: rgba(202,206,210,1);
	 }
 }
 .t-table-bottom {
	 margin-top: 10px;
 }
 .t-delete {
	 width: 50px;
	 height: 30px;
	 border: 1px solid rgba(235,235,235,1);
	 text-align: center;
	 line-height: 30px;
	 font-size: 14px;
	 border-radius: 4px;
	 float: left;

 }
 .t-export {
 	width: 75px;
 	height: 30px;
	text-align: center;
	line-height: 30px;
	font-size: 14px;
    border-radius: 4px;
	float: left;
	margin-left:10px;
 	border: 1px solid rgba(235,235,235,1);
 }
 // 分页居中
 .el-pagination {
	 text-align: center;
 }
 .trigger-table {
	 padding: 21px;
	 
	 .t-table-b {
	 	margin-top: 20px;
	 }
 }
 .add-name {
	 float: right;
	 width: 110px;
	 height: 36px;
	 border-radius: 4px;
	 text-align: center;
	 line-height: 36px;
	 font-size: 14px;
	 text-indent: 0;
	 font-weight: 700;
	 color: rgba(89,191,218,1);
	 border: 1px solid rgba(89,191,218,1);
 }
 .el-button {
	 background-color: #5ABFDB;
	 color: #FFFFFF;
 }
</style>

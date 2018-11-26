<template>
	<div id="timedSMS">
		<div class="timed-search">
			<el-row :gutter="10">
				<el-col :span="9">
					<div class="block">
						<span class="demonstration">发送时间段</span>
						<el-date-picker v-model="value5" type="datetimerange" :picker-options="pickerOptions2" range-separator="至"
						 start-placeholder="开始日期" end-placeholder="结束日期" align="right">
						</el-date-picker>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="s-number">
						<span>发送号码</span>
						<el-input v-model="input" placeholder="请输入发送号码"></el-input>
					</div>
				</el-col>
				<el-col :span="5">
					<div class="s-n">
						<span>发送内容</span>
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
				</el-col>
       <el-col :span="1">
				 <el-button>搜索</el-button>
			 </el-col>
			</el-row>
		</div>
		<div class="timed-table">
			 <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="发送时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="提交时间"
      width="150">
    </el-table-column>
		<el-table-column
			prop="name"
			label="发送号码"
			width="150">
		</el-table-column>
		
    <el-table-column
      prop="address"
      label="内容">
    </el-table-column>
		<el-table-column
			prop="name"
			label="计费条数"
			width="150">
		</el-table-column>
		
		<el-table-column
			prop="name"
			label="操作"
			width="150">
		</el-table-column>
  </el-table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
      }
    }
	};
</script>

<style>
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
</style>

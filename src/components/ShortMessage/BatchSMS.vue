<template>
	<div id="batch">
		<el-row :gutter="20">
		  <el-col :span="12">
			  <div class="b-file bg-purple">
				  <div class="count">
					  通讯组别
				  </div>
				  <div class="b-title">
					  <span>号码编辑</span>
					  <ul>
					  	<li>合计(0)</li>
						<li>电信(0)</li>
						<li>联通(0)</li>
						<li>移动(0)</li>
					  </ul>
				  </div>
				  <div class="b-file-up">
					  <div class="e-tip">
						  导入文件
					  </div>
					  <el-upload
					  class="upload-demo"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :before-remove="beforeRemove"
					  multiple
					  :limit="3"
					  :on-exceed="handleExceed"
					  :file-list="fileList">
					  <el-button size="small" type="primary">选择上传文件</el-button>
					  <div slot="tip" class="el-upload__tip">仅支持TXT,CSV类文件</div>
					</el-upload>
					
				  </div>
				  <div class="b-number"></div>
			  </div>
		  </el-col>
		  <el-col :span="12">
			  <div class=" bg-purple">
				  
			  </div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
	// 通讯组别	
	.b-file {
		height: 554px;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		.e-tip {
			float: left;
			margin-right: 10px;
			margin-top: 5px;
			font-size: 14px;
			color: #333333;
		}
		//运营商
		.b-title {
			margin-top: 20px;
			margin-bottom: 10px;
			font-size: 14px;
			height: 25px;
			color: #333333;
			border-bottom:1px solid #cccccc;
			span {
				float: left;
			}
			ul {
				li {
					float: right;
					margin-left: 30px;
				}
				li:first-child {
					color: #DA7A50;
				}
			}
		}
	     .el-upload__tip {
			font-size: 12px;
			color: #DA7A50;
			position: absolute;
			top: 100px;
			left: 219px;
			}
			.b-number {
				height: 334px;
				border: 1px solid #CCCCCC;
			}
	}
  

</style>

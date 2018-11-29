<template>
	<div id="documentSMS">
		<div class="d-top bg-purple">
			<div class="count">
			号码编辑栏
		    </div>
		</div>
		<div class="t-bottom">
			<p>备注</p>
			<p>1、您当前使用的通道计费： 普通短信字/条；</p>
			<p>2、导入的文件格式：每行一个号码和内容，中间用任意字符分隔，比如空格或者逗号等；</p>
			<p>文件短信：即你要发送的号码和文字内容都在你要上传的文档里面</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	#documentSMS {
		height: 100%;
	}
	.d-top {
		height: 371px;
		padding: 20px;
		margin-bottom: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.t-bottom {
		padding: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		height: 145px;
		background-color: #f0f0f0;
		p {
			font-size: 12px;
		}
		p:first-child {
			margin-bottom: 15px;
			font-size: 14px;
		}
		p:last-child {
			margin-top: 15px;
		}
	}
</style>

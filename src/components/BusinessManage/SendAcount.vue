<template>
	<div id="sendAccount">
		<div class="sa-top">
			<p>说明:</p>
			<p>1、平台默认提供1个测试账号给到开发者完成测试服务， 查看新手指引。</p>
			<p>2、企业完成资质认证提交并通过后，测试账号转为发送账号，可发送手机号不再限制。</p>
			<p>3、使用测试账号进行测试，将会产生正常资费。</p>
		</div>
		<div class="sa-address bg-purple">
			<div class="count">
				云平台服务地址
			</div>
			<p>短信URL:http//sioo.com.cn/097945/sms/3343 <span>开启账户</span></p>
			<p>国际短信URL:http//sioo.com.cn/097945/internationalsms/3343<span>开启账户</span></p>
			<p>语音短信URL:http//sioo.com.cn/097945/internationalsms/3343<span>开启账户</span></p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.sa-top {
		padding: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		height: 145px;
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
	.sa-address {
		height: 195px;
		margin-top: 20px;
		padding: 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		p {
			font-size: 14px;
			margin-top: 20px;
			span {
				color: #00C1DE;
				margin-left: 50px;
			}
		}
		
	}
</style>

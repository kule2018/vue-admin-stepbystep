<template>
	<div id="fastTest">
		<div class="ft-top">
			<p>说明:</p>
			<p>1、开发者用户在开发前，可以使用本测试工具，对用户在云通讯管理平台上申请的账号，密码，请求地址进行快速的有效性验证。</p>
			<p>2、如果遇到发送条数与手机实际显示条数不一致的情况，是因为智能手机短时间内会把相同内容的短信进行合并显示，建议您，对同一个手机号码选择不同内容进行发送。</p>
		</div>
		<div class="ft-bottom bg-purple">
			<div class="ft-bottom-a">
				<span>发送类型</span>
				<el-select v-model="value" placeholder="请选择">
					<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="ft-bottom-b mt-20">
				<span>请求地址</span>
				<el-select v-model="value" placeholder="请选择">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
				</el-select>
			</div>
			<div class="ft-bottom-c mt-20">
				<span>发送账号</span>
				<el-select v-model="value" placeholder="请选择">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
				</el-select>
			</div>
			<div class="ft-bottom-d mt-20">
				<span>手机号码</span>
				<el-input v-model="input" placeholder="请输入手机号码"></el-input>
			</div>
			<div class="ft-bottom-e mt-20">
				<span>短信内容</span>
				<textarea draggable>
		
				</textarea>

			</div>
			<div class="ft-tip">已输入【100】字,短信内容计费【3】条</div>

			<div class="ft-bottom-f mt-20">
				<el-button type="primary">发送</el-button>
			</div>
			
			
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	#fastTest {
		.ft-top {
			padding: 20px 0 20px 20px;
			box-sizing: border-box;
			-moz-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			height: 107px;
			margin-bottom: 20px;
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
		.ft-bottom {
			padding: 20px;
			box-sizing: border-box;
			-moz-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			span{
				font-size: 14px;
			}
			.ft-bottom-d {
				.el-input {
					width: 217px;
	
				}
			}
			.ft-bottom-e {
				height: 145px;
				position: relative;
				span {
					position: absolute;
					top:0;
					left: 0;
				}
				textarea {
					margin-left: 62px;
					width: 640px !important;
					height: 145px !important;
					border: 1px solid #dcdfe6;
					border-radius: 4px;
					resize:none;//禁止拖动
				}
			}
			.ft-tip {
				line-height: 31px;
				font-size: 12px;
				text-indent:63px;
				color: #666666;
			}
		}
		
		
	}
	
</style>

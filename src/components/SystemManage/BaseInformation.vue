<template>
	<div id="baseInfor" class="bg-purple">
		<div class="count">
			基本信息
		</div>
		<div class="base-main">
			<ul>
				<li>
					<span>用户ID :</span>
					<span>30032</span>
				</li>
				<li>
					<span>认证状态 :</span>
					<span>未认证</span>
					<span>立即认证</span>
				</li>
				<li>
					<span>公司名称 :</span>
					<span>上海希奥股份有限公司</span>
					<span>修改</span>
				</li>
				<li>
					<span>公司地址 :</span>
					<span>上海市虹口区四平路33号1209室</span>
					<span>修改</span>
				</li>
				<li>
					<span>联系人 :</span>
					<span>XX</span>
				</li>
				<li>
					<span>联系电话 :</span>
					<span>18020500505</span>
				</li>
				<li>
					<span>开户时间 :</span>
					<span>2014-09-24 12:34:32</span>
				</li>
				<li>
					<span>上次登录 :</span>
					<span>2014-09-24 12:34:32</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	#baseInfor {
		padding: 20px;
		box-sizing: border-box;
		height: 800px;
		.base-main {
			margin-top: 20px;
			ul {
				li {
					height:50px;
					span {
						
						margin-left: 20px;
						float: left;
						font-size: 14px

					}
					span:first-child {
						width: 70px;
						text-align: right;
					}
					span:nth-child(3) {
						margin-left: 50px;
						color: #00C1DE;
					}
				}
			}
		}
	}
</style>

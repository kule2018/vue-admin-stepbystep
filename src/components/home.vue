<template>
	<div id="home">
		<el-container>
			<el-header style="height: 70px;">
				<div class="logo">
					<img src="../assets/main/logo.png" alt="">
				</div>
				<div class="header-right">
					<div class="logout">
						<!-- 		<div><i class="iconfont icon-084tuichu"></i></div> -->
						<a href="javascript:;">退出</a>
					</div>
					<div class="people">
						<i class="iconfont icon-lianxirenwode"></i>
						罗某某
					</div>
					<div class="call">
						<i class="iconfont icon-lianxiwomen"></i>
						联系我们
					</div>
					<div class="message">
						<i class="iconfont icon-xiaoxi"></i>
						消息
					</div>

				</div>
			</el-header>
			<el-container>
				<el-aside width="160px" background-color="#26292E">
					<el-scrollbar style="height: 100%;">
						<el-menu :unique-opened='true' :router="true" text-color="#ffffff" active-text-color="#cccccc">
							<el-submenu index="1">
								<template slot="title"><i class="iconfont icon-shouye"></i>
									<span @click="gomain">
										首页
									</span>
								</template>
							</el-submenu>
							<!-- <div style="width: 160px;height: 100px;background-color: red;">
								
							</div> -->
							<el-submenu index="2">
								<template slot="title"><i class="iconfont icon-message-channel"></i>短信</template>
								<el-menu-item-group>
									<el-menu-item index="/triggerSMS">触发短信</el-menu-item>
									<el-menu-item index="/batchSMS">批量短信</el-menu-item>
									<el-menu-item index="/templateSMS">模板短信</el-menu-item>
									<el-menu-item index="/documentSMS">文件短信</el-menu-item>
									<el-menu-item index="/replySMS">短信回复</el-menu-item>
									<el-menu-item index="/messageRecording">短信记录</el-menu-item>
									<el-menu-item index="/timedSMS">定时短信</el-menu-item>
									<el-menu-item index="/daily">日常用语管理</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title"><i class="iconfont icon-caiwu"></i>财务充值</template>
								<el-menu-item-group>
									<el-menu-item index="/FinancialOV">财务概览</el-menu-item>
									<el-menu-item index="1-2">在线充值</el-menu-item>
									<el-menu-item index="1-1">充值管理</el-menu-item>
									<el-menu-item index="1-2">费用返还</el-menu-item>
									<!-- <el-menu-item index="1-1">消费管理</el-menu-item> -->
									<el-menu-item index="1-2">索取发票</el-menu-item>
									<el-menu-item index="1-1">发票管理</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="4">
								<template slot="title"><i class="iconfont icon-yewu-tianchong"></i>业务管理</template>
								<el-menu-item-group>
									<el-menu-item index="/sendAcount">发送账户</el-menu-item>
									<el-menu-item index="/messageSign">短信签名</el-menu-item>
									<el-menu-item index="/exemptionMT">免审管理</el-menu-item>
									<el-menu-item index="/complainMT">投诉管理</el-menu-item>
									<el-menu-item index="/rechargeS">充值统计</el-menu-item>
									<el-menu-item index="/dataAnalysis">数据统计分析</el-menu-item>
									<el-menu-item index="/messagePush">消息推送绑定</el-menu-item>
									<el-menu-item index="/messageTip">消息提示</el-menu-item>
									<el-menu-item index="/fastTest">快速测试</el-menu-item>

								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="5">
								<template slot="title"><i class="iconfont icon-xitongguanli-"></i>系统管理</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">基本信息</el-menu-item>
									<el-menu-item index="1-2">角色信息</el-menu-item>
									<el-menu-item index="1-1">操作日志</el-menu-item>
									<el-menu-item index="1-2">版本更新</el-menu-item>
									<el-menu-item index="1-1">Q&A</el-menu-item>
									<el-menu-item index="1-2">推广大使</el-menu-item>
									<el-menu-item index="1-1">有奖返利</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="6">
								<template slot="title"><i class="iconfont icon-kaifazhequanxianpeizhi"></i>开发者</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">开发者</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					</el-scrollbar>
				</el-aside>
				<el-container>
					<el-scrollbar style="100%;width: 100%;">

					<el-main>
						<router-view></router-view>
					</el-main>
					</el-scrollbar>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		created() {

		},
		data() {
			return {

			}
		},
		methods: {
			gomain() {
				console.log(111)
				this.$router.push('/homeMain')
			}
		},
	}
</script>

<style lang="less">
	#home {
		height: 100%;

		.el-container {
			height: 100%;

			.el-aside {
				background-color: #26292E;
				color: #333;
				height: 100%;
				line-height: 200px;
			}
		}
	}

	.el-scrollbar__wrap {
		overflow-x: hidden;
	}
// 	.el-scrollbar__view {
// 		height: 100%;
// 	}

	.el-submenu__title {
		// color: #FFFFFF;
	}

	.el-header {
		// background-color: #FFFFFF;
		color: #333;
		text-align: center;
		padding: 0;

		.logo {
			float: left;
			width: 160px;
			background-color: #26292E;
			height: 100%;
			line-height: 70px;
		}

		.header-right {
			float: right;
			height: 100%;
			line-height: 70px;

			.message {
				float: right;
				// margin-left: 45px;
			}

			.call {
				float: right;
				margin-left: 45px;
			}

			.people {
				float: right;
				margin-left: 45px;
			}

			.logout {
				float: right;
				margin-left: 45px;
				width: 65px;
				height: 100%;
				background-color: #32373D;

				a {
					text-decoration: none;
					color: #FFFFFF;
				}
			}
		}
	}

	.el-main {
		background-color: #F3F6FB;
		color: #333;
		padding: 30px;
		height: 100%;
	}
    @media only screen and (max-width: 1400px){
    	.el-main {
    		padding: 20px;
    		
    	}
    }
	.el-submenu__title i {
		margin-right: 10px;
	}

	.el-menu {
		background-color: #26292E;
    border-right: none;
		.el-menu-item-group {
			background-color: #32373D;
		}

		.el-menu-item.is-active {
			background-color: #49515c;
		}

		.el-submenu.is-opened {
			background-color: #5ABFDB;
		}
	}

	.main {
		width: 50px;
	}

	.el-menu-item:hover {
		background-color: #444d57;
		color: #FFFFFF !important;
	}

	.el-submenu__title:hover {
		background-color: #4a525d;
	}
</style>

<template>
	<div id="homeMain">
		<!-- <el-row :gutter="30">
			<el-col :span="12">
				<div class="grid-content bg-purple">
					<div class="count">
						账户概览
					</div>
					<div class="accountOverview">
						<div class="accountB">
							<div class="accoutMoney">
								账户余额
							</div>
							<div class="mam">
								<span>
									1728278
								</span>
								元
							</div>

							<el-button round>去充值</el-button>
						</div>
						<div class="messageB">
							<div class="messageAccout">
								短信余额
							</div>
							<div class="mam">
								<span>
									1728278
								</span>
								条
							</div>

							<el-button round>去购买</el-button>
						</div>
						<div class="surplusB">
							<div class="surplusAccout">
								剩余积分
							</div>
							<div class="mam">
								<span>
									1728278
								</span>
								分
							</div>

							<el-button round>去兑换</el-button>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row> -->
		<el-row :gutter="30">
			<el-col :span="12" :md="12">
				<div class="grid-content bg-purple">
					<div class="count">
						账户概览
					</div>
					<div class="accountOverview">
						<el-row :gutter="20">
							<el-col :span="8">
								<div class="accountB Aboder">
									<div class="accoutMoney">
										账户余额
									</div>
									<div class="mam">
										<span>
											1728278
										</span>
										元
									</div>
									<el-button round>去充值</el-button>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="messageB Aboder">
									<div class="messageAccout">
										短信余额
									</div>
									<div class="mam">
										<span>
											1728278
										</span>
										条
									</div>

									<el-button round>去购买</el-button>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="surplusB Aboder">
									<div class="surplusAccout">
										剩余积分
									</div>
									<div class="mam">
										<span>
											1728278
										</span>
										分
									</div>

									<el-button round>去兑换</el-button>
								</div>
							</el-col>
						</el-row>



					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content-c bg-purple">
					<div class="count-c">
						备注:除今日统计外，其他统计到昨日
						<div style="float: right;color: rgba(102,102,102,1); font-size: 12px;">单位：条</div>
					</div>
					<div class="acount-totle">
						<el-row :gutter="20">
							<el-col :span="6">
								<div class="count-t Aboder">
									<div style="height: 30px;">123456789</div>
									<div style="height: 30px;font-size: 12px;">今日</div>

								</div>
							</el-col>
							<el-col :span="6">
								<div class="count-w Aboder">
									<div style="height: 30px;">123456798</div>
									<div style="height: 30px;font-size: 12px;">本周</div>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="count-m Aboder">
									<div style="height: 30px;">123456789</div>
									<div style="height: 30px;font-size: 12px;">本月</div>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="count-totle Aboder-l">
									<div style="height: 30px;">123456789</div>
									<div style="height: 30px;font-size: 12px;">累计发送</div>
								</div>
							</el-col>
						</el-row>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="30">
			<el-col :span="12">
				<div class="chartsC bg-purple">
					<div id="charts-a" class="charts-a" ref="myEchartA"></div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="chartsT bg-purple">
					<div id="charts-b" class="charts-b" ref="myEchartB"></div>
				</div>
			</el-col>

		</el-row>
		<el-row :gutter="30">
			<el-col :span="12">
				<div class="newsA bg-purple">
					<div class="count">
                       最新公告
					</div>
					<div class="news-a">
						<img src="../assets/main/news.png" alt="">
						<div class="news-a-a">
							<p>关于防范短信被刷的重要通知</p>
							<p>关于防范短信被刷的重要通知关于防被刷的重要通知重要通知关于防范短信......</p>
						</div>
						<div class="news-a-b">
							<p>关于防范短信被刷的重要通知</p>
							<p>关于防范短信被刷的重要通知关于防被刷的重要通知重要通知关于防范短信......</p>
						</div>
						<div class="news-a-c">
							<p>关于防范短信被刷的重要通知</p>
							<p>关于防范短信被刷的重要通知关于防被刷的重要通知重要通知关于防范短信......</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="newsB bg-purple">
					<div class="count">
					基本信息
					</div>
					<div class="news-b">
						<ul>
							<li>
								<span>
									用户名
								</span>
								
								</li>
							<li>公司名</li>
							<li>联系人</li>
							<li>联系电话</li>
							<li>开户时间</li>
							<li>上次登录</li>
						</ul>
					</div>
				</div>
			</el-col>

		</el-row>
		<!-- <div class="pro-bottom">
			<ul>
				<li class="bg-purple">
					<div class="pro-a">
						<p>验证码短信</p>
						<p>Verification code SMS</p>
					</div>
					<div class="button-a">
						开通验证码短信
					</div>
				</li>
				<li class="bg-purple"></li>
				<li class="bg-purple"></li>
				<li class="bg-purple"></li>
				<li class="bg-purple"></li>
			</ul>
		</div> -->
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			this.initEcharts();
		},
		methods: {
			initEcharts() {
				// 基于准备好的dom，初始化echarts实例
				let myChartA = this.$echarts.init(this.$refs.myEchartA)
				let myChartB = this.$echarts.init(this.$refs.myEchartB)

				// 绘制图表
				myChartA.setOption({
					color: ['rgba(89,191,218,1)'],
					title: {
						text: '近期消费图',
						textStyle: {
							fontSize: 18,
							fontFamily: "MicrosoftYaHei",
							fontWeight: 400,
							color: "rgba(26, 26, 26, 1)"
						}
					},
					tooltip: {},
					xAxis: {
						data: ["三月", "四月", "五月", "六月", "七月"],
						axisLine: {
							symbol: ['none', 'arrow'],
							lineStyle: {
								color: 'rgba(212,212,212,1)', // x坐标轴的轴线颜色 
								width: 1 //这里是坐标轴的宽度,为0就是不显示 
							}
						}
					},
					yAxis: [{

						type: 'value',
						axisLabel: {
							show: false //这行代码控制着坐标轴x轴的文字是否显示 
						},
						splitLine: {
							show: false, // 网格线是否显示 
							// 改变样式 
							lineStyle: {
								color: '#EDEDED' // 修改网格线颜色 
							}
						},
						axisLine: {
							lineStyle: {
								color: '#fff', // x坐标轴的轴线颜色 
								width: 0 //这里是坐标轴的宽度,为0就是不显示 
							}
						}
					}],
					series: [{
						name: '销量',
						type: 'bar',
						barWidth: 50, //宽度
						// barGap:"10px",
						data: [19310, 729310, 829310, 503210, 603214],
						itemStyle: { //设置圆角
							//柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
							emphasis: {
								barBorderRadius: 30
							},

							normal: {
								//柱形图圆角，初始化效果
								barBorderRadius: [10, 10, 0, 0],
								label: {
									show: true, //是否展示
									position: 'top',
									// width:'80px',

									textStyle: {
										fontWeight: 'bolder',
										fontSize: '12',
										fontFamily: '微软雅黑',
									}
								}
							}
						},
					}]
				});
				let colors = ['#5793f3', '#d14a61', '#675bba'];
				myChartB.setOption({
					color: ['#5793f3', '#d14a61', '#675bba'],

					title: {
						text: '一周统计图',
						textStyle: {
							fontSize: 18,
							fontFamily: "MicrosoftYaHei",
							fontWeight: 400,
							color: "rgba(26, 26, 26, 1)"
						}
					},
					tooltip: {},
					legend: {
						data: ['发送失败量', '发送成功量', '发送完美量'],
						left: 'right'
					},
					// grid: {//调整上下左右的距离
					// left: '3%',
					// right: '4%',
					// bottom: '3%',
					// containLabel: true
					// },
					xAxis: {
						data: ["09/07", "09/08", "09/09", "09/10", "09/11"],
						axisLine: {
							symbol: ['none', 'arrow'],
							lineStyle: {
								color: 'rgba(212,212,212,1)', // x坐标轴的轴线颜色 
								width: 1 //这里是坐标轴的宽度,为0就是不显示 
							}
						}
					},
					yAxis: [{
						type: 'value',
						axisLabel: {
							show: true //这行代码控制着坐标轴x轴的文字是否显示 
						},

						splitLine: {
							show: true, // 网格线是否显示 
							// 改变样式 
							lineStyle: {
								color: 'rgba(212,212,212,1)', // 修改网格线颜色 

							}
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(212,212,212,1)', // x坐标轴的轴线颜色 
								width: 0 //这里是坐标轴的宽度,为0就是不显示 
							}
						}
					}],
					series: [{
							name: '发送失败量',
							type: 'line',
							smooth: true,
							lineStyle: {
								color: 'rgba(89,191,218,1)', // x坐标轴的轴线颜色 
								width: 3 //这里是坐标轴的宽度,为0就是不显示 
							},
							data: [0.2, 0.3, 0.6, 0.4, 0.5]
						},
						{
							name: '发送成功量',
							type: 'line',
							smooth: true,
							data: [0.4, 0.3, 0.7, 0.8, 0.4],
							lineStyle: {
								color: 'rgba(110,173,97,1)',
								width: 3
							},
							markPoint: {
								data: [{
									name: '发送成功量',
									value: 0.3,
									xAxis: 1,
									yAxis: 0.3
								}],
								symbol: 'rect'
							},
						},
						{
							name: '发送完美量',
							type: 'line',
							smooth: true, //曲线
							symbolSize: 8, //点的大小
							data: [0.1, 0.6, 0.9, 0.5, 0.2],
							itemStyle: {
								normal: {
									color: "rgba(211,96,46,1)", //折线点的颜色
									border: 3,
									lineStyle: {
										color: "rgba(211,96,46,1)" //折线的颜色
									}
								}
							}

							// 							lineStyle: {
							// 								color: 'rgba(211,96,46,1)',
							// 								width: 3
							// 							},
							// 							normal: {
							// 								color: "rgba(211,96,46,1)",
							// 							}
						}
					]
				});
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@media only screen and (max-width: 1300px){
		.accountOverview .messageB .mam span {
			font-size: 18px !important;
		}.accountOverview .accountB .mam span {
			font-size: 18px !important;
		}.accountOverview .surplusB .mam span {
			font-size: 18px !important;
		}
		.acount-totle .Aboder {
			font-size: 18px !important;
		}
		.acount-totle .Aboder-l {
			font-size: 18px !important;
		}
	}
	.el-col-6 {
		padding: 0 !important;
	}
	
    .el-row {
		margin-bottom: 30px;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		height: 204px;
		padding: 20px 20px 0 20px;
	}

	.grid-content-c {
		height: 204px;
		padding: 20px 20px 0 20px;

		.count-c {

			text-indent: 14px;
			font-size: 14px;
			color: rgba(89, 191, 218, 1)
		}
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	// 	@media only screen and (min-width: 1200px){
	// 		.el-col-md-12 {
	// 		width: 25%;
	// 	}
	// 	}

	.accountOverview {
		width: 100%;
		height: 140px;
		margin-top: 22px;

		.Aboder {
			border: 1px solid rgba(224, 230, 239, 1);
			border-radius: 4px 3px 3px 4px;
			height: 143px;
			padding: 20px 0 20px 20px;
			box-sizing: border-box;
		}

		.accountB {
			.accoutMoney {
				height: 14px;
				font-size: 14px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 10px;
			}

			.mam {
				height: 19px;
				font-family: MicrosoftYaHei;
				font-weight: 400;

				span {
					font-size: 24px;
					color: rgba(89, 191, 218, 1)
				}
			}

			.el-button {
				margin-top: 27px;
				width: 90px;
				height: 30px;
				line-height: 0;
				color: #FFFFFF;
				background: rgba(89, 191, 218, 1);
				border-radius: 15px;
			}
		}

		.messageB {
			.messageAccout {
				height: 14px;
				font-size: 14px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 10px;
			}

			.mam {
				height: 19px;
				font-family: MicrosoftYaHei;
				font-weight: 400;

				span {
					font-size: 24px;
					color: rgba(110, 173, 97, 1)
				}
			}

			.el-button {
				margin-top: 27px;
				width: 90px;
				height: 30px;
				line-height: 0;
				color: #FFFFFF;
				background: rgba(110, 173, 97, 1);
				border-radius: 15px;
			}
		}

		.surplusB {
			.surplusAccout {
				height: 14px;
				font-size: 14px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 10px;
			}

			.mam {
				height: 19px;
				font-family: MicrosoftYaHei;
				font-weight: 400;

				span {
					font-size: 24px;
					color: rgba(211, 96, 46, 1)
				}
			}

			.el-button {
				margin-top: 27px;
				width: 90px;
				height: 30px;
				line-height: 0;
				color: #FFFFFF;
				background: rgba(211, 96, 46, 1);
				border-radius: 15px;
			}
		}
	}

	.count-c {
		.el-col.el-col-6 {
			padding: inherit;
		}
	}

	.acount-totle {
		height: 143px;
		width: 100%;
		margin-top: 22px;

		.Aboder {
			border-right: 1px solid rgba(224, 230, 239, 1);
			height: 143px;
			font-size: 24px;
			text-align: center;
			line-height: 143px;
		}

		.Aboder-l {
			height: 143px;
			font-size: 24px;
			text-align: center;
			line-height: 143px;
		}
	}

	.chartsC {
		height: 365px;
		padding: 23px;
		width: 100%;
		box-sizing: border-box;

		.charts-a {
			width: 100%;
			height: 100%;
		}
	}

	.chartsT {
		width: 100%;
		height: 365px;
		padding: 23px;
		box-sizing: border-box;

		.charts-b {
			width: 100%;
			height: 100%;
		}
	}

	.newsA {
		height: 296px;
		padding: 23px;
		box-sizing: border-box;

		.news-a {
			width: 100%;
			
			position: relative;
			img {
				position: absolute;
				left: 12px;
				top: 6px;
			}
			.news-a-a {
				text-indent: 35px;
				margin-top: 30px;
				p:nth-child(2) {
					font-size: 12px;
					margin-top: 8px;
                    overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap
				}
			}
			.news-a-b {
				text-indent: 35px;
				margin-top: 30px;
				p:nth-child(2) {
					font-size: 12px;
					margin-top: 8px;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap
				}

			}
			.news-a-c {
				text-indent: 35px;
				margin-top: 30px;
				p:nth-child(2) {
					font-size: 12px;
					margin-top: 8px;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap
				}
			}
		}
	}

	.newsB {
		height: 296px;
		padding: 23px 23px 23px 33px;
		box-sizing: border-box;
		

		.news-b {
			margin-top: 30px;
			li {
				margin-bottom: 16px;
				font-size: 14px;
				color: #333333;
			}
			li:nth-child(6){
				margin-bottom:0 ;
			}
			
		}
	}
// 产品预留
// 	.pro-bottom {
// 		width: 100%;
// 		height: 140px;
// 		ul {
// 			width: 100%;
// 			height: 100%;
// 			li {
// 				height: 100%;
// 				width: 18.4%;
// 				float: left;
// 				margin-right: 2%;
// 				.pro-a {
// 					height: 100px;
// 					width: 100%;
// 				}
// 			}
// 			li:last-child{
// 				margin-right: 0;
// 			}
// 		}
// 		
// 	}
</style>

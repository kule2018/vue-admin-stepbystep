<template>
	<div id="login">
		<div class="l-img">
			<img src="../assets/main/1920.png"  alt="">

		</div>
		<div class="l-right">
			<div class="l-l">
				 <!-- @tab-click="handleClick" -->
				<el-tabs v-model="activeName">
					<el-tab-pane label="用户登录" name="first">
						<el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
							<el-form-item  prop="username">
								<el-input v-model="form.username" placeholder="请输入用户名" prefix-icon="iconfont icon-yonghuming"></el-input>
							</el-form-item>
							<el-form-item  prop="password">
								<!-- 将来我们给组件注册事件的时候，可以会注册不上 -->
								<!-- .native: 注册事件，给组件的根元素注册事件 -->
								<el-input type="password" v-model="form.password" placeholder="请输入密码" @keyup.enter.native="login" prefix-icon="iconfont icon-mima"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="login">登录</el-button>
								<el-button @click="reset">重置</el-button>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<el-tab-pane label="ID登录" name="second">配置管理</el-tab-pane>
				</el-tabs>
			</div>
			
		</div>
	</div>
</template>

<script>
	 export default {
		data () {
			return {
				activeName: 'first',
				form: {
					username: 'why',
					password: "123456"
				},
				rules: {
					// 用户名的校验
					username: [
						// 用户名是必须
						{ required: true, message: '请输入用户名', trigger: 'change' },
						{ min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'change' }
					],
					// 密码的校验
					password: [
						{ required: true, message: '请输入密码', trigger: 'change' },
						{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
					]
				}
			}
		},
		methods: {
			login () {
		   this.$refs.form.validate(async (valid) => {
				 if (valid) {
					 this.axios('/api/login').then( res => {
						 console.log(res.data[0])
						 let lg = res.data[0]
						 console.log(lg.username,lg.password)
						 if(lg.username === this.form.username && lg.password==this.form.password){
							 localStorage.setItem('myToken',lg.username)
							 this.$message.success('恭喜你，登录成功')
							 this.$router.push('homeMain')
						 }else {
							 this.$message.error('账号或者密码错误')

						 }
					 })
				 }
			 })
			},
			reset () {
				this.$refs.form.resetFields()
			}
		}
  };
</script>

<style lang="less">
	
	#login {
		width: 100%;
		height: 100%;
		.l-img {
			width: 60%;
			height: 100%;
			background-color: #e5f4f8;
			float: left;
			position: relative;
			img {
				position: absolute;
				top: 50%;
				right: 0;
				margin-top: -383px;
				
			}
		}
		.l-right {
			width: 40%;
			height: 100%;
			float: left;
			position: relative;
			.l-l {
				width: 350px;
				height:350px;
				position:absolute;
				top:50%;
				left:10%;
				margin-top: -175px;
				.el-tabs {
					width: 100%;
				}
				.el-form-item__content {
					margin-left: inherit !important;
				}
			}
		}
		#tab-first {
			width: 175px;
			text-align: center;
		}
		#tab-second {
		    text-align: center;
			width: 175px;
		}
	}
	@media only screen and (max-width: 1400px){
		.l-img {
			img {
				width: 628px;
				margin-top: -314px !important;
			}
		}
		.l-l {
			width: 253px !important;
			height:350px;
			.el-tabs__item {
				padding: inherit !important;
				
			}
			
			 #tab-second {
				width: 125px !important;
			}
			
			 #tab-first {
				width: 125px !important;
			}
			}
	}
</style>

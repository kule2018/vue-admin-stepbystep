<template>
	<div id="login">
		<div class="l-img">
			<img src="../assets/main/1920.png" width="500px" alt="">

		</div>
		<div class="l-right">
			<div class="l-l">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="用户登录" name="first">用户管理</el-tab-pane>
					<el-tab-pane label="ID登录" name="second">配置管理</el-tab-pane>
				</el-tabs>
			</div>
			
		</div>
	</div>
</template>

<script>
	 export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
				margin-top: -250px;
				
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
</style>

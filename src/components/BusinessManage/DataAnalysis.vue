<template>
  <div class="da-main">
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用量统计" name="first">
          <div class="first-content content">
            用户ID
            <select name id>
              <option value="volvo" selected="selected">选择栏目</option>
              <option value="saab">普通发票</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <div class="month">
              <div class="count">月度统计图</div>
              <el-row>
                <el-col :span="24">
                  <div class="chart">
                    <div id="month-chart" style="width:100%;height:100%;" ref="monthChart"></div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="速率分析" name="second">
          <div class="second-content contents"></div>
        </el-tab-pane>
        <el-tab-pane label="客户分布" name="third">
          <div class="third-content contents"></div>
        </el-tab-pane>
        <el-tab-pane label="三网分析" name="fourth">
          <div class="fourth-content contents"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      monthOption: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      //初始化月度图标实例
      let monthChart = this.$echarts.init(this.$refs.monthChart);
      let monthOption = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
						type:'line',
						smooth:true,
            // stack: '总量',
            data:[1200, 132, 1010, 134, 900, 230, 210]
        },
        {
            name:'联盟广告',
						type:'line',
						smooth:true,
            // stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
						type:'line',
						smooth:true,
            // stack: '总量',
            data:[1500, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
						type:'line',
						smooth:true,
            // stack: '总量',
            data:[320, 332, 301, 30, 390, 330, 320]
        },
        {
            name:'搜索引擎',
						type:'line',
						smooth:true,
            // stack: '总量',
            data:[50, 932, 901, 90, 1290, 1330, 1320]
        }
    ]
};
      monthChart.setOption(monthOption);
    }
  }
};
</script>

<style lang="less">
@color: #00c1de;
.da-main {
  padding: 20px;
  background-color: #fff;
  // tab样式调整
  .el-tabs__nav.is-top {
    font-size: 14px;
    padding: 0 20px;
    color: #333;
  }
  .el-tabs__item.is-active {
    color: @color;
  }
  .el-tabs__item:hover {
    color: @color;
  }
  .el-tabs__active-bar {
    background-color: @color;
    padding: 0 20px;
	}
	.chart{
		height: 350px;
		box-sizing: border-box;
		#month-chart{
			height: 100%;
		}
	}
}
</style>

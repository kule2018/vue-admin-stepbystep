<template>
  <div class="da-main">
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="beforeLeave">
        <el-tab-pane label="用量统计" name="first">
          <div class="first-content content">
            <div class="top">
              用户ID
            <select name id>
              <option value="volvo" selected="selected">选择栏目</option>
              <option value="saab">普通发票</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button>查询</button>
            </div>
            <!-- 月度统计图 -->
            <div class="month">
              <div class="count">月度统计图</div>
              <div class="det">
                <select name id>
              <option value="volvo" selected="selected">2018</option>
              <option value="saab">普通发票</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <span>本月发送总数:</span>
            <span>发送成功数:</span>
            <span>发送失败数:</span>
            <span>发送成功率:</span>
            <button>统计详情</button>
              </div>
              <el-row>
                <el-col :span="24">
                  <div class="chart">
                    <div id="month-chart" style="width:100%;height:350px;" ref="monthChart"></div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!-- 年度统计图 -->
            <div class="year">
              <div class="count">年度统计图</div>
              <el-row>
                <el-col :span="24">
                  <div class="chart">
                    <div id="year-chart" style="width:100%;height:100%;" ref="yearChart"></div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="速率分析" name="second">
          <div class="second-content contents">
            <div class="top">
              用户ID
              <input type="text" placeholder="请输入用户ID">
              查询时间
              <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              <button>查询</button>
            </div>
            <div class="rate">
              <div class="date">
                发送总量：100条
                <span>日期：2018-11-05</span>
              </div>
              <div class="rate-chart" style="width:100%;height:100%;" ref="rateChart"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="客户分布" name="third">
          <div class="third-content contents">
            <div class="top">
              用户ID
              <input type="text" placeholder="请输入用户ID">
              查询时间
              <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              <button>查询</button>
            </div>
            <div class="dist">
              <div class="date">
                发送总量：100条
                <span>日期：2018-11-05</span>
              </div>
              <div class="dist-chart" style="width:100%;height:100%;" ref="distChart"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="三网分析" name="fourth">
          <div class="fourth-content contents">
            <div class="top">
              用户ID
              <input type="text" placeholder="请输入用户ID">
              查询时间
              <el-date-picker v-model="value1" type="date" placeholder="请选择起始日期"></el-date-picker>
              <el-date-picker v-model="value1" type="date" placeholder="请选择结束日期"></el-date-picker>
              <button>查询</button>
            </div>
            <div class="analy">
              <div class="date">
                发送总量：100条
                <span>日期：2018-11-05</span>
              </div>
              <div class="analy-chart" style="width:100%;height:100%;" ref="analyChart"></div>
            </div>
          </div>
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
      value1: 1,
      tabItem: "analyChart"
    };
  },
  mounted() {
    this.initFirstEcharts();
  },
  methods: {
    handleClick() {
      this.initEcharts();
      console.log(1);
    },
    beforeLeave(activeName, oldActiveName) {
      console.log(activeName, oldActiveName);
      let width = document.querySelector("." + oldActiveName + "-content").offsetWidth;
      console.log(width);
      document.querySelector("." + activeName + "-content").style.width = width;
      this.$nextTick(function() {
        this.initEcharts();
      });
    },
    initFirstEcharts() {
      //初始化月度图标实例
      var monthChart = this.$echarts.init(this.$refs.monthChart);
      //年度
      var yearChart = this.$echarts.init(this.$refs.yearChart);
      var monthOption = {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          // type:'plain',
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "category",
          // show: true,
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            smooth: true,
            //数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
            // stack: '总量',
            data: [700, 132, 1010, 134, 900, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [1100, 232, 201, 554, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [320, 332, 301, 30, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [50, 932, 901, 690, 1290, 730, 1320]
          }
        ]
      };
      var yearOption = {
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          // type:'plain',
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            smooth: true,
            //数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。
            // stack: '总量',
            data: [700, 132, 1010, 134, 900, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [1100, 232, 201, 554, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [320, 332, 301, 30, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            smooth: true,
            // stack: '总量',
            data: [50, 932, 901, 690, 1290, 730, 1320]
          }
        ]
      };
      monthChart.setOption(monthOption);
      yearChart.setOption(yearOption);
      monthChart.resize();
      yearChart.resize();
    },
    initEcharts() {
      //速率分析
      var rateChart = this.$echarts.init(this.$refs.rateChart);
      //初始化月度图标实例
      var monthChart = this.$echarts.init(this.$refs.monthChart);
      //年度
      var yearChart = this.$echarts.init(this.$refs.yearChart);
      //客户分布
      var distChart = this.$echarts.init(this.$refs.distChart);
      //三网分析
      var analyChart = this.$echarts.init(this.$refs.analyChart);

      var rateOption = {
        grid: {
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: true
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [120, 200, 50, 80, 70, 110, 130],
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            }
          }
        ]
      };
      var distOption = {
        grid: {
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [120, 200, 150, 80, 170, 110, 130],
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            }
          }
        ]
      };
      var analyOption = {
        grid: {
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            }
          }
        ]
      };
      rateChart.setOption(rateOption);
      distChart.setOption(distOption);
      analyChart.setOption(analyOption);

      rateChart.resize();
      distChart.resize();
      analyChart.resize();
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
  // 上面部分
  .top{
    input,select{
      height: 36px;
      width: 190px;
      border: 1px solid #D4D4D4;
      border-radius: 4px;
      box-sizing: border-box;
    }
    button{
      height: 36px;
      width: 90px;
      box-sizing: border-box;
      background-color: @color;
      border-radius: 4px;
      color: #fff;
      margin-left: 20px;
    }
  }
  .det{
    line-height: 36px;
    select,button{
      height: 36px;
      width: 73px;
      border: 1px solid #D4D4D4;
      border-radius: 4px;
      box-sizing: border-box;
    }
    button{
      background-color: @color;
      color: #fff;
      border: none;
    }
  }
    // 1 用量统计
  .first-content {
    .chart {
      width: 100%;
      height: 350px;
      box-sizing: border-box;
      margin-bottom: 20px;
      #month-chart {
        width: 100%;
        height: 100%;
      }
    }
  }
    .date{
      float: right;
    }
  
  // 速率分析
  .rate {
    width: 100%;
    height: 588px;
    .rate-chart {
      height: 100%;
    }
  }
  // 客户分布
  .dist {
    width: 100%;
    height: 588px;
    .dist-chart {
      height: 100%;
    }
  }
  // 三网分析
  .analy {
    width: 100%;
    height: 588px;
    .analy-chart {
      height: 100%;
    }
  }
}
</style>

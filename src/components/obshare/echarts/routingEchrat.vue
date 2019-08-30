<template>
     <div class="echarts">
          <div id="myChart" style="width:100%;height:100%;margin:auto"></div>
     </div>
</template>
<script>
//   引入基本模板
let echarts = require('echarts/lib/echarts');
// 引入柱状图组件
require("echarts/lib/chart/radar");
// 引入提示框和title组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/component/dataZoom');
// import { mapState, mapMutations } from '../../../common/js/store.js'
export default {
     data() {
          return {
               value: [],
               routingData: []
          }
     },
     props: {
          data: null,
     },
     created() {
          this.initData();
     },
     mounted() {
          this.drawLine();
     },
     // computed: {
     //      ...mapState({

     //      })
     // },
     methods: {
          initData() {
               this.data.map((val, index) => {
                    let obj = {
                         name: '',
                         num: '',
                         max: 100
                    };
                    let propertyScore = val.propertyScore >= 0 ? val.propertyScore : 0;
                    obj.name = val.propertyScoreName;
                    obj.num = propertyScore;
                    this.routingData.push(obj);
                    this.value.push(obj.num);
               });
          },
          drawLine() {
               // 基于准备好的dom，初始化echarts实例
               let myChart = echarts.init(document.getElementById('myChart'), null, { renderer: 'svg' });
               // 绘制图表
               myChart.setOption({
                    baseOption: {
                         radar: {
                              // shape: 'circle',
                              radius: '75%', //半径
                              center: ['50%', '60%'], // 图的位置
                              triggerEvent: false,
                              silent: true,
                              name: {
                                   formatter: function (value, index) {
                                        return `{color1|${index.num}}\n${value}`;
                                   },
                                   rich: {
                                        color1: {
                                             color: '#0080ff',
                                             fontSize: '30',
                                             align: 'center',
                                             verticalAlign: 'top',
                                             lineHeight: '40',
                                             fontWeight: '900'
                                        }
                                   },
                                   textStyle: {
                                        color: '#8B949E',
                                        fontSize: '20',
                                        padding: [0, 0, 0, 0]
                                   }
                              },

                              nameGap: 15, // 指示器名称和指示器轴的距离。[ default: 15 ]
                              splitNumber: 4, // (这里是圆的环数)指示器轴的分割段数。[ default: 5 ]
                              shape: 'polygon', // 雷达图绘制类型，支持 'polygon'(多边形) 和 'circle'(圆)。[ default: 'polygon' ]
                              indicator: this.routingData,

                              splitLine: {
                                   show: false,
                                   lineStyle: {
                                        width: 1,
                                   }
                              },
                              splitArea: {
                                   show: true,
                                   areaStyle: {
                                        color: ['#CAE4FF', '#D5EAFF', '#E1F0FF', '#EFF7FF'],
                                        opacity: 0.9
                                   },

                              },
                              axisLine: {
                                   lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        width: 1,
                                   }
                              },

                         },
                         series: [{
                              name: '',
                              z: 0,
                              silent: true,
                              symbol: 'emptyCircle',
                              /*曲线圆点*/
                              symbolSize: 0,
                              type: 'radar',
                              data: [{
                                   value: this.value,
                                   // value: [0, 0, 0, 0, 0],
                                   name: '预算分配（Allocated Budget）',
                                   lineStyle: {
                                        normal: {
                                             color: 'none'
                                        },
                                   },
                                   itemStyle: {
                                        color: '#000',
                                        normal: {
                                             areaStyle: {
                                                  color: {
                                                       type: '',
                                                       x: 0,
                                                       y: 0,
                                                       x2: 0,
                                                       y2: 1,
                                                       colorStops: [{
                                                            offset: 0,
                                                            color: '#A591FF' // 0% 处的颜色
                                                       }, {
                                                            offset: 0.3,
                                                            color: '#A591FF' // 100% 处的颜色
                                                       }, {
                                                            offset: 1,
                                                            color: '#4298F2' // 100% 处的颜色
                                                       }],
                                                  },
                                                  opacity: 1
                                             }
                                        }
                                   },
                              }
                              ]
                         }]
                    },
                    media: [{
                         query: { maxWidth: 400 },
                         option: {
                              radar: {
                                   radius: '65%', //半径
                                   center: ['50%', '60%'], // 图的位置
                                   splitLine: {
                                        show: false,
                                        // lineStyle: {
                                        //      width: 2,
                                        //      // 图表背景网格线的颜色
                                        //      shadowColor: '#0080ff',
                                        //      shadowColor: '#0080ff',
                                        //      shadowBlur: 50,
                                        //      shadowOffsetX: -10,
                                        //      shadowOffsetY: -10,
                                        //      opacity: 0.1
                                        // }
                                   },
                                   name: {
                                        formatter: function (value, index) {
                                             return `{color1|${index.num}}\n${value}`;
                                        },
                                        rich: {
                                             color1: {
                                                  color: '#0080ff',
                                                  fontSize: '18',
                                                  align: 'center',
                                                  verticalAlign: 'top',
                                                  lineHeight: '25',
                                                  fontWeight: '900'
                                             }
                                        },
                                        textStyle: {
                                             color: '#8B949E',
                                             fontSize: '13',
                                             // padding: [ 13, 14, 15, 16 ]
                                        }
                                   },
                              }
                         }
                    },
                    {
                         query: { minWidth: 400, maxWidth: 700 },
                         option: {
                              radar: {
                                   radius: '65%', //半径
                                   center: ['50%', '60%'], // 图的位置
                                   splitLine: {
                                        show: false,
                                        // lineStyle: {
                                        //      width: 3,
                                        //      // 图表背景网格线的颜色
                                        //      shadowColor: '#0080ff',
                                        //      shadowColor: '#0080ff',
                                        //      shadowBlur: 50,
                                        //      shadowOffsetX: -10,
                                        //      shadowOffsetY: -10,
                                        //      opacity: 0.1
                                        // }
                                   },
                                   name: {
                                        formatter: function (value, index) {
                                             return `{color1|${index.num}}\n${value}`;
                                        },
                                        rich: {
                                             color1: {
                                                  color: '#0080ff',
                                                  fontSize: '20',
                                                  align: 'center',
                                                  verticalAlign: 'top',
                                                  lineHeight: '30',
                                                  fontWeight: '900'
                                             }
                                        },
                                        textStyle: {
                                             color: '#8B949E',
                                             fontSize: '13',
                                             // padding: [ 13, 14, 15, 16 ]
                                        }
                                   },
                              }
                         }
                    }
                    ]
               });
          }
     }
}
</script>

<style scoped>
.echarts {
      height: 100%;
      width: 100%;
}

.qq {
      position: absolute;
      top: 1.33rem;
      left: 4.62rem;
      font-size: 0.18rem;
}
</style>
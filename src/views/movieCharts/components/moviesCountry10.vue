<template>
    <div>
        <div id="2e27ae8c578744bda75a159b85256aa7" style="width:100%;height:100%;"></div>
    </div>
</template>

<script>
    import {get_film_country_charts} from "../../../api";

    export default {
        name: "moviesCountry10",
        methods:{
          myEcharts(){
              var myChart_2e27ae8c578744bda75a159b85256aa7 = this.$echarts.init(document.getElementById('2e27ae8c578744bda75a159b85256aa7'), 'light', {renderer: 'canvas'});

              var option_2e27ae8c578744bda75a159b85256aa7 = {
                  "title": [
                      {
                          // "text": "\u4e0a\u699c\u7535\u5f71\u6570\u5927\u4e8e10\u90e8\u7684\u56fd\u5bb6\u548c\u5730\u533a",
                          "left": "center",
                          "top": "bottom",
                          "textStyle": {
                              "fontSize": 18
                          },
                          "subtextStyle": {
                              "fontSize": 12
                          }
                      }
                  ],
                  "toolbox": {
                      "show": true,
                      "orient": "vertical",
                      "left": "95%",
                      "top": "center",
                      "feature": {
                          "saveAsImage": {
                              "show": true,
                              "title": "save as image"
                          },
                          "restore": {
                              "show": true,
                              "title": "restore"
                          },
                          "dataView": {
                              "show": true,
                              "title": "data view"
                          },
                          "magicType": {
                              "show": true,
                              "type": [
                                  "line",
                                  "bar",
                                  "stack",
                                  "tiled"
                              ],
                              "title": {
                                  "line": "\u6298\u7ebf\u56fe",
                                  "bar": "\u67f1\u72b6\u56fe",
                                  "stack": "\u5806\u53e0",
                                  "tiled": "\u5e73\u94fa"
                              }
                          },
                          "dataZoom": {
                              "show": true,
                              "title": {
                                  "zoom": "\u533a\u57df\u7f29\u653e",
                                  "back": "\u7f29\u653e\u8fd8\u539f"
                              }
                          }
                      }
                  },
                  "series_id": 7940761,
                  "tooltip": {
                      "trigger": "item",
                      "triggerOn": "mousemove|click",
                      "axisPointer": {
                          "type": "line"
                      },
                      "textStyle": {
                          "fontSize": 14
                      },
                      "backgroundColor": "rgba(255,255,255,0.7)",
                      "borderColor": "#4175a4",
                      "borderWidth": 0
                  },
                  "series": [
                      {
                          "type": "pie",
                          "name": "\u7535\u5f71\u7c7b\u578b",
                          "data": [],
                          "radius": [
                              "0%",
                              "70%"
                          ],
                          "center": [
                              "55%",
                              "50%"
                          ],
                          "label": {
                              "normal": {
                                  "show": true,
                                  "position": "outside",
                                  "textStyle": {
                                      "fontSize": 12
                                  },
                                  "formatter": "{b}: {d}%"
                              },
                              "emphasis": {
                                  "show": true,
                                  "textStyle": {
                                      "fontSize": 12
                                  },
                                  "formatter": "{b}: {d}%"
                              }
                          },
                          "seriesId": 7940761
                      }
                  ],
                  "legend": [
                      {
                          "data": [
                              "\u7f8e\u56fd",
                              "\u4e2d\u56fd\u5927\u9646",
                              "\u4e2d\u56fd\u9999\u6e2f",
                              "\u610f\u5927\u5229",
                              "\u6cd5\u56fd",
                              "\u82f1\u56fd",
                              "\u5fb7\u56fd",
                              "\u5370\u5ea6",
                              "\u65e5\u672c",
                              "\u897f\u73ed\u7259",
                              "\u897f\u5fb7",
                              "\u4e2d\u56fd\u53f0\u6e7e",
                              "\u97e9\u56fd",
                              "\u6bd4\u5229\u65f6",
                              "\u82cf\u8054",
                              "\u745e\u5178",
                              "\u52a0\u62ff\u5927"
                          ],
                          "selectedMode": "multiple",
                          "show": true,
                          "left": "left",
                          "top": "top",
                          "orient": "vertical",
                          "textStyle": {
                              "fontSize": 12
                          }
                      }
                  ],
                  "animation": true,
                  "color": [
                      "#c23531",
                      "#2f4554",
                      "#61a0a8",
                      "#d48265",
                      "#749f83",
                      "#ca8622",
                      "#bda29a",
                      "#6e7074",
                      "#546570",
                      "#c4ccd3",
                      "#f05b72",
                      "#ef5b9c",
                      "#f47920",
                      "#905a3d",
                      "#fab27b",
                      "#2a5caa",
                      "#444693",
                      "#726930",
                      "#b2d235",
                      "#6d8346",
                      "#ac6767",
                      "#1d953f",
                      "#6950a1",
                      "#918597",
                      "#f6f5ec"
                  ]
              };
              myChart_2e27ae8c578744bda75a159b85256aa7.setOption(option_2e27ae8c578744bda75a159b85256aa7);
              get_film_country_charts().then(res =>{
                  myChart_2e27ae8c578744bda75a159b85256aa7.hideLoading();
                  myChart_2e27ae8c578744bda75a159b85256aa7.setOption({
                      series: [{
                          data: res.data  //将异步请求获取到的数据进行装载
                      }]
                  })

              })
          }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
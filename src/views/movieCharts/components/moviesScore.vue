<template>
    <div>
        <div id="8eeb8bbe1717459480d74a4c7f42a09b" style="width:100%;height:100%;"></div>
    </div>
</template>

<script>
    export default {
        name: "moviesScore",
        data(){
            return{

            }
        },
        methods: {

            myEcharts(){
                var myChart_8eeb8bbe1717459480d74a4c7f42a09b = this.$echarts.init(document.getElementById('8eeb8bbe1717459480d74a4c7f42a09b'), 'light', {renderer: 'canvas'});

                var option_8eeb8bbe1717459480d74a4c7f42a09b = {
                    "title": [
                        {
                            "text": "\u8bc4\u5206\u548c\u8bc4\u4ef7\u4eba\u6570",
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
                    "series_id": 6515721,
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
                            "type": "line",
                            "name": "\u8bc4\u4ef7\u4eba\u6570",
                            "symbol": "emptyCircle",
                            "symbolSize": 4,
                            "smooth": false,
                            "step": false,
                            "showSymbol": true,
                            "itemStyle" : {
                                "normal" : {
                                    "color":"#6495ED"
                                }
                            },
                            "data": [
                                [
                                    "20\u4e16\u7eaa10\u5e74\u4ee3",
                                    -1.03160125101367
                                ],
                                [
                                    "20\u4e16\u7eaa20\u5e74\u4ee3",
                                    -0.8832104159237358
                                ],
                                [
                                    "20\u4e16\u7eaa30\u5e74\u4ee3",
                                    -0.08779785320436906
                                ],
                                [
                                    "20\u4e16\u7eaa40\u5e74\u4ee3",
                                    -0.5174726834824669
                                ],
                                [
                                    "20\u4e16\u7eaa50\u5e74\u4ee3",
                                    -0.15747043521893478
                                ],
                                [
                                    "20\u4e16\u7eaa60\u5e74\u4ee3",
                                    -0.5414261077838542
                                ],
                                [
                                    "20\u4e16\u7eaa70\u5e74\u4ee3",
                                    -0.3421087546534229
                                ],
                                [
                                    "20\u4e16\u7eaa80\u5e74\u4ee3",
                                    -0.16832899239182192
                                ],
                                [
                                    "20\u4e16\u7eaa90\u5e74\u4ee3",
                                    1.167806492715553
                                ],
                                [
                                    "21\u4e16\u7eaa00\u5e74\u4ee3",
                                    0.9029364522235926
                                ],
                                [
                                    "21\u4e16\u7eaa10\u5e74\u4ee3",
                                    2.3885472074493848
                                ],
                                [
                                    "21\u4e16\u7eaa20\u5e74\u4ee3",
                                    -0.7298736587162558
                                ]
                            ],
                            "label": {
                                "normal": {
                                    "show": false,
                                    "position": "top",
                                    "textStyle": {
                                        "fontSize": 12
                                    }
                                },
                                "emphasis": {
                                    "show": true,
                                    "textStyle": {
                                        "fontSize": 12
                                    }
                                }
                            },
                            "lineStyle": {
                                "normal": {
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid",
                                    "color": "#6495ED"
                                },

                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "markPoint": {
                                "data": []
                            },
                            "markLine": {
                                "data": []
                            },
                            "seriesId": 6515721
                        },
                        {
                            "type": "line",
                            "name": "\u8bc4\u5206",
                            "symbol": "emptyCircle",
                            "symbolSize": 4,
                            "smooth": false,
                            "step": false,
                            "showSymbol": true,
                            "itemStyle" : {
                                "normal" : {
                                    "color":"#90EE90"
                                }
                            },
                            "data": [
                                [
                                    "20\u4e16\u7eaa10\u5e74\u4ee3",
                                    0.16264421120282202
                                ],
                                [
                                    "20\u4e16\u7eaa20\u5e74\u4ee3",
                                    2.4673807357518176
                                ],
                                [
                                    "20\u4e16\u7eaa30\u5e74\u4ee3",
                                    0.5961369744408914
                                ],
                                [
                                    "20\u4e16\u7eaa40\u5e74\u4ee3",
                                    0.53352135308427
                                ],
                                [
                                    "20\u4e16\u7eaa50\u5e74\u4ee3",
                                    0.6394862507646716
                                ],
                                [
                                    "20\u4e16\u7eaa60\u5e74\u4ee3",
                                    -0.41030552625524014
                                ],
                                [
                                    "20\u4e16\u7eaa70\u5e74\u4ee3",
                                    -1.0771450916580319
                                ],
                                [
                                    "20\u4e16\u7eaa80\u5e74\u4ee3",
                                    -0.12635096428924775
                                ],
                                [
                                    "20\u4e16\u7eaa90\u5e74\u4ee3",
                                    -0.6555822770436487
                                ],
                                [
                                    "21\u4e16\u7eaa00\u5e74\u4ee3",
                                    -1.1979450750137037
                                ],
                                [
                                    "21\u4e16\u7eaa10\u5e74\u4ee3",
                                    -0.7765901091462459
                                ],
                                [
                                    "21\u4e16\u7eaa20\u5e74\u4ee3",
                                    -0.15525048183841098
                                ]
                            ],
                            "label": {
                                "normal": {
                                    "show": false,
                                    "position": "top",
                                    "textStyle": {
                                        "fontSize": 12
                                    }
                                },
                                "emphasis": {
                                    "show": true,
                                    "textStyle": {
                                        "fontSize": 12
                                    }
                                }
                            },
                            "lineStyle": {
                                "normal": {
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid",
                                    "color": "#90EE90"
                                }
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "markPoint": {
                                "data": []
                            },
                            "markLine": {
                                "data": []
                            },
                            "seriesId": 6515721
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u8bc4\u4ef7\u4eba\u6570",
                                "\u8bc4\u5206"
                            ],
                            "selectedMode": "multiple",
                            "show": true,
                            "left": "center",
                            "top": "top",
                            "orient": "horizontal",
                            "textStyle": {
                                "fontSize": 12
                            }
                        }
                    ],
                    "animation": true,
                    "xAxis": [
                        {
                            "show": true,
                            "nameLocation": "middle",
                            "nameGap": 25,
                            "nameTextStyle": {
                                "fontSize": 14
                            },
                            "axisTick": {
                                "alignWithLabel": false
                            },
                            "inverse": false,
                            "boundaryGap": true,
                            "type": "category",
                            "splitLine": {
                                "show": false
                            },
                            "axisLine": {
                                "lineStyle": {
                                    "width": 1
                                }
                            },
                            "axisLabel": {
                                "interval": "auto",
                                "rotate": 0,
                                "margin": 8,
                                "textStyle": {
                                    "fontSize": 12
                                }
                            },
                            "data": [
                                "20\u4e16\u7eaa10\u5e74\u4ee3",
                                "20\u4e16\u7eaa20\u5e74\u4ee3",
                                "20\u4e16\u7eaa30\u5e74\u4ee3",
                                "20\u4e16\u7eaa40\u5e74\u4ee3",
                                "20\u4e16\u7eaa50\u5e74\u4ee3",
                                "20\u4e16\u7eaa60\u5e74\u4ee3",
                                "20\u4e16\u7eaa70\u5e74\u4ee3",
                                "20\u4e16\u7eaa80\u5e74\u4ee3",
                                "20\u4e16\u7eaa90\u5e74\u4ee3",
                                "21\u4e16\u7eaa00\u5e74\u4ee3",
                                "21\u4e16\u7eaa10\u5e74\u4ee3",
                                "21\u4e16\u7eaa20\u5e74\u4ee3"
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "nameLocation": "middle",
                            "nameGap": 25,
                            "nameTextStyle": {
                                "fontSize": 14
                            },
                            "axisTick": {
                                "alignWithLabel": false
                            },
                            "inverse": false,
                            "boundaryGap": true,
                            "type": "value",
                            "splitLine": {
                                "show": true
                            },
                            "axisLine": {
                                "lineStyle": {
                                    "width": 1
                                }
                            },
                            "axisLabel": {
                                "interval": "auto",
                                "formatter": "{value} ",
                                "rotate": 0,
                                "margin": 8,
                                "textStyle": {
                                    "fontSize": 12
                                }
                            }
                        }
                    ],
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
                    ],
                    "dataZoom": [
                        {
                            "show": true,
                            "type": "inside",
                            "start": 0,
                            "end": 100,
                            "orient": "horizontal"
                        }
                    ]
                };
                myChart_8eeb8bbe1717459480d74a4c7f42a09b.setOption(option_8eeb8bbe1717459480d74a4c7f42a09b);
            }

        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
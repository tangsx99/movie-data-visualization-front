<template>
    <div >
        <div id="7fe6431f2da54ceba916acd350be4f54" style="width:100%;height:100%;"></div>
    </div>
</template>

<script>
    export default {
        name: "moviesAge",
        data(){
            return{

            }
        },
        methods: {

            myEcharts() {
                var myChart_7fe6431f2da54ceba916acd350be4f54 = this.$echarts.init(document.getElementById('7fe6431f2da54ceba916acd350be4f54'), 'light', {renderer: 'canvas'});

                var option_7fe6431f2da54ceba916acd350be4f54 = {
                    "title": [
                        {
                            // "text": "\u5404\u5e74\u4ee3\u4e0a\u699c\u5f71\u7247\u6570",
                            "left": "center",
                            "top": "top",
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
                    "series_id": 2471830,
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
                            "type": "bar",
                            "name": "\u7535\u5f71",
                            "data": [
                                1,
                                10,
                                11,
                                15,
                                35,
                                43,
                                50,
                                88,
                                203,
                                250,
                                143,
                                5
                            ],
                            "barCategoryGap": "20%",
                            "itemStyle":{
                                "normal":{
                                    "color":"#6495ED"
                                }
                            },
                            "label": {
                                "normal": {
                                    "show": true,
                                    "position": "top",
                                    "textStyle": {
                                        "fontSize": 12,
                                    }
                                },
                                "emphasis": {
                                    "show": true,
                                    "textStyle": {
                                        "fontSize": 12
                                    }
                                }
                            },
                            "markPoint": {
                                "data": [
                                    {
                                        "type": "max",
                                        "name": "Maximum",
                                        "symbol": "pin",
                                        "symbolSize": 50,
                                        "label": {
                                            "normal": {
                                                "textStyle": {
                                                    "color": "#fff"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "min",
                                        "name": "Minimum",
                                        "symbol": "pin",
                                        "symbolSize": 50,
                                        "label": {
                                            "normal": {
                                                "textStyle": {
                                                    "color": "#fff"
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            "markLine": {
                                "data": []
                            },
                            "seriesId": 2471830
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u7535\u5f71"
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
                            "type": "slider",
                            "start": 0,
                            "end": 100,
                            "orient": "horizontal"
                        },
                        {
                            "show": true,
                            "type": "inside",
                            "start": 10,
                            "end": 25,
                            "orient": "horizontal"
                        }
                    ]
                };
                myChart_7fe6431f2da54ceba916acd350be4f54.setOption(option_7fe6431f2da54ceba916acd350be4f54);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped lang="less">

</style>
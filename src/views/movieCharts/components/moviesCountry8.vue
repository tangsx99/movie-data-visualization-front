<template>
    <div>
        <div id="14bcdd4b71d04a728de20aa02260d18f" style="width:100%;height:100%;"></div>
    </div>
</template>

<script>
    export default {
        name: "moviesCountry8",
        methods:{
            myEcharts(){
                var myChart_14bcdd4b71d04a728de20aa02260d18f = this.$echarts.init(document.getElementById('14bcdd4b71d04a728de20aa02260d18f'), 'light', {renderer: 'canvas'});

                var option_14bcdd4b71d04a728de20aa02260d18f = {
                    "title": [
                        {
                            // "text": "\u4e0a\u699c\u7535\u5f71\u6570\u5927\u4e8e8\u90e8\u7684\u56fd\u5bb6\u548c\u5730\u533a",
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
                    "series_id": 905004,
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
                            "name": "\u56fd\u5bb6/\u5730\u533a",
                            "data": [
                                382,
                                53,
                                65,
                                63,
                                151,
                                125,
                                68,
                                11,
                                10,
                                75,
                                25,
                                15,
                                34,
                                35,
                                10,
                                16,
                                13,
                                10,
                                16,
                                9,
                                27
                            ],
                            "barCategoryGap": "20%",
                            "itemStyle":{
                                "normal":{
                                    "color":"#6495ED"
                                }
                            },
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
                                    }
                                ]
                            },
                            "markLine": {
                                "data": []
                            },
                            "seriesId": 905004
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u56fd\u5bb6/\u5730\u533a"
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
                                "interval": 0,
                                "rotate": 30,
                                "margin": 8,
                                "textStyle": {
                                    "fontSize": 12
                                }
                            },
                            "data": [
                                "\u7f8e\u56fd",
                                "\u4e2d\u56fd\u5927\u9646",
                                "\u4e2d\u56fd\u9999\u6e2f",
                                "\u610f\u5927\u5229",
                                "\u6cd5\u56fd",
                                "\u82f1\u56fd",
                                "\u5fb7\u56fd",
                                "\u5370\u5ea6",
                                "\u745e\u58eb",
                                "\u65e5\u672c",
                                "\u897f\u73ed\u7259",
                                "\u897f\u5fb7",
                                "\u4e2d\u56fd\u53f0\u6e7e",
                                "\u97e9\u56fd",
                                "\u6ce2\u5170",
                                "\u6bd4\u5229\u65f6",
                                "\u82cf\u8054",
                                "\u5965\u5730\u5229",
                                "\u745e\u5178",
                                "\u6fb3\u5927\u5229\u4e9a",
                                "\u52a0\u62ff\u5927"
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
                                "rotate": 30,
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
                myChart_14bcdd4b71d04a728de20aa02260d18f.setOption(option_14bcdd4b71d04a728de20aa02260d18f);

            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
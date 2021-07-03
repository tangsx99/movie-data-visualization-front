<template>
    <div>
        <div id="bff7ab07a9a64c2e8386cfb8ca6a0f8f" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "MyNation",
        methods:{
            myEcharts(){

                var myChart_bff7ab07a9a64c2e8386cfb8ca6a0f8f = this.$echarts.init(document.getElementById('bff7ab07a9a64c2e8386cfb8ca6a0f8f'), 'light', {renderer: 'canvas'});

                var option_bff7ab07a9a64c2e8386cfb8ca6a0f8f = {
                    "title": [
                        {
                            "text": "\u6211\u548c\u6211\u7684\u7956\u56fd\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 3918509,
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
                            "name": "\u60c5\u611f\u79ef\u6781\u5ea6",
                            "symbol": "emptyCircle",
                            "symbolSize": 4,
                            "smooth": true,
                            "step": false,
                            "showSymbol": true,
                            "data": [
                                [
                                    0,
                                    0.4999999907511957
                                ],
                                [
                                    1,
                                    0.49999999999999645
                                ],
                                [
                                    2,
                                    0.5
                                ],
                                [
                                    3,
                                    0.4999999999999991
                                ],
                                [
                                    4,
                                    0.28324047486267745
                                ],
                                [
                                    5,
                                    0.4996173213478132
                                ],
                                [
                                    6,
                                    0.5
                                ],
                                [
                                    7,
                                    0.49258868086236285
                                ],
                                [
                                    8,
                                    0.5
                                ],
                                [
                                    9,
                                    0.49999632612879275
                                ],
                                [
                                    10,
                                    0.49999999999999956
                                ],
                                [
                                    11,
                                    0.4999999999032243
                                ],
                                [
                                    12,
                                    0.16503061685665843
                                ],
                                [
                                    13,
                                    0.4999998022860781
                                ],
                                [
                                    14,
                                    0.47253617479020316
                                ],
                                [
                                    15,
                                    0.4854101741964182
                                ],
                                [
                                    16,
                                    0.5
                                ],
                                [
                                    17,
                                    0.49999998642221044
                                ],
                                [
                                    18,
                                    0.41590950701402896
                                ],
                                [
                                    19,
                                    0.5
                                ],
                                [
                                    20,
                                    0.49998760553915267
                                ],
                                [
                                    21,
                                    -0.25760455469323285
                                ],
                                [
                                    22,
                                    0.032348080214669284
                                ],
                                [
                                    23,
                                    0.49999914246520993
                                ],
                                [
                                    24,
                                    0.49999671029668535
                                ],
                                [
                                    25,
                                    0.49999999999600253
                                ],
                                [
                                    26,
                                    0.4999912549475636
                                ],
                                [
                                    27,
                                    0.5
                                ],
                                [
                                    28,
                                    0.49999982617018834
                                ],
                                [
                                    29,
                                    0.4999999999997
                                ],
                                [
                                    30,
                                    0.4780830458394343
                                ],
                                [
                                    31,
                                    0.49999902457456
                                ],
                                [
                                    32,
                                    0.5
                                ],
                                [
                                    33,
                                    0.5
                                ],
                                [
                                    34,
                                    0.5
                                ],
                                [
                                    35,
                                    0.4999999946588467
                                ],
                                [
                                    36,
                                    0.49392727101398115
                                ],
                                [
                                    37,
                                    0.4975982607240639
                                ],
                                [
                                    38,
                                    0.49999965264515567
                                ],
                                [
                                    39,
                                    0.4994005698062728
                                ]
                            ],
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
                            "lineStyle": {
                                "normal": {
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "areaStyle": {
                                "opacity": 0.3
                            },
                            "markPoint": {
                                "data": []
                            },
                            "markLine": {
                                "data": []
                            },
                            "seriesId": 3918509
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u60c5\u611f\u79ef\u6781\u5ea6"
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
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23,
                                24,
                                25,
                                26,
                                27,
                                28,
                                29,
                                30,
                                31,
                                32,
                                33,
                                34,
                                35,
                                36,
                                37,
                                38,
                                39
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
                            "start": 50,
                            "end": 100,
                            "orient": "horizontal"
                        }
                    ]
                };
                myChart_bff7ab07a9a64c2e8386cfb8ca6a0f8f.setOption(option_bff7ab07a9a64c2e8386cfb8ca6a0f8f);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
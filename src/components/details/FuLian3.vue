<template>
    <div>
        <div id="bb14be218ff34708a2e06ca0db667476" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "FuLian3",
        methods:{
            myEcharts(){

                var myChart_bb14be218ff34708a2e06ca0db667476 = this.$echarts.init(document.getElementById('bb14be218ff34708a2e06ca0db667476'), 'light', {renderer: 'canvas'});

                var option_bb14be218ff34708a2e06ca0db667476 = {
                    "title": [
                        {
                            "text": "\u590d\u4ec7\u8005\u8054\u76df3\uff1a\u65e0\u9650\u6218\u4e89\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 1705643,
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
                                    -0.20527859421888361
                                ],
                                [
                                    1,
                                    -0.4396108958298437
                                ],
                                [
                                    2,
                                    0.4999918169885822
                                ],
                                [
                                    3,
                                    0.4232112893668819
                                ],
                                [
                                    4,
                                    0.06766729052759546
                                ],
                                [
                                    5,
                                    0.49170419039687774
                                ],
                                [
                                    6,
                                    -0.49994136208361184
                                ],
                                [
                                    7,
                                    0.49998059238961345
                                ],
                                [
                                    8,
                                    0.46969900260033015
                                ],
                                [
                                    9,
                                    0.4650852038734765
                                ],
                                [
                                    10,
                                    0.49484824393455806
                                ],
                                [
                                    11,
                                    -0.49986211109354883
                                ],
                                [
                                    12,
                                    -0.2762529547193775
                                ],
                                [
                                    13,
                                    0.49868481087885386
                                ],
                                [
                                    14,
                                    0.041955795887271385
                                ],
                                [
                                    15,
                                    0.39251479246762944
                                ],
                                [
                                    16,
                                    0.49275614821678815
                                ],
                                [
                                    17,
                                    -0.2531169215736053
                                ],
                                [
                                    18,
                                    -0.49779219204164626
                                ],
                                [
                                    19,
                                    -0.46675999081297814
                                ],
                                [
                                    20,
                                    0.2516904841559937
                                ],
                                [
                                    21,
                                    0.2385677925265639
                                ],
                                [
                                    22,
                                    0.4999512975148176
                                ],
                                [
                                    23,
                                    -0.39638267375250547
                                ],
                                [
                                    24,
                                    0.49999995545827813
                                ],
                                [
                                    25,
                                    0.4992013603484533
                                ],
                                [
                                    26,
                                    0.4999999979959231
                                ],
                                [
                                    27,
                                    0.49999999997972866
                                ],
                                [
                                    28,
                                    -0.0006206054294861651
                                ],
                                [
                                    29,
                                    -0.4842955352969607
                                ],
                                [
                                    30,
                                    -0.33045928831738036
                                ],
                                [
                                    31,
                                    0.006275901938862405
                                ],
                                [
                                    32,
                                    0.4560748658656908
                                ],
                                [
                                    33,
                                    0.49999999529189276
                                ],
                                [
                                    34,
                                    0.4973168747192137
                                ],
                                [
                                    35,
                                    0.49999999995455124
                                ],
                                [
                                    36,
                                    -0.047452272945551766
                                ],
                                [
                                    37,
                                    0.4999848655793373
                                ],
                                [
                                    38,
                                    0.4999999999993774
                                ],
                                [
                                    39,
                                    0.4998559606898847
                                ],
                                [
                                    40,
                                    0.4887845309145282
                                ],
                                [
                                    41,
                                    0.4999997271098139
                                ],
                                [
                                    42,
                                    0.49830177193114
                                ],
                                [
                                    43,
                                    0.4995527716526855
                                ],
                                [
                                    44,
                                    -0.4989276245093843
                                ],
                                [
                                    45,
                                    0.4051657020921895
                                ],
                                [
                                    46,
                                    0.4993260885853732
                                ],
                                [
                                    47,
                                    0.49999118358531236
                                ],
                                [
                                    48,
                                    -0.037442107636990074
                                ],
                                [
                                    49,
                                    0.4163870290869808
                                ],
                                [
                                    50,
                                    0.49999999999826716
                                ],
                                [
                                    51,
                                    0.49999999999999023
                                ],
                                [
                                    52,
                                    0.31280170199204227
                                ],
                                [
                                    53,
                                    0.49987665342421994
                                ],
                                [
                                    54,
                                    0.49999483777421094
                                ],
                                [
                                    55,
                                    0.4999993979479417
                                ],
                                [
                                    56,
                                    0.49999261412207485
                                ],
                                [
                                    57,
                                    0.1140134782897454
                                ],
                                [
                                    58,
                                    -0.4354025471895334
                                ],
                                [
                                    59,
                                    -0.4999962123658056
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
                            "seriesId": 1705643
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
                                39,
                                40,
                                41,
                                42,
                                43,
                                44,
                                45,
                                46,
                                47,
                                48,
                                49,
                                50,
                                51,
                                52,
                                53,
                                54,
                                55,
                                56,
                                57,
                                58,
                                59
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
                myChart_bb14be218ff34708a2e06ca0db667476.setOption(option_bb14be218ff34708a2e06ca0db667476);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
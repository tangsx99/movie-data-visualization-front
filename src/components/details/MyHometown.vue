<template>
    <div>
        <div id="8ae923d4837a4fce9651ded55c1cb675" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "MyHometown",
        methods:{
            myEcharts(){

                var myChart_8ae923d4837a4fce9651ded55c1cb675 = this.$echarts.init(document.getElementById('8ae923d4837a4fce9651ded55c1cb675'), 'light', {renderer: 'canvas'});

                var option_8ae923d4837a4fce9651ded55c1cb675 = {
                    "title": [
                        {
                            "text": "\u6211\u548c\u6211\u7684\u5bb6\u4e61\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 5279328,
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
                                    0.4996394285740423
                                ],
                                [
                                    1,
                                    0.0668645155552986
                                ],
                                [
                                    2,
                                    0.4999674266317685
                                ],
                                [
                                    3,
                                    0.26847590170987456
                                ],
                                [
                                    4,
                                    0.49999978228452
                                ],
                                [
                                    5,
                                    0.4999997183588565
                                ],
                                [
                                    6,
                                    0.4999999999998572
                                ],
                                [
                                    7,
                                    0.49966264824400464
                                ],
                                [
                                    8,
                                    0.4999999999791527
                                ],
                                [
                                    9,
                                    0.4999970763051249
                                ],
                                [
                                    10,
                                    0.36788406194365963
                                ],
                                [
                                    11,
                                    0.49999485970994295
                                ],
                                [
                                    12,
                                    0.36409317806675434
                                ],
                                [
                                    13,
                                    0.4924239931403047
                                ],
                                [
                                    14,
                                    0.4999984438043298
                                ],
                                [
                                    15,
                                    0.4903232300196221
                                ],
                                [
                                    16,
                                    0.49999999998205635
                                ],
                                [
                                    17,
                                    0.493702485845275
                                ],
                                [
                                    18,
                                    0.43488031604282873
                                ],
                                [
                                    19,
                                    -0.3344189869601851
                                ],
                                [
                                    20,
                                    0.4983791959899293
                                ],
                                [
                                    21,
                                    0.3257103393509093
                                ],
                                [
                                    22,
                                    0.49954486626291383
                                ],
                                [
                                    23,
                                    0.49999932976225514
                                ],
                                [
                                    24,
                                    0.4999999999981828
                                ],
                                [
                                    25,
                                    0.007633142809184368
                                ],
                                [
                                    26,
                                    0.4999999999999909
                                ],
                                [
                                    27,
                                    -0.21408956385587263
                                ],
                                [
                                    28,
                                    0.5
                                ],
                                [
                                    29,
                                    0.261471276945888
                                ],
                                [
                                    30,
                                    0.4999999931319412
                                ],
                                [
                                    31,
                                    -0.49070002665579604
                                ],
                                [
                                    32,
                                    0.3810554112565151
                                ],
                                [
                                    33,
                                    0.20595147278171888
                                ],
                                [
                                    34,
                                    0.49981629205305367
                                ],
                                [
                                    35,
                                    0.4363143093185555
                                ],
                                [
                                    36,
                                    0.026778395075726324
                                ],
                                [
                                    37,
                                    0.5
                                ],
                                [
                                    38,
                                    0.5
                                ],
                                [
                                    39,
                                    0.3443308806921992
                                ],
                                [
                                    40,
                                    0.4986915742126776
                                ],
                                [
                                    41,
                                    0.4084656492540223
                                ],
                                [
                                    42,
                                    0.25803369655249575
                                ],
                                [
                                    43,
                                    0.49999151251878793
                                ],
                                [
                                    44,
                                    0.49661235926493974
                                ],
                                [
                                    45,
                                    0.4999999999995992
                                ],
                                [
                                    46,
                                    0.4981367001564083
                                ],
                                [
                                    47,
                                    0.04604429171820701
                                ],
                                [
                                    48,
                                    -0.21658980136258332
                                ],
                                [
                                    49,
                                    -0.20638402840439773
                                ],
                                [
                                    50,
                                    0.49999999997332933
                                ],
                                [
                                    51,
                                    0.37079407858973945
                                ],
                                [
                                    52,
                                    0.3620558442503563
                                ],
                                [
                                    53,
                                    0.49999992173623287
                                ],
                                [
                                    54,
                                    0.49999999999999223
                                ],
                                [
                                    55,
                                    0.5
                                ],
                                [
                                    56,
                                    0.1158334999966475
                                ],
                                [
                                    57,
                                    0.4871762631027109
                                ],
                                [
                                    58,
                                    0.4999731475459357
                                ],
                                [
                                    59,
                                    0.35810615783729005
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
                            "seriesId": 5279328
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
                myChart_8ae923d4837a4fce9651ded55c1cb675.setOption(option_8ae923d4837a4fce9651ded55c1cb675);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
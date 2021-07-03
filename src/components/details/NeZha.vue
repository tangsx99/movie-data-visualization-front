<template>
    <div>
        <div id="be01174eb53c4e6d9cb2600f6869c866" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "nezha",
        methods: {
            myCharts(){

                var myChart_be01174eb53c4e6d9cb2600f6869c866 = this.$echarts.init(document.getElementById('be01174eb53c4e6d9cb2600f6869c866'), 'light', {renderer: 'canvas'});

                var option_be01174eb53c4e6d9cb2600f6869c866 = {
                    "title": [
                        {
                            "text": "\u54ea\u5412\u4e4b\u9b54\u7ae5\u964d\u4e16\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 3089036,
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
                                    0.4170955427747691
                                ],
                                [
                                    1,
                                    0.49999997043870614
                                ],
                                [
                                    2,
                                    -0.4302687801821571
                                ],
                                [
                                    3,
                                    0.46842636496951884
                                ],
                                [
                                    4,
                                    0.49999712801033735
                                ],
                                [
                                    5,
                                    0.499999999999879
                                ],
                                [
                                    6,
                                    0.5
                                ],
                                [
                                    7,
                                    0.4980024759699724
                                ],
                                [
                                    8,
                                    0.22923114063515748
                                ],
                                [
                                    9,
                                    0.49999999456504485
                                ],
                                [
                                    10,
                                    0.49999911934958774
                                ],
                                [
                                    11,
                                    0.49999421397857347
                                ],
                                [
                                    12,
                                    0.4999999999999565
                                ],
                                [
                                    13,
                                    0.4998238658748625
                                ],
                                [
                                    14,
                                    0.4998704088567101
                                ],
                                [
                                    15,
                                    0.48812265763680784
                                ],
                                [
                                    16,
                                    0.4999927383446323
                                ],
                                [
                                    17,
                                    0.4851816304841565
                                ],
                                [
                                    18,
                                    0.499338797423598
                                ],
                                [
                                    19,
                                    0.49983961806373267
                                ],
                                [
                                    20,
                                    0.49991990672783315
                                ],
                                [
                                    21,
                                    0.4999492681000779
                                ],
                                [
                                    22,
                                    0.28605991327473645
                                ],
                                [
                                    23,
                                    0.45569036370707816
                                ],
                                [
                                    24,
                                    0.5
                                ],
                                [
                                    25,
                                    0.4984136731295462
                                ],
                                [
                                    26,
                                    0.4997805089765527
                                ],
                                [
                                    27,
                                    0.3625423351107787
                                ],
                                [
                                    28,
                                    0.49999970367278956
                                ],
                                [
                                    29,
                                    0.49999999990280997
                                ],
                                [
                                    30,
                                    0.49998638773363824
                                ],
                                [
                                    31,
                                    0.4994937023644007
                                ],
                                [
                                    32,
                                    0.49999999999844347
                                ],
                                [
                                    33,
                                    0.49901009474779745
                                ],
                                [
                                    34,
                                    0.35975675707397825
                                ],
                                [
                                    35,
                                    0.4893774556975954
                                ],
                                [
                                    36,
                                    0.34028830706487867
                                ],
                                [
                                    37,
                                    0.4999998270026169
                                ],
                                [
                                    38,
                                    -0.40243423602155504
                                ],
                                [
                                    39,
                                    0.40788879092236374
                                ],
                                [
                                    40,
                                    0.3625423351107787
                                ],
                                [
                                    41,
                                    0.49912259256641023
                                ],
                                [
                                    42,
                                    0.49999970367278956
                                ],
                                [
                                    43,
                                    0.49999999997820654
                                ],
                                [
                                    44,
                                    0.4994937023644007
                                ],
                                [
                                    45,
                                    0.4987120052313717
                                ],
                                [
                                    46,
                                    0.4999999620166694
                                ],
                                [
                                    47,
                                    0.49999999999844347
                                ],
                                [
                                    48,
                                    0.04102693530478774
                                ],
                                [
                                    49,
                                    0.46919590307821823
                                ],
                                [
                                    50,
                                    0.4999999999953162
                                ],
                                [
                                    51,
                                    -0.03412177436307473
                                ],
                                [
                                    52,
                                    0.11455277097781358
                                ],
                                [
                                    53,
                                    0.1258116015997247
                                ],
                                [
                                    54,
                                    0.49999989208299034
                                ],
                                [
                                    55,
                                    0.498901202066506
                                ],
                                [
                                    56,
                                    0.4999999999999638
                                ],
                                [
                                    57,
                                    0.49999997888310044
                                ],
                                [
                                    58,
                                    0.022129927976819785
                                ],
                                [
                                    59,
                                    0.11582124640784786
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
                            "seriesId": 3089036
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
                myChart_be01174eb53c4e6d9cb2600f6869c866.setOption(option_be01174eb53c4e6d9cb2600f6869c866);
            }
        },
        mounted() {
            this.myCharts()
        }
    }
</script>

<style scoped>

</style>
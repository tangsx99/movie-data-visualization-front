<template>
    <div>
        <div id="d53bf9327d7b4ff58361d9dcddab2d3c" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "FeiChi",
        methods:{
            myEcharts(){

                var myChart_d53bf9327d7b4ff58361d9dcddab2d3c = this.$echarts.init(document.getElementById('d53bf9327d7b4ff58361d9dcddab2d3c'), 'light', {renderer: 'canvas'});

                var option_d53bf9327d7b4ff58361d9dcddab2d3c = {
                    "title": [
                        {
                            "text": "\u98de\u9a70\u4eba\u751f\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 8998120,
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
                                    0.4999999999969291
                                ],
                                [
                                    1,
                                    -0.06876536869116634
                                ],
                                [
                                    2,
                                    0.49996139093786096
                                ],
                                [
                                    3,
                                    0.4999981300407996
                                ],
                                [
                                    4,
                                    0.4994894531350629
                                ],
                                [
                                    5,
                                    0.49999999999926925
                                ],
                                [
                                    6,
                                    0.4999925732587477
                                ],
                                [
                                    7,
                                    0.4999999999994762
                                ],
                                [
                                    8,
                                    0.49999997245860184
                                ],
                                [
                                    9,
                                    0.4999999968486093
                                ],
                                [
                                    10,
                                    0.49999999668294803
                                ],
                                [
                                    11,
                                    0.4994537377497926
                                ],
                                [
                                    12,
                                    0.5
                                ],
                                [
                                    13,
                                    0.3204249558147988
                                ],
                                [
                                    14,
                                    0.5
                                ],
                                [
                                    15,
                                    0.49995604326559606
                                ],
                                [
                                    16,
                                    0.49999349298274687
                                ],
                                [
                                    17,
                                    0.49999999999919154
                                ],
                                [
                                    18,
                                    0.49515275352112276
                                ],
                                [
                                    19,
                                    0.49999999998020384
                                ],
                                [
                                    20,
                                    0.0
                                ],
                                [
                                    21,
                                    -0.4946013382809772
                                ],
                                [
                                    22,
                                    0.466223827456382
                                ],
                                [
                                    23,
                                    0.49999999998355227
                                ],
                                [
                                    24,
                                    0.49453455385977607
                                ],
                                [
                                    25,
                                    0.5
                                ],
                                [
                                    26,
                                    0.49993608328957895
                                ],
                                [
                                    27,
                                    0.4999947659153049
                                ],
                                [
                                    28,
                                    0.49087165534630894
                                ],
                                [
                                    29,
                                    0.4999992107094361
                                ],
                                [
                                    30,
                                    0.3873915585284645
                                ],
                                [
                                    31,
                                    0.45815046887541944
                                ],
                                [
                                    32,
                                    0.49996888582627863
                                ],
                                [
                                    33,
                                    0.4999815783878421
                                ],
                                [
                                    34,
                                    0.4570991020408519
                                ],
                                [
                                    35,
                                    0.46527818237325624
                                ],
                                [
                                    36,
                                    0.34560809699801864
                                ],
                                [
                                    37,
                                    0.49999972786429703
                                ],
                                [
                                    38,
                                    0.49999999999997424
                                ],
                                [
                                    39,
                                    -0.48467365774310733
                                ],
                                [
                                    40,
                                    0.40099360444552967
                                ],
                                [
                                    41,
                                    0.15186293770099346
                                ],
                                [
                                    42,
                                    0.4226219631435598
                                ],
                                [
                                    43,
                                    0.4996492519754241
                                ],
                                [
                                    44,
                                    0.49802042671220115
                                ],
                                [
                                    45,
                                    0.49999984541269227
                                ],
                                [
                                    46,
                                    0.4999648650114791
                                ],
                                [
                                    47,
                                    0.4999995270346419
                                ],
                                [
                                    48,
                                    0.4999973038787717
                                ],
                                [
                                    49,
                                    0.49510934029418874
                                ],
                                [
                                    50,
                                    0.46334999477485705
                                ],
                                [
                                    51,
                                    0.4999846252943686
                                ],
                                [
                                    52,
                                    -0.39885452581926484
                                ],
                                [
                                    53,
                                    0.4983177985909698
                                ],
                                [
                                    54,
                                    0.4999994936644031
                                ],
                                [
                                    55,
                                    0.17298317056258217
                                ],
                                [
                                    56,
                                    0.4981570326890218
                                ],
                                [
                                    57,
                                    -0.37565429276912865
                                ],
                                [
                                    58,
                                    0.43514833140812037
                                ],
                                [
                                    59,
                                    0.49999999990375965
                                ],
                                [
                                    60,
                                    0.14786115985658854
                                ],
                                [
                                    61,
                                    0.49999999818443497
                                ],
                                [
                                    62,
                                    -0.20166582798464328
                                ],
                                [
                                    63,
                                    0.49999887283684386
                                ],
                                [
                                    64,
                                    0.49362996156709515
                                ],
                                [
                                    65,
                                    -0.48191820191600254
                                ],
                                [
                                    66,
                                    0.49999102813966256
                                ],
                                [
                                    67,
                                    0.49947503182167874
                                ],
                                [
                                    68,
                                    0.49999844681761585
                                ],
                                [
                                    69,
                                    0.4769795575884397
                                ],
                                [
                                    70,
                                    0.49405963143379594
                                ],
                                [
                                    71,
                                    0.49912419702382727
                                ],
                                [
                                    72,
                                    0.4989132515822333
                                ],
                                [
                                    73,
                                    0.4999995437545709
                                ],
                                [
                                    74,
                                    0.03344824408491376
                                ],
                                [
                                    75,
                                    0.4999999999820426
                                ],
                                [
                                    76,
                                    0.4995721002853064
                                ],
                                [
                                    77,
                                    0.499999988802741
                                ],
                                [
                                    78,
                                    -0.012121801741077687
                                ],
                                [
                                    79,
                                    0.49999926424489316
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
                            "seriesId": 8998120
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
                                59,
                                60,
                                61,
                                62,
                                63,
                                64,
                                65,
                                66,
                                67,
                                68,
                                69,
                                70,
                                71,
                                72,
                                73,
                                74,
                                75,
                                76,
                                77,
                                78,
                                79
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
                myChart_d53bf9327d7b4ff58361d9dcddab2d3c.setOption(option_d53bf9327d7b4ff58361d9dcddab2d3c);

            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
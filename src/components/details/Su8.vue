<template>
    <div>
        <div id="d5e26ba300294d8789d116bd679542ca" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "Su8",
        methods:{
            myEcharts(){

                var myChart_d5e26ba300294d8789d116bd679542ca = this.$echarts.init(document.getElementById('d5e26ba300294d8789d116bd679542ca'), 'light', {renderer: 'canvas'});

                var option_d5e26ba300294d8789d116bd679542ca = {
                    "title": [
                        {
                            "text": "\u901f\u5ea6\u4e0e\u6fc0\u60c58\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 7332696,
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
                                    0.49902498180570865
                                ],
                                [
                                    1,
                                    0.46512240489293166
                                ],
                                [
                                    2,
                                    -0.18274544349154231
                                ],
                                [
                                    3,
                                    0.4909713563499146
                                ],
                                [
                                    4,
                                    -0.4700437144739865
                                ],
                                [
                                    5,
                                    0.4585145945587852
                                ],
                                [
                                    6,
                                    0.22213130869177677
                                ],
                                [
                                    7,
                                    0.4873115443374759
                                ],
                                [
                                    8,
                                    0.3094544776094751
                                ],
                                [
                                    9,
                                    0.040633224047100014
                                ],
                                [
                                    10,
                                    -0.34927375213027956
                                ],
                                [
                                    11,
                                    0.49998033115516194
                                ],
                                [
                                    12,
                                    -0.4985349084950944
                                ],
                                [
                                    13,
                                    0.43120199563927963
                                ],
                                [
                                    14,
                                    0.49999999819501717
                                ],
                                [
                                    15,
                                    0.4978097521823882
                                ],
                                [
                                    16,
                                    0.11554350323171136
                                ],
                                [
                                    17,
                                    0.30147628136037985
                                ],
                                [
                                    18,
                                    0.4420825796847849
                                ],
                                [
                                    19,
                                    0.14083971244547566
                                ],
                                [
                                    20,
                                    0.4281350047928195
                                ],
                                [
                                    21,
                                    0.4974666619103266
                                ],
                                [
                                    22,
                                    0.3906611241074086
                                ],
                                [
                                    23,
                                    0.49612489112057534
                                ],
                                [
                                    24,
                                    0.22450118839313693
                                ],
                                [
                                    25,
                                    0.4999982572004684
                                ],
                                [
                                    26,
                                    0.3449224361183476
                                ],
                                [
                                    27,
                                    -0.40128307393121865
                                ],
                                [
                                    28,
                                    0.08587960078289358
                                ],
                                [
                                    29,
                                    0.088666143723657
                                ],
                                [
                                    30,
                                    0.4963376089099012
                                ],
                                [
                                    31,
                                    0.3332838318278394
                                ],
                                [
                                    32,
                                    0.3058984392751015
                                ],
                                [
                                    33,
                                    -0.24082782918915524
                                ],
                                [
                                    34,
                                    0.22977284164287282
                                ],
                                [
                                    35,
                                    -0.04219909403668276
                                ],
                                [
                                    36,
                                    -0.4211450521994775
                                ],
                                [
                                    37,
                                    0.04225757658992568
                                ],
                                [
                                    38,
                                    -0.04788768308223168
                                ],
                                [
                                    39,
                                    -0.4997662683170374
                                ],
                                [
                                    40,
                                    -0.1433045975732855
                                ],
                                [
                                    41,
                                    -0.421333968278517
                                ],
                                [
                                    42,
                                    0.4996188380264951
                                ],
                                [
                                    43,
                                    0.4459367544192766
                                ],
                                [
                                    44,
                                    -0.3021390374331552
                                ],
                                [
                                    45,
                                    0.49997451151543304
                                ],
                                [
                                    46,
                                    -0.24605972074505034
                                ],
                                [
                                    47,
                                    0.4999999999997651
                                ],
                                [
                                    48,
                                    -0.2723511029497484
                                ],
                                [
                                    49,
                                    0.4732418119183973
                                ],
                                [
                                    50,
                                    0.49999710104574335
                                ],
                                [
                                    51,
                                    0.4994880345485275
                                ],
                                [
                                    52,
                                    0.4992846341819539
                                ],
                                [
                                    53,
                                    0.19814268691206893
                                ],
                                [
                                    54,
                                    0.18030603083360408
                                ],
                                [
                                    55,
                                    0.30740544035762585
                                ],
                                [
                                    56,
                                    -0.4101781326655001
                                ],
                                [
                                    57,
                                    -0.05232154149013324
                                ],
                                [
                                    58,
                                    0.4339402886592537
                                ],
                                [
                                    59,
                                    0.26986859596618906
                                ],
                                [
                                    60,
                                    -0.38138355330940954
                                ],
                                [
                                    61,
                                    0.4998579952952219
                                ],
                                [
                                    62,
                                    0.49999918829727474
                                ],
                                [
                                    63,
                                    0.4486264855157235
                                ],
                                [
                                    64,
                                    0.4770262544609557
                                ],
                                [
                                    65,
                                    -0.4659844703585889
                                ],
                                [
                                    66,
                                    0.07286661715590981
                                ],
                                [
                                    67,
                                    -0.4853365031602066
                                ],
                                [
                                    68,
                                    0.4989506925461249
                                ],
                                [
                                    69,
                                    0.4051643965673838
                                ],
                                [
                                    70,
                                    -0.04786273201600888
                                ],
                                [
                                    71,
                                    0.49999999243727766
                                ],
                                [
                                    72,
                                    0.23102253441747012
                                ],
                                [
                                    73,
                                    0.44054867438662404
                                ],
                                [
                                    74,
                                    0.44040835127182454
                                ],
                                [
                                    75,
                                    0.44727593971335067
                                ],
                                [
                                    76,
                                    0.0
                                ],
                                [
                                    77,
                                    0.4959276121086088
                                ],
                                [
                                    78,
                                    -0.41596024886503
                                ],
                                [
                                    79,
                                    0.11127080773834819
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
                            "seriesId": 7332696
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
                myChart_d5e26ba300294d8789d116bd679542ca.setOption(option_d5e26ba300294d8789d116bd679542ca);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
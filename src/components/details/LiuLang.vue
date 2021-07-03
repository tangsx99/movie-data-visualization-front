<template>
    <div>
        <div id="2627eb2da1c141a4ba6660796126ff92" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "LiuLang",
        methods:{
            myEcharts(){

                var myChart_2627eb2da1c141a4ba6660796126ff92 = this.$echarts.init(document.getElementById('2627eb2da1c141a4ba6660796126ff92'), 'light', {renderer: 'canvas'});

                var option_2627eb2da1c141a4ba6660796126ff92 = {
                    "title": [
                        {
                            "text": "\u6d41\u6d6a\u5730\u7403\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 6875186,
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
                                    0.49999999897497527
                                ],
                                [
                                    1,
                                    0.49999999704421016
                                ],
                                [
                                    2,
                                    0.49999999999997136
                                ],
                                [
                                    3,
                                    0.5
                                ],
                                [
                                    4,
                                    0.4999999999999998
                                ],
                                [
                                    5,
                                    0.5
                                ],
                                [
                                    6,
                                    0.4999999997572102
                                ],
                                [
                                    7,
                                    0.5
                                ],
                                [
                                    8,
                                    0.4999613385813674
                                ],
                                [
                                    9,
                                    0.47174270133345764
                                ],
                                [
                                    10,
                                    0.49999999493874503
                                ],
                                [
                                    11,
                                    0.5
                                ],
                                [
                                    12,
                                    0.5
                                ],
                                [
                                    13,
                                    0.49930087202506024
                                ],
                                [
                                    14,
                                    0.5
                                ],
                                [
                                    15,
                                    0.4999999999953373
                                ],
                                [
                                    16,
                                    0.4999999999997322
                                ],
                                [
                                    17,
                                    0.4999999999999847
                                ],
                                [
                                    18,
                                    0.5
                                ],
                                [
                                    19,
                                    -0.07819521057976109
                                ],
                                [
                                    20,
                                    0.16833279105297327
                                ],
                                [
                                    21,
                                    0.5
                                ],
                                [
                                    22,
                                    0.4999797074113146
                                ],
                                [
                                    23,
                                    0.5
                                ],
                                [
                                    24,
                                    0.49999737684096557
                                ],
                                [
                                    25,
                                    0.5
                                ],
                                [
                                    26,
                                    0.49995983141368106
                                ],
                                [
                                    27,
                                    0.49999999999998956
                                ],
                                [
                                    28,
                                    0.4999999999986624
                                ],
                                [
                                    29,
                                    0.4999999999979823
                                ],
                                [
                                    30,
                                    0.49999346624047236
                                ],
                                [
                                    31,
                                    0.49999991035443636
                                ],
                                [
                                    32,
                                    0.2921004533710321
                                ],
                                [
                                    33,
                                    0.4327975192461446
                                ],
                                [
                                    34,
                                    -0.31601096539109863
                                ],
                                [
                                    35,
                                    0.5
                                ],
                                [
                                    36,
                                    0.4999999999989788
                                ],
                                [
                                    37,
                                    0.4999909559782658
                                ],
                                [
                                    38,
                                    0.49966455845564905
                                ],
                                [
                                    39,
                                    0.4999999972263647
                                ],
                                [
                                    40,
                                    0.4999998280899254
                                ],
                                [
                                    41,
                                    0.4978880572825397
                                ],
                                [
                                    42,
                                    0.4999927505294558
                                ],
                                [
                                    43,
                                    0.5
                                ],
                                [
                                    44,
                                    0.4948535476857274
                                ],
                                [
                                    45,
                                    0.4999999999999958
                                ],
                                [
                                    46,
                                    0.4789061374806587
                                ],
                                [
                                    47,
                                    0.4939417072644875
                                ],
                                [
                                    48,
                                    -0.33179213732447466
                                ],
                                [
                                    49,
                                    0.5
                                ],
                                [
                                    50,
                                    0.5
                                ],
                                [
                                    51,
                                    0.49999209700478353
                                ],
                                [
                                    52,
                                    0.4994034763375982
                                ],
                                [
                                    53,
                                    0.3065858046114116
                                ],
                                [
                                    54,
                                    0.4999999977197689
                                ],
                                [
                                    55,
                                    0.5
                                ],
                                [
                                    56,
                                    0.49999999838823506
                                ],
                                [
                                    57,
                                    0.3103634532403483
                                ],
                                [
                                    58,
                                    0.4982001909389361
                                ],
                                [
                                    59,
                                    0.499999999999998
                                ],
                                [
                                    60,
                                    -0.31601096539109863
                                ],
                                [
                                    61,
                                    0.4999909559782658
                                ],
                                [
                                    62,
                                    0.3065858046114116
                                ],
                                [
                                    63,
                                    0.4999999977197689
                                ],
                                [
                                    64,
                                    0.4999441535304481
                                ],
                                [
                                    65,
                                    -0.47956675533123627
                                ],
                                [
                                    66,
                                    0.4999783532974522
                                ],
                                [
                                    67,
                                    0.5
                                ],
                                [
                                    68,
                                    0.49999999838823506
                                ],
                                [
                                    69,
                                    0.4999927505294558
                                ],
                                [
                                    70,
                                    0.488165187262779
                                ],
                                [
                                    71,
                                    0.5
                                ],
                                [
                                    72,
                                    0.3103634532403483
                                ],
                                [
                                    73,
                                    0.3111622824785688
                                ],
                                [
                                    74,
                                    0.49999993521339614
                                ],
                                [
                                    75,
                                    0.49998741761120735
                                ],
                                [
                                    76,
                                    0.5
                                ],
                                [
                                    77,
                                    0.4982001909389361
                                ],
                                [
                                    78,
                                    0.4948535476857274
                                ],
                                [
                                    79,
                                    0.4789061374806587
                                ],
                                [
                                    80,
                                    0.1722267775471985
                                ],
                                [
                                    81,
                                    0.499294471059738
                                ],
                                [
                                    82,
                                    0.49998949220989886
                                ],
                                [
                                    83,
                                    0.5
                                ],
                                [
                                    84,
                                    -0.05732417720840377
                                ],
                                [
                                    85,
                                    0.49684920943287914
                                ],
                                [
                                    86,
                                    0.4999999998683031
                                ],
                                [
                                    87,
                                    0.4999999947943301
                                ],
                                [
                                    88,
                                    0.5
                                ],
                                [
                                    89,
                                    0.5
                                ],
                                [
                                    90,
                                    0.4930020356209416
                                ],
                                [
                                    91,
                                    0.4999999968338422
                                ],
                                [
                                    92,
                                    0.4953772887755966
                                ],
                                [
                                    93,
                                    0.49999319753419713
                                ],
                                [
                                    94,
                                    0.49991587973155327
                                ],
                                [
                                    95,
                                    0.49999999999177325
                                ],
                                [
                                    96,
                                    0.4985534451883884
                                ],
                                [
                                    97,
                                    0.4999688543236078
                                ],
                                [
                                    98,
                                    0.4977970158831446
                                ],
                                [
                                    99,
                                    0.5
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
                            "seriesId": 6875186
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
                                79,
                                80,
                                81,
                                82,
                                83,
                                84,
                                85,
                                86,
                                87,
                                88,
                                89,
                                90,
                                91,
                                92,
                                93,
                                94,
                                95,
                                96,
                                97,
                                98,
                                99
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
                myChart_2627eb2da1c141a4ba6660796126ff92.setOption(option_2627eb2da1c141a4ba6660796126ff92);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
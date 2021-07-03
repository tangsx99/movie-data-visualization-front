<template>
    <div>
        <div id="b05cff49aed94207baa734f0c025ea4f" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "LieHuo",
        methods:{
            myEcharts(){

                var myChart_b05cff49aed94207baa734f0c025ea4f = this.$echarts.init(document.getElementById('b05cff49aed94207baa734f0c025ea4f'), 'light', {renderer: 'canvas'});

                var option_b05cff49aed94207baa734f0c025ea4f = {
                    "title": [
                        {
                            "text": "\u70c8\u706b\u82f1\u96c4\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 7042415,
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
                                    0.49999287652089697
                                ],
                                [
                                    1,
                                    0.4999999999999978
                                ],
                                [
                                    2,
                                    0.4994658581794966
                                ],
                                [
                                    3,
                                    -0.016920315297359156
                                ],
                                [
                                    4,
                                    0.48599232568663664
                                ],
                                [
                                    5,
                                    0.4590394715330579
                                ],
                                [
                                    6,
                                    -0.4734009046216243
                                ],
                                [
                                    7,
                                    0.499997691667907
                                ],
                                [
                                    8,
                                    0.4999999769746243
                                ],
                                [
                                    9,
                                    -0.4480389413260517
                                ],
                                [
                                    10,
                                    0.4999999985975201
                                ],
                                [
                                    11,
                                    0.4801293508856097
                                ],
                                [
                                    12,
                                    0.3047990608864798
                                ],
                                [
                                    13,
                                    0.3335976247585484
                                ],
                                [
                                    14,
                                    0.4999999381576168
                                ],
                                [
                                    15,
                                    0.4398116174858949
                                ],
                                [
                                    16,
                                    0.4999810356031342
                                ],
                                [
                                    17,
                                    0.4998450716634766
                                ],
                                [
                                    18,
                                    -0.46508494434841485
                                ],
                                [
                                    19,
                                    0.4998677513668681
                                ],
                                [
                                    20,
                                    0.4999779692237938
                                ],
                                [
                                    21,
                                    0.16411519888363213
                                ],
                                [
                                    22,
                                    0.08886053952793926
                                ],
                                [
                                    23,
                                    0.4999885816926799
                                ],
                                [
                                    24,
                                    0.4999992024411958
                                ],
                                [
                                    25,
                                    -0.42847001123843176
                                ],
                                [
                                    26,
                                    0.4935565398211479
                                ],
                                [
                                    27,
                                    0.4999999858117068
                                ],
                                [
                                    28,
                                    -0.3914078849679026
                                ],
                                [
                                    29,
                                    0.19821586932928836
                                ],
                                [
                                    30,
                                    0.5
                                ],
                                [
                                    31,
                                    0.49994436903183004
                                ],
                                [
                                    32,
                                    -0.49911645167724195
                                ],
                                [
                                    33,
                                    0.4999999972215987
                                ],
                                [
                                    34,
                                    -0.3203841650349678
                                ],
                                [
                                    35,
                                    -0.4945884248025697
                                ],
                                [
                                    36,
                                    0.49999999303310916
                                ],
                                [
                                    37,
                                    0.49999992682826044
                                ],
                                [
                                    38,
                                    0.49999999999496425
                                ],
                                [
                                    39,
                                    0.4999999999999962
                                ],
                                [
                                    40,
                                    0.24528614057521525
                                ],
                                [
                                    41,
                                    0.4999993382108686
                                ],
                                [
                                    42,
                                    0.4925447495767694
                                ],
                                [
                                    43,
                                    0.32973075983960753
                                ],
                                [
                                    44,
                                    0.4745989852265956
                                ],
                                [
                                    45,
                                    0.4713690443506402
                                ],
                                [
                                    46,
                                    0.4023859107540363
                                ],
                                [
                                    47,
                                    0.40136511977056377
                                ],
                                [
                                    48,
                                    -0.3236416326498379
                                ],
                                [
                                    49,
                                    -0.19273162877790762
                                ],
                                [
                                    50,
                                    0.49999999726352695
                                ],
                                [
                                    51,
                                    0.5
                                ],
                                [
                                    52,
                                    0.496956100299334
                                ],
                                [
                                    53,
                                    0.49999996159459437
                                ],
                                [
                                    54,
                                    0.4876639153167347
                                ],
                                [
                                    55,
                                    0.4999979037457458
                                ],
                                [
                                    56,
                                    -0.4312253098443011
                                ],
                                [
                                    57,
                                    0.49960680345248254
                                ],
                                [
                                    58,
                                    0.49994607137290825
                                ],
                                [
                                    59,
                                    0.49999983709109197
                                ],
                                [
                                    60,
                                    0.07910871980725609
                                ],
                                [
                                    61,
                                    0.4999696099109795
                                ],
                                [
                                    62,
                                    0.4932067016429865
                                ],
                                [
                                    63,
                                    0.4977633272719446
                                ],
                                [
                                    64,
                                    0.49965497001918235
                                ],
                                [
                                    65,
                                    -0.44512737264678925
                                ],
                                [
                                    66,
                                    0.4999996294569172
                                ],
                                [
                                    67,
                                    0.27060776793308405
                                ],
                                [
                                    68,
                                    0.49985603584768923
                                ],
                                [
                                    69,
                                    -0.30563481443439877
                                ],
                                [
                                    70,
                                    0.49999999990998023
                                ],
                                [
                                    71,
                                    0.2169391731329693
                                ],
                                [
                                    72,
                                    -0.14336446663022084
                                ],
                                [
                                    73,
                                    0.4999517327645714
                                ],
                                [
                                    74,
                                    -0.10861634551029697
                                ],
                                [
                                    75,
                                    -0.4623655905505448
                                ],
                                [
                                    76,
                                    0.4999999999866285
                                ],
                                [
                                    77,
                                    0.499999999970379
                                ],
                                [
                                    78,
                                    0.4999999569330057
                                ],
                                [
                                    79,
                                    -0.4396534107946476
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
                            "seriesId": 7042415
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
                myChart_b05cff49aed94207baa734f0c025ea4f.setOption(option_b05cff49aed94207baa734f0c025ea4f);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
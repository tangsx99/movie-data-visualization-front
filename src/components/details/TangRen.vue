<template>
    <div>
        <div id="069c154a72e84cf7a16e2bd69ec29dd4" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "TangRen",
        methods:{
            myEcharts(){

                var myChart_069c154a72e84cf7a16e2bd69ec29dd4 = this.$echarts.init(document.getElementById('069c154a72e84cf7a16e2bd69ec29dd4'), 'light', {renderer: 'canvas'});

                var option_069c154a72e84cf7a16e2bd69ec29dd4 = {
                    "title": [
                        {
                            "text": "\u5510\u4eba\u8857\u63a2\u68482\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 8437803,
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
                                    0.2711433890902851
                                ],
                                [
                                    1,
                                    0.48159514948504056
                                ],
                                [
                                    2,
                                    0.49999999849864696
                                ],
                                [
                                    3,
                                    0.4999999999953546
                                ],
                                [
                                    4,
                                    0.49999861838805815
                                ],
                                [
                                    5,
                                    0.4999998108427144
                                ],
                                [
                                    6,
                                    -0.42113239231497934
                                ],
                                [
                                    7,
                                    -0.24958920519271455
                                ],
                                [
                                    8,
                                    0.49999999814129326
                                ],
                                [
                                    9,
                                    0.4932951507150606
                                ],
                                [
                                    10,
                                    0.40816068213529266
                                ],
                                [
                                    11,
                                    -0.3942575240520302
                                ],
                                [
                                    12,
                                    0.49999999999693556
                                ],
                                [
                                    13,
                                    -0.022471740973451948
                                ],
                                [
                                    14,
                                    -0.26137599045778004
                                ],
                                [
                                    15,
                                    0.49999999798114336
                                ],
                                [
                                    16,
                                    0.49999992499616586
                                ],
                                [
                                    17,
                                    0.4999889841683346
                                ],
                                [
                                    18,
                                    0.2999573957185445
                                ],
                                [
                                    19,
                                    0.49978870602217507
                                ],
                                [
                                    20,
                                    0.49999985548697956
                                ],
                                [
                                    21,
                                    -0.41408652807822743
                                ],
                                [
                                    22,
                                    0.456852296929794
                                ],
                                [
                                    23,
                                    0.49983322238008276
                                ],
                                [
                                    24,
                                    0.49997916185805236
                                ],
                                [
                                    25,
                                    0.49977777329899087
                                ],
                                [
                                    26,
                                    0.49753631203463866
                                ],
                                [
                                    27,
                                    0.49982001936136833
                                ],
                                [
                                    28,
                                    -0.4961156180526288
                                ],
                                [
                                    29,
                                    0.4999996673760455
                                ],
                                [
                                    30,
                                    0.492820601478977
                                ],
                                [
                                    31,
                                    0.33494388793378793
                                ],
                                [
                                    32,
                                    -0.29292653350731057
                                ],
                                [
                                    33,
                                    0.4331223140335083
                                ],
                                [
                                    34,
                                    0.4995210459589291
                                ],
                                [
                                    35,
                                    0.499999966794765
                                ],
                                [
                                    36,
                                    0.4702169933056898
                                ],
                                [
                                    37,
                                    -0.49986818668931665
                                ],
                                [
                                    38,
                                    0.01159806574242761
                                ],
                                [
                                    39,
                                    0.4969549181131604
                                ],
                                [
                                    40,
                                    0.4999919649315734
                                ],
                                [
                                    41,
                                    0.48836908680513713
                                ],
                                [
                                    42,
                                    0.06159678825064685
                                ],
                                [
                                    43,
                                    -0.04126075807996177
                                ],
                                [
                                    44,
                                    0.4681294082934119
                                ],
                                [
                                    45,
                                    0.4999999811714687
                                ],
                                [
                                    46,
                                    0.49999999998311795
                                ],
                                [
                                    47,
                                    0.48165456136943297
                                ],
                                [
                                    48,
                                    -0.40251254149906746
                                ],
                                [
                                    49,
                                    -0.10395567127919947
                                ],
                                [
                                    50,
                                    -0.2676044377833018
                                ],
                                [
                                    51,
                                    0.4974937960482043
                                ],
                                [
                                    52,
                                    0.46339256394559003
                                ],
                                [
                                    53,
                                    0.49999999997871547
                                ],
                                [
                                    54,
                                    -0.20468286071947306
                                ],
                                [
                                    55,
                                    0.499999603092678
                                ],
                                [
                                    56,
                                    0.49230417889224953
                                ],
                                [
                                    57,
                                    -0.29147262766939475
                                ],
                                [
                                    58,
                                    -0.18958390630882693
                                ],
                                [
                                    59,
                                    0.4180743831712228
                                ],
                                [
                                    60,
                                    0.499784615243974
                                ],
                                [
                                    61,
                                    0.49999915261487704
                                ],
                                [
                                    62,
                                    0.4999075505521259
                                ],
                                [
                                    63,
                                    0.4191977550379484
                                ],
                                [
                                    64,
                                    0.49129764627295736
                                ],
                                [
                                    65,
                                    0.2490896783075317
                                ],
                                [
                                    66,
                                    0.4992490593662129
                                ],
                                [
                                    67,
                                    0.4999986789797517
                                ],
                                [
                                    68,
                                    -0.02857183976520994
                                ],
                                [
                                    69,
                                    0.4513992112804016
                                ],
                                [
                                    70,
                                    -0.4774758408321451
                                ],
                                [
                                    71,
                                    0.4998900089151753
                                ],
                                [
                                    72,
                                    0.07019279862862138
                                ],
                                [
                                    73,
                                    0.4999999987950887
                                ],
                                [
                                    74,
                                    -0.10604273751705884
                                ],
                                [
                                    75,
                                    -0.4935254322863841
                                ],
                                [
                                    76,
                                    0.499991769625735
                                ],
                                [
                                    77,
                                    -0.15324888701193262
                                ],
                                [
                                    78,
                                    -0.04908309510618947
                                ],
                                [
                                    79,
                                    0.496368636772445
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
                            "seriesId": 8437803
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
                myChart_069c154a72e84cf7a16e2bd69ec29dd4.setOption(option_069c154a72e84cf7a16e2bd69ec29dd4);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
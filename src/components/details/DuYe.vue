<template>
    <div>
        <div id="a988688ec4f844668a67e7c27901c492" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "DuYe",
        methods:{
            myEcharts(){

                var myChart_a988688ec4f844668a67e7c27901c492 = this.$echarts.init(document.getElementById('a988688ec4f844668a67e7c27901c492'), 'light', {renderer: 'canvas'});

                var option_a988688ec4f844668a67e7c27901c492 = {
                    "title": [
                        {
                            "text": "\u6bd2\u6db2\uff1a\u81f4\u547d\u5b88\u62a4\u8005\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 6286148,
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
                                    -0.42698089925269866
                                ],
                                [
                                    1,
                                    0.4999999999544895
                                ],
                                [
                                    2,
                                    0.5
                                ],
                                [
                                    3,
                                    0.1102398537920104
                                ],
                                [
                                    4,
                                    0.4531085944633154
                                ],
                                [
                                    5,
                                    0.49994320905431844
                                ],
                                [
                                    6,
                                    0.4999999968025455
                                ],
                                [
                                    7,
                                    0.3902873506754859
                                ],
                                [
                                    8,
                                    0.4815185785619016
                                ],
                                [
                                    9,
                                    0.4313366049058729
                                ],
                                [
                                    10,
                                    0.5
                                ],
                                [
                                    11,
                                    0.22692354873662168
                                ],
                                [
                                    12,
                                    0.4999986469784833
                                ],
                                [
                                    13,
                                    0.49999982047554115
                                ],
                                [
                                    14,
                                    -0.27994068383805093
                                ],
                                [
                                    15,
                                    -0.3759059857478788
                                ],
                                [
                                    16,
                                    -0.05232154149013324
                                ],
                                [
                                    17,
                                    0.49785069105155355
                                ],
                                [
                                    18,
                                    -0.499998146788613
                                ],
                                [
                                    19,
                                    0.27664105359315816
                                ],
                                [
                                    20,
                                    0.49999926042194487
                                ],
                                [
                                    21,
                                    0.49999998940160084
                                ],
                                [
                                    22,
                                    -0.4076549655084598
                                ],
                                [
                                    23,
                                    -0.49975285591236085
                                ],
                                [
                                    24,
                                    0.49999998658270406
                                ],
                                [
                                    25,
                                    0.4999999999998037
                                ],
                                [
                                    26,
                                    0.3627317494348494
                                ],
                                [
                                    27,
                                    0.42128801737877564
                                ],
                                [
                                    28,
                                    0.49999999405329065
                                ],
                                [
                                    29,
                                    0.4992717743259196
                                ],
                                [
                                    30,
                                    0.499922963026567
                                ],
                                [
                                    31,
                                    0.48593784555568686
                                ],
                                [
                                    32,
                                    -0.24035721651692576
                                ],
                                [
                                    33,
                                    0.49946720478831175
                                ],
                                [
                                    34,
                                    0.48840218887792297
                                ],
                                [
                                    35,
                                    0.4459054540525793
                                ],
                                [
                                    36,
                                    0.4477663641857117
                                ],
                                [
                                    37,
                                    -0.35600970762956763
                                ],
                                [
                                    38,
                                    0.1738140044304266
                                ],
                                [
                                    39,
                                    0.165863345288361
                                ],
                                [
                                    40,
                                    -0.49999978151405644
                                ],
                                [
                                    41,
                                    -0.4802218730531679
                                ],
                                [
                                    42,
                                    0.4999999598191093
                                ],
                                [
                                    43,
                                    0.49987274844020224
                                ],
                                [
                                    44,
                                    0.4934712223677131
                                ],
                                [
                                    45,
                                    0.49999998962093184
                                ],
                                [
                                    46,
                                    -0.4999866363246097
                                ],
                                [
                                    47,
                                    0.4999999999999998
                                ],
                                [
                                    48,
                                    0.3714150869844227
                                ],
                                [
                                    49,
                                    0.49172914676867696
                                ],
                                [
                                    50,
                                    0.1528800954978511
                                ],
                                [
                                    51,
                                    0.49223653505815246
                                ],
                                [
                                    52,
                                    0.4822427875793408
                                ],
                                [
                                    53,
                                    -0.07147755579412896
                                ],
                                [
                                    54,
                                    0.49498638242443216
                                ],
                                [
                                    55,
                                    -0.46297205516941786
                                ],
                                [
                                    56,
                                    0.4260866616102156
                                ],
                                [
                                    57,
                                    -0.29460970132436615
                                ],
                                [
                                    58,
                                    0.4496739496696016
                                ],
                                [
                                    59,
                                    0.39648060702797483
                                ],
                                [
                                    60,
                                    0.4999999999999749
                                ],
                                [
                                    61,
                                    -0.22497847507612356
                                ],
                                [
                                    62,
                                    -0.1574348308886575
                                ],
                                [
                                    63,
                                    0.49999999999994404
                                ],
                                [
                                    64,
                                    0.35161804689647047
                                ],
                                [
                                    65,
                                    0.48808168518928285
                                ],
                                [
                                    66,
                                    0.4999325678174603
                                ],
                                [
                                    67,
                                    0.499999401593883
                                ],
                                [
                                    68,
                                    0.49779203518253146
                                ],
                                [
                                    69,
                                    0.49839441731035616
                                ],
                                [
                                    70,
                                    0.4999999918331387
                                ],
                                [
                                    71,
                                    0.49997802739693575
                                ],
                                [
                                    72,
                                    0.4977823655926803
                                ],
                                [
                                    73,
                                    0.49886784826747843
                                ],
                                [
                                    74,
                                    0.3699603222289013
                                ],
                                [
                                    75,
                                    0.04441704332574936
                                ],
                                [
                                    76,
                                    0.2724285496922312
                                ],
                                [
                                    77,
                                    0.49744044646199304
                                ],
                                [
                                    78,
                                    -0.47100080398321686
                                ],
                                [
                                    79,
                                    0.37570404472991314
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
                            "seriesId": 6286148
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
                myChart_a988688ec4f844668a67e7c27901c492.setOption(option_a988688ec4f844668a67e7c27901c492);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
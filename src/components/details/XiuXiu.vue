<template>
    <div>
        <div id="ea3bd1226de4482bbe0e4baf16c9e6fe" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "XiuXiu",
        methods: {
            myEcharts(){

                var myChart_ea3bd1226de4482bbe0e4baf16c9e6fe = this.$echarts.init(document.getElementById('ea3bd1226de4482bbe0e4baf16c9e6fe'), 'light', {renderer: 'canvas'});

                var option_ea3bd1226de4482bbe0e4baf16c9e6fe = {
                    "title": [
                        {
                            "text": "\u7f9e\u7f9e\u7684\u94c1\u62f3\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 151961,
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
                                    0.49695492811313646
                                ],
                                [
                                    1,
                                    0.4999988876791661
                                ],
                                [
                                    2,
                                    0.4661242451613933
                                ],
                                [
                                    3,
                                    0.49953436438914856
                                ],
                                [
                                    4,
                                    -0.24962761514570309
                                ],
                                [
                                    5,
                                    0.42417788318018124
                                ],
                                [
                                    6,
                                    0.3944506868982154
                                ],
                                [
                                    7,
                                    0.4999976108670444
                                ],
                                [
                                    8,
                                    0.49999168352631973
                                ],
                                [
                                    9,
                                    0.49657537414819797
                                ],
                                [
                                    10,
                                    0.2766231225860396
                                ],
                                [
                                    11,
                                    0.231422698316472
                                ],
                                [
                                    12,
                                    0.4814726465294419
                                ],
                                [
                                    13,
                                    0.47849050779472413
                                ],
                                [
                                    14,
                                    0.12999961534680704
                                ],
                                [
                                    15,
                                    0.49833659367278504
                                ],
                                [
                                    16,
                                    0.4990188554404218
                                ],
                                [
                                    17,
                                    0.3896885717560884
                                ],
                                [
                                    18,
                                    -0.49965002790485646
                                ],
                                [
                                    19,
                                    0.4256228293567914
                                ],
                                [
                                    20,
                                    -0.10251223189776903
                                ],
                                [
                                    21,
                                    0.48853511439272534
                                ],
                                [
                                    22,
                                    0.3766025149237051
                                ],
                                [
                                    23,
                                    0.4830916537188218
                                ],
                                [
                                    24,
                                    0.49966863021797747
                                ],
                                [
                                    25,
                                    0.1764418786234293
                                ],
                                [
                                    26,
                                    0.49999847453231294
                                ],
                                [
                                    27,
                                    -0.49217750779972325
                                ],
                                [
                                    28,
                                    0.4985955078638914
                                ],
                                [
                                    29,
                                    0.2700982859689003
                                ],
                                [
                                    30,
                                    0.4456791169810349
                                ],
                                [
                                    31,
                                    0.49988480653357337
                                ],
                                [
                                    32,
                                    0.21271232247596383
                                ],
                                [
                                    33,
                                    0.3571341616834829
                                ],
                                [
                                    34,
                                    -0.4652832126373614
                                ],
                                [
                                    35,
                                    0.4999998301994095
                                ],
                                [
                                    36,
                                    0.49986596160621055
                                ],
                                [
                                    37,
                                    0.49995818122066904
                                ],
                                [
                                    38,
                                    0.1823339114112782
                                ],
                                [
                                    39,
                                    0.49998639013717927
                                ],
                                [
                                    40,
                                    0.49796462434943123
                                ],
                                [
                                    41,
                                    0.49999650928618533
                                ],
                                [
                                    42,
                                    0.4997275756436862
                                ],
                                [
                                    43,
                                    0.265871848973833
                                ],
                                [
                                    44,
                                    -0.45458131712711536
                                ],
                                [
                                    45,
                                    -0.19734645464597633
                                ],
                                [
                                    46,
                                    0.4980528629956267
                                ],
                                [
                                    47,
                                    0.49999999515339333
                                ],
                                [
                                    48,
                                    0.4999775975461156
                                ],
                                [
                                    49,
                                    0.499999985070964
                                ],
                                [
                                    50,
                                    0.49968664874327895
                                ],
                                [
                                    51,
                                    0.4977510096082757
                                ],
                                [
                                    52,
                                    0.4999933965453346
                                ],
                                [
                                    53,
                                    0.33613923040244875
                                ],
                                [
                                    54,
                                    0.24203448991310983
                                ],
                                [
                                    55,
                                    -0.4425827921298493
                                ],
                                [
                                    56,
                                    -0.4044647109367374
                                ],
                                [
                                    57,
                                    0.4990180918133603
                                ],
                                [
                                    58,
                                    0.4997674491979046
                                ],
                                [
                                    59,
                                    0.4819546062137724
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
                            "seriesId": 151961
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
                myChart_ea3bd1226de4482bbe0e4baf16c9e6fe.setOption(option_ea3bd1226de4482bbe0e4baf16c9e6fe);
            },
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
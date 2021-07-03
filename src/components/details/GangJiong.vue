<template>
    <div>
        <div id="a46bfbfcdbc64a07880b0af90cadb31e" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "GangJiong",
        methods:{
            myEcharts(){

                var myChart_a46bfbfcdbc64a07880b0af90cadb31e = this.$echarts.init(document.getElementById('a46bfbfcdbc64a07880b0af90cadb31e'), 'light', {renderer: 'canvas'});

                var option_a46bfbfcdbc64a07880b0af90cadb31e = {
                    "title": [
                        {
                            "text": "\u6e2f\u56e7\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 387420,
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
                                    0.49999320168285344
                                ],
                                [
                                    1,
                                    0.49999999299987596
                                ],
                                [
                                    2,
                                    0.499461308624201
                                ],
                                [
                                    3,
                                    0.46759663808824237
                                ],
                                [
                                    4,
                                    -0.4754975589184516
                                ],
                                [
                                    5,
                                    -0.4883193275102632
                                ],
                                [
                                    6,
                                    0.4811328436514126
                                ],
                                [
                                    7,
                                    -0.3620293709636292
                                ],
                                [
                                    8,
                                    -0.47180721208367515
                                ],
                                [
                                    9,
                                    0.4763457909835549
                                ],
                                [
                                    10,
                                    0.38817848427483626
                                ],
                                [
                                    11,
                                    0.499994497106242
                                ],
                                [
                                    12,
                                    0.0792410265536807
                                ],
                                [
                                    13,
                                    0.4153530666038667
                                ],
                                [
                                    14,
                                    0.4999999980411849
                                ],
                                [
                                    15,
                                    0.4999449833199111
                                ],
                                [
                                    16,
                                    0.49747364866020005
                                ],
                                [
                                    17,
                                    0.49998584372897614
                                ],
                                [
                                    18,
                                    0.4908327809779631
                                ],
                                [
                                    19,
                                    0.49999993860960457
                                ],
                                [
                                    20,
                                    -0.33448889875537224
                                ],
                                [
                                    21,
                                    -0.4477830077881373
                                ],
                                [
                                    22,
                                    0.4218076613629046
                                ],
                                [
                                    23,
                                    0.49999992136958515
                                ],
                                [
                                    24,
                                    0.3916288269759246
                                ],
                                [
                                    25,
                                    0.34060070767688255
                                ],
                                [
                                    26,
                                    0.18562700643301455
                                ],
                                [
                                    27,
                                    0.49997746791681885
                                ],
                                [
                                    28,
                                    0.49883855112669195
                                ],
                                [
                                    29,
                                    0.4998319844821527
                                ],
                                [
                                    30,
                                    0.49999999740018364
                                ],
                                [
                                    31,
                                    0.22738382916212418
                                ],
                                [
                                    32,
                                    0.49321423753226734
                                ],
                                [
                                    33,
                                    0.2807724407159429
                                ],
                                [
                                    34,
                                    0.42081469611391387
                                ],
                                [
                                    35,
                                    0.30742687423066717
                                ],
                                [
                                    36,
                                    -0.17174198509329963
                                ],
                                [
                                    37,
                                    -0.49928368810697654
                                ],
                                [
                                    38,
                                    -0.2308315181276599
                                ],
                                [
                                    39,
                                    -0.4998613244761706
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
                            "seriesId": 387420
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
                                39
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
                myChart_a46bfbfcdbc64a07880b0af90cadb31e.setOption(option_a46bfbfcdbc64a07880b0af90cadb31e);

            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div id="89d705a680944187acdb92add7d0ea3a" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "QianRen",
        methods:{
            myEcharts(){

                var myChart_89d705a680944187acdb92add7d0ea3a = this.$echarts.init(document.getElementById('89d705a680944187acdb92add7d0ea3a'), 'light', {renderer: 'canvas'});

                var option_89d705a680944187acdb92add7d0ea3a = {
                    "title": [
                        {
                            "text": "\u524d\u4efb3\uff1a\u518d\u89c1\u524d\u4efb\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 831903,
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
                                    0.4999995787339002
                                ],
                                [
                                    1,
                                    0.4999770179393146
                                ],
                                [
                                    2,
                                    0.07663162605380525
                                ],
                                [
                                    3,
                                    0.4999971893048015
                                ],
                                [
                                    4,
                                    0.4999820390514653
                                ],
                                [
                                    5,
                                    0.4999999989794295
                                ],
                                [
                                    6,
                                    0.4950025067733681
                                ],
                                [
                                    7,
                                    0.5
                                ],
                                [
                                    8,
                                    0.49999892920537947
                                ],
                                [
                                    9,
                                    0.4999999592047045
                                ],
                                [
                                    10,
                                    0.45412749313014744
                                ],
                                [
                                    11,
                                    0.4999170381275819
                                ],
                                [
                                    12,
                                    0.49997923226985586
                                ],
                                [
                                    13,
                                    0.4095771703677309
                                ],
                                [
                                    14,
                                    0.4873109798580625
                                ],
                                [
                                    15,
                                    -0.2924544480300558
                                ],
                                [
                                    16,
                                    -0.4878741115298767
                                ],
                                [
                                    17,
                                    0.49988624949547933
                                ],
                                [
                                    18,
                                    0.3349665902398655
                                ],
                                [
                                    19,
                                    0.4999996879199363
                                ],
                                [
                                    20,
                                    0.4999999971157594
                                ],
                                [
                                    21,
                                    0.49934363300237405
                                ],
                                [
                                    22,
                                    0.49999920477690396
                                ],
                                [
                                    23,
                                    0.49999999664301154
                                ],
                                [
                                    24,
                                    0.49999993445029156
                                ],
                                [
                                    25,
                                    -0.34265936698021304
                                ],
                                [
                                    26,
                                    -0.16868640962976578
                                ],
                                [
                                    27,
                                    0.04445484138835665
                                ],
                                [
                                    28,
                                    0.4964601179379763
                                ],
                                [
                                    29,
                                    -0.4864907002929312
                                ],
                                [
                                    30,
                                    0.4996728699040418
                                ],
                                [
                                    31,
                                    0.41793861576001357
                                ],
                                [
                                    32,
                                    0.48431049577967555
                                ],
                                [
                                    33,
                                    0.4999612360217721
                                ],
                                [
                                    34,
                                    0.4999374413564429
                                ],
                                [
                                    35,
                                    0.4999574846835526
                                ],
                                [
                                    36,
                                    0.4586411859268853
                                ],
                                [
                                    37,
                                    -0.1704762071804734
                                ],
                                [
                                    38,
                                    -0.46164754077755743
                                ],
                                [
                                    39,
                                    0.49949425933712266
                                ],
                                [
                                    40,
                                    0.030564039542396615
                                ],
                                [
                                    41,
                                    0.49414468917997834
                                ],
                                [
                                    42,
                                    -0.2883542235195118
                                ],
                                [
                                    43,
                                    -0.49191773296422225
                                ],
                                [
                                    44,
                                    0.11136892875069959
                                ],
                                [
                                    45,
                                    0.49991313635755397
                                ],
                                [
                                    46,
                                    0.4699872796023159
                                ],
                                [
                                    47,
                                    0.12860466530252146
                                ],
                                [
                                    48,
                                    -0.22809561593273497
                                ],
                                [
                                    49,
                                    0.12419122416533235
                                ],
                                [
                                    50,
                                    0.4995364356500138
                                ],
                                [
                                    51,
                                    0.4774129935804188
                                ],
                                [
                                    52,
                                    0.35964291767637535
                                ],
                                [
                                    53,
                                    -0.37543279672387564
                                ],
                                [
                                    54,
                                    0.49113654944771046
                                ],
                                [
                                    55,
                                    0.49995919164714775
                                ],
                                [
                                    56,
                                    -0.4919566914863345
                                ],
                                [
                                    57,
                                    0.39952297392127334
                                ],
                                [
                                    58,
                                    0.16002217025337462
                                ],
                                [
                                    59,
                                    0.4999999958927732
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
                            "seriesId": 831903
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
                myChart_89d705a680944187acdb92add7d0ea3a.setOption(option_89d705a680944187acdb92add7d0ea3a);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
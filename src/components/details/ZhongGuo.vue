<template>
    <div>
        <div id="fd430a0b70024d9a8baa995792f54887" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "ZhongGuo",
        methods:{
            myEcharts(){

                var myChart_fd430a0b70024d9a8baa995792f54887 = this.$echarts.init(document.getElementById('fd430a0b70024d9a8baa995792f54887'), 'light', {renderer: 'canvas'});

                var option_fd430a0b70024d9a8baa995792f54887 = {
                    "title": [
                        {
                            "text": "\u4e2d\u56fd\u673a\u957f\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 6633757,
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
                                    0.49913804936342576
                                ],
                                [
                                    1,
                                    0.4980526748407408
                                ],
                                [
                                    2,
                                    0.09767473311082564
                                ],
                                [
                                    3,
                                    0.49602151240464243
                                ],
                                [
                                    4,
                                    0.4999999243843607
                                ],
                                [
                                    5,
                                    0.4999999729439967
                                ],
                                [
                                    6,
                                    -0.41484972301126954
                                ],
                                [
                                    7,
                                    -0.06455792702307539
                                ],
                                [
                                    8,
                                    0.49684124217583137
                                ],
                                [
                                    9,
                                    0.4982574469780996
                                ],
                                [
                                    10,
                                    0.2826338230248182
                                ],
                                [
                                    11,
                                    0.49999762317396745
                                ],
                                [
                                    12,
                                    0.49996807895827666
                                ],
                                [
                                    13,
                                    0.2999962281474938
                                ],
                                [
                                    14,
                                    0.5
                                ],
                                [
                                    15,
                                    0.5
                                ],
                                [
                                    16,
                                    0.49901212424275243
                                ],
                                [
                                    17,
                                    0.498620757530313
                                ],
                                [
                                    18,
                                    0.49952509952064916
                                ],
                                [
                                    19,
                                    0.4833369312435928
                                ],
                                [
                                    20,
                                    0.4999999934342565
                                ],
                                [
                                    21,
                                    0.4999999999857079
                                ],
                                [
                                    22,
                                    0.45367899369912246
                                ],
                                [
                                    23,
                                    0.49999999999999845
                                ],
                                [
                                    24,
                                    0.49999668663720553
                                ],
                                [
                                    25,
                                    0.40199181766871317
                                ],
                                [
                                    26,
                                    0.4999948590293213
                                ],
                                [
                                    27,
                                    0.4999999999999998
                                ],
                                [
                                    28,
                                    -0.2964387321396512
                                ],
                                [
                                    29,
                                    0.4999147084610419
                                ],
                                [
                                    30,
                                    -0.0005784921480512795
                                ],
                                [
                                    31,
                                    0.4999989020292043
                                ],
                                [
                                    32,
                                    0.3889605964317038
                                ],
                                [
                                    33,
                                    0.4999999999999989
                                ],
                                [
                                    34,
                                    -0.47250096956956755
                                ],
                                [
                                    35,
                                    0.4532608007043222
                                ],
                                [
                                    36,
                                    -0.019851870067080557
                                ],
                                [
                                    37,
                                    0.4812540101011086
                                ],
                                [
                                    38,
                                    0.4999995185811519
                                ],
                                [
                                    39,
                                    0.49377939851103914
                                ],
                                [
                                    40,
                                    -0.47250096956956755
                                ],
                                [
                                    41,
                                    -0.03327577059537168
                                ],
                                [
                                    42,
                                    0.4532608007043222
                                ],
                                [
                                    43,
                                    0.2559437727141125
                                ],
                                [
                                    44,
                                    0.47286320549905525
                                ],
                                [
                                    45,
                                    0.4999999999999847
                                ],
                                [
                                    46,
                                    -0.019851870067080557
                                ],
                                [
                                    47,
                                    0.232436741548948
                                ],
                                [
                                    48,
                                    0.4988983167951646
                                ],
                                [
                                    49,
                                    0.22816436883129476
                                ],
                                [
                                    50,
                                    0.4999995185811519
                                ],
                                [
                                    51,
                                    0.052810536193151014
                                ],
                                [
                                    52,
                                    0.39915222464785305
                                ],
                                [
                                    53,
                                    0.4544611532624593
                                ],
                                [
                                    54,
                                    0.09552787568667609
                                ],
                                [
                                    55,
                                    0.4999979067845326
                                ],
                                [
                                    56,
                                    0.4999870995372925
                                ],
                                [
                                    57,
                                    0.4958699065912855
                                ],
                                [
                                    58,
                                    -0.4993820701211762
                                ],
                                [
                                    59,
                                    0.4999999999976814
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
                            "seriesId": 6633757
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
                myChart_fd430a0b70024d9a8baa995792f54887.setOption(option_fd430a0b70024d9a8baa995792f54887);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
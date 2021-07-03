<template>
    <div>
        <div id="c7a54dc24aac4eec8f958f13801e8104" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "MeiRen",
        methods:{
            myEcharts(){

                var myChart_c7a54dc24aac4eec8f958f13801e8104 = this.$echarts.init(document.getElementById('c7a54dc24aac4eec8f958f13801e8104'), 'light', {renderer: 'canvas'});

                var option_c7a54dc24aac4eec8f958f13801e8104 = {
                    "title": [
                        {
                            "text": "\u7f8e\u4eba\u9c7c\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 5760651,
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
                                    0.49991635568954806
                                ],
                                [
                                    1,
                                    0.49385834529887174
                                ],
                                [
                                    2,
                                    -0.4994679192922117
                                ],
                                [
                                    3,
                                    -0.48537977034837454
                                ],
                                [
                                    4,
                                    -0.4677336339280702
                                ],
                                [
                                    5,
                                    0.3157995585608271
                                ],
                                [
                                    6,
                                    0.47615782049404864
                                ],
                                [
                                    7,
                                    0.49995247357695605
                                ],
                                [
                                    8,
                                    -0.49360049853003285
                                ],
                                [
                                    9,
                                    0.49997739684164755
                                ],
                                [
                                    10,
                                    0.46990822812299804
                                ],
                                [
                                    11,
                                    0.4999676846814982
                                ],
                                [
                                    12,
                                    0.49997982578100997
                                ],
                                [
                                    13,
                                    -0.49245511081370585
                                ],
                                [
                                    14,
                                    -0.4233027991803292
                                ],
                                [
                                    15,
                                    -0.4036623709550826
                                ],
                                [
                                    16,
                                    -0.07213859507886744
                                ],
                                [
                                    17,
                                    -0.49447287383813154
                                ],
                                [
                                    18,
                                    0.362940536928672
                                ],
                                [
                                    19,
                                    0.49999999669019135
                                ],
                                [
                                    20,
                                    -0.17741935483870974
                                ],
                                [
                                    21,
                                    0.15802340240975432
                                ],
                                [
                                    22,
                                    0.46550199380685886
                                ],
                                [
                                    23,
                                    -0.30694994385657315
                                ],
                                [
                                    24,
                                    0.4999984895949823
                                ],
                                [
                                    25,
                                    0.11781759421248184
                                ],
                                [
                                    26,
                                    -0.411533434155236
                                ],
                                [
                                    27,
                                    0.47116275307678124
                                ],
                                [
                                    28,
                                    -0.09759713772307499
                                ],
                                [
                                    29,
                                    0.4997223526394462
                                ],
                                [
                                    30,
                                    -0.3250378064378514
                                ],
                                [
                                    31,
                                    0.19392858655537148
                                ],
                                [
                                    32,
                                    0.49999670986013844
                                ],
                                [
                                    33,
                                    -0.49961406796778607
                                ],
                                [
                                    34,
                                    -0.04348247905928326
                                ],
                                [
                                    35,
                                    0.33985662985148113
                                ],
                                [
                                    36,
                                    -0.17825774676733375
                                ],
                                [
                                    37,
                                    -0.3538875766579995
                                ],
                                [
                                    38,
                                    0.49999999421178143
                                ],
                                [
                                    39,
                                    -0.09300622338674136
                                ],
                                [
                                    40,
                                    0.49001016222431093
                                ],
                                [
                                    41,
                                    -0.4210257209778563
                                ],
                                [
                                    42,
                                    0.04653469750873551
                                ],
                                [
                                    43,
                                    0.4939757902233952
                                ],
                                [
                                    44,
                                    -0.09795170309206336
                                ],
                                [
                                    45,
                                    0.33481691142990944
                                ],
                                [
                                    46,
                                    0.4999994348625757
                                ],
                                [
                                    47,
                                    0.49883991565628605
                                ],
                                [
                                    48,
                                    0.22994809640933622
                                ],
                                [
                                    49,
                                    -0.30790774407777444
                                ],
                                [
                                    50,
                                    -0.4997087892099794
                                ],
                                [
                                    51,
                                    0.44640369644071964
                                ],
                                [
                                    52,
                                    0.4856277546044476
                                ],
                                [
                                    53,
                                    0.49999272657743643
                                ],
                                [
                                    54,
                                    0.49960876800014553
                                ],
                                [
                                    55,
                                    0.44272131923249636
                                ],
                                [
                                    56,
                                    0.4965112235445067
                                ],
                                [
                                    57,
                                    -0.3500805168873923
                                ],
                                [
                                    58,
                                    0.4996040263594489
                                ],
                                [
                                    59,
                                    0.3456080338895702
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
                            "seriesId": 5760651
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
                myChart_c7a54dc24aac4eec8f958f13801e8104.setOption(option_c7a54dc24aac4eec8f958f13801e8104);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
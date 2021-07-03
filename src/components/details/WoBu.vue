<template>
    <div>
        <div id="72c84089c80f4d50b17f2f626b670dae" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "WoBu",
        methods:{
            myEcharts(){

                var myChart_72c84089c80f4d50b17f2f626b670dae = this.$echarts.init(document.getElementById('72c84089c80f4d50b17f2f626b670dae'), 'light', {renderer: 'canvas'});

                var option_72c84089c80f4d50b17f2f626b670dae = {
                    "title": [
                        {
                            "text": "\u6211\u4e0d\u662f\u836f\u795e\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 2003984,
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
                                    0.4998741872162519
                                ],
                                [
                                    1,
                                    0.49997132010561074
                                ],
                                [
                                    2,
                                    0.4999990561850267
                                ],
                                [
                                    3,
                                    0.3546761071707043
                                ],
                                [
                                    4,
                                    0.4999999999999998
                                ],
                                [
                                    5,
                                    -0.003524788467999973
                                ],
                                [
                                    6,
                                    0.3486149861110456
                                ],
                                [
                                    7,
                                    0.4921581846313905
                                ],
                                [
                                    8,
                                    0.37464927792314107
                                ],
                                [
                                    9,
                                    0.4995949007480962
                                ],
                                [
                                    10,
                                    0.4839802055517388
                                ],
                                [
                                    11,
                                    0.49999965578299055
                                ],
                                [
                                    12,
                                    0.49999999967030706
                                ],
                                [
                                    13,
                                    0.49929870037830115
                                ],
                                [
                                    14,
                                    -0.3712095577665694
                                ],
                                [
                                    15,
                                    0.4999603843517081
                                ],
                                [
                                    16,
                                    0.4995312642721128
                                ],
                                [
                                    17,
                                    0.4999999999088549
                                ],
                                [
                                    18,
                                    0.4978955879282182
                                ],
                                [
                                    19,
                                    0.49998686261404746
                                ],
                                [
                                    20,
                                    0.44913377094417684
                                ],
                                [
                                    21,
                                    0.47727015999229894
                                ],
                                [
                                    22,
                                    0.4290541682632415
                                ],
                                [
                                    23,
                                    0.49999998775011567
                                ],
                                [
                                    24,
                                    0.35880719047061194
                                ],
                                [
                                    25,
                                    0.23264027749678662
                                ],
                                [
                                    26,
                                    0.4977239251586574
                                ],
                                [
                                    27,
                                    0.4914020065602517
                                ],
                                [
                                    28,
                                    0.49447490759684354
                                ],
                                [
                                    29,
                                    -0.10071765572391422
                                ],
                                [
                                    30,
                                    0.4998906514744773
                                ],
                                [
                                    31,
                                    0.49999999992055266
                                ],
                                [
                                    32,
                                    0.48627208072294326
                                ],
                                [
                                    33,
                                    0.49992944764301184
                                ],
                                [
                                    34,
                                    0.49993337711465435
                                ],
                                [
                                    35,
                                    0.3924923495181727
                                ],
                                [
                                    36,
                                    0.49999945521969835
                                ],
                                [
                                    37,
                                    0.4998274828826793
                                ],
                                [
                                    38,
                                    0.09685638877819658
                                ],
                                [
                                    39,
                                    0.49993773343142156
                                ],
                                [
                                    40,
                                    0.4927971485627861
                                ],
                                [
                                    41,
                                    0.3724180627892525
                                ],
                                [
                                    42,
                                    0.34908031523789673
                                ],
                                [
                                    43,
                                    0.33601598764580365
                                ],
                                [
                                    44,
                                    0.4999999999645073
                                ],
                                [
                                    45,
                                    0.49999785136317454
                                ],
                                [
                                    46,
                                    0.4999999388633103
                                ],
                                [
                                    47,
                                    0.29792160715681115
                                ],
                                [
                                    48,
                                    0.47902494095047676
                                ],
                                [
                                    49,
                                    0.4468873285308119
                                ],
                                [
                                    50,
                                    0.4999874240852443
                                ],
                                [
                                    51,
                                    0.49999992504663526
                                ],
                                [
                                    52,
                                    0.49999858084456716
                                ],
                                [
                                    53,
                                    0.4999999012716758
                                ],
                                [
                                    54,
                                    0.4986984850981869
                                ],
                                [
                                    55,
                                    0.4999970207792015
                                ],
                                [
                                    56,
                                    0.4999400233380833
                                ],
                                [
                                    57,
                                    0.4999903357070179
                                ],
                                [
                                    58,
                                    0.48797289284909884
                                ],
                                [
                                    59,
                                    0.4996163276401928
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
                            "seriesId": 2003984
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
                myChart_72c84089c80f4d50b17f2f626b670dae.setOption(option_72c84089c80f4d50b17f2f626b670dae);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
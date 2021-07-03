<template>
    <div>
        <div id="19cc2f908ab94c6aa0501d9b25527593" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "HaiWang",
        methods:{
            myEcharts(){

                var myChart_19cc2f908ab94c6aa0501d9b25527593 = this.$echarts.init(document.getElementById('19cc2f908ab94c6aa0501d9b25527593'), 'light', {renderer: 'canvas'});

                var option_19cc2f908ab94c6aa0501d9b25527593 = {
                    "title": [
                        {
                            "text": "\u6d77\u738b\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 7238504,
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
                                    0.4989948923619846
                                ],
                                [
                                    1,
                                    -0.4999992706821458
                                ],
                                [
                                    2,
                                    0.4964960132043674
                                ],
                                [
                                    3,
                                    -0.19799907803702665
                                ],
                                [
                                    4,
                                    -0.49621385280646446
                                ],
                                [
                                    5,
                                    0.2358803042795996
                                ],
                                [
                                    6,
                                    0.49999972493469735
                                ],
                                [
                                    7,
                                    0.3073147715143639
                                ],
                                [
                                    8,
                                    0.49999999999999933
                                ],
                                [
                                    9,
                                    0.4999999993340283
                                ],
                                [
                                    10,
                                    -0.3672296346981546
                                ],
                                [
                                    11,
                                    0.49984116254667943
                                ],
                                [
                                    12,
                                    -0.32768764505953807
                                ],
                                [
                                    13,
                                    -0.4970241877297388
                                ],
                                [
                                    14,
                                    0.4999999999999478
                                ],
                                [
                                    15,
                                    -0.49468491624511735
                                ],
                                [
                                    16,
                                    0.4996124718277982
                                ],
                                [
                                    17,
                                    -0.2907944528920897
                                ],
                                [
                                    18,
                                    0.4999148559899257
                                ],
                                [
                                    19,
                                    -0.4992418194503432
                                ],
                                [
                                    20,
                                    0.49995875406972234
                                ],
                                [
                                    21,
                                    0.4991772662167909
                                ],
                                [
                                    22,
                                    0.4999999870718559
                                ],
                                [
                                    23,
                                    0.49999999238547044
                                ],
                                [
                                    24,
                                    0.39726686897255103
                                ],
                                [
                                    25,
                                    0.4999979847065994
                                ],
                                [
                                    26,
                                    0.4997221878131345
                                ],
                                [
                                    27,
                                    0.4999999999999831
                                ],
                                [
                                    28,
                                    0.4869153696166465
                                ],
                                [
                                    29,
                                    0.4989132229929738
                                ],
                                [
                                    30,
                                    0.49999999995564237
                                ],
                                [
                                    31,
                                    0.4659503581716621
                                ],
                                [
                                    32,
                                    0.06304493490307606
                                ],
                                [
                                    33,
                                    -0.4999054017983364
                                ],
                                [
                                    34,
                                    0.49999995330458624
                                ],
                                [
                                    35,
                                    0.49994642364007225
                                ],
                                [
                                    36,
                                    0.4999999999997944
                                ],
                                [
                                    37,
                                    0.269716384280262
                                ],
                                [
                                    38,
                                    0.49999999919671323
                                ],
                                [
                                    39,
                                    0.4249944547105152
                                ],
                                [
                                    40,
                                    0.49947240454776276
                                ],
                                [
                                    41,
                                    0.4999999999924538
                                ],
                                [
                                    42,
                                    -0.3363130627051705
                                ],
                                [
                                    43,
                                    -0.27580201554676587
                                ],
                                [
                                    44,
                                    0.33333333333333326
                                ],
                                [
                                    45,
                                    -0.3917949718307471
                                ],
                                [
                                    46,
                                    0.49999995960886123
                                ],
                                [
                                    47,
                                    -0.018743642882212086
                                ],
                                [
                                    48,
                                    0.05875291317499565
                                ],
                                [
                                    49,
                                    0.17510137085193833
                                ],
                                [
                                    50,
                                    0.4996052137281871
                                ],
                                [
                                    51,
                                    0.498582377057303
                                ],
                                [
                                    52,
                                    0.4999999999999991
                                ],
                                [
                                    53,
                                    0.49865165856230553
                                ],
                                [
                                    54,
                                    0.4999999874001432
                                ],
                                [
                                    55,
                                    0.49989944376230866
                                ],
                                [
                                    56,
                                    0.49999999999996136
                                ],
                                [
                                    57,
                                    0.5
                                ],
                                [
                                    58,
                                    0.5
                                ],
                                [
                                    59,
                                    0.498309375048122
                                ],
                                [
                                    60,
                                    -0.10386931719731529
                                ],
                                [
                                    61,
                                    0.4999985933708342
                                ],
                                [
                                    62,
                                    0.4999999999978342
                                ],
                                [
                                    63,
                                    0.49997894806246623
                                ],
                                [
                                    64,
                                    0.5
                                ],
                                [
                                    65,
                                    0.4999759824748008
                                ],
                                [
                                    66,
                                    -0.4283304226120923
                                ],
                                [
                                    67,
                                    0.4447655482801618
                                ],
                                [
                                    68,
                                    0.44168372512424703
                                ],
                                [
                                    69,
                                    0.49790344134142606
                                ],
                                [
                                    70,
                                    0.49905229319629296
                                ],
                                [
                                    71,
                                    0.4343189862597878
                                ],
                                [
                                    72,
                                    0.49999960530340737
                                ],
                                [
                                    73,
                                    -0.2612658119448835
                                ],
                                [
                                    74,
                                    0.49466493146706547
                                ],
                                [
                                    75,
                                    0.47517978304254704
                                ],
                                [
                                    76,
                                    0.4999999880053182
                                ],
                                [
                                    77,
                                    0.5
                                ],
                                [
                                    78,
                                    0.38137283041861414
                                ],
                                [
                                    79,
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
                            "seriesId": 7238504
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
                myChart_19cc2f908ab94c6aa0501d9b25527593.setOption(option_19cc2f908ab94c6aa0501d9b25527593);

            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
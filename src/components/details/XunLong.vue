<template>
    <div>
        <div id="379ec55cf04e413ca1b69ff212bb3d2a" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "XunLong",
        methods:{
            myEcharts(){

                var myChart_379ec55cf04e413ca1b69ff212bb3d2a = this.$echarts.init(document.getElementById('379ec55cf04e413ca1b69ff212bb3d2a'), 'light', {renderer: 'canvas'});

                var option_379ec55cf04e413ca1b69ff212bb3d2a = {
                    "title": [
                        {
                            "text": "\u5bfb\u9f99\u8bc0\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 7499943,
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
                                    -0.4844827417832571
                                ],
                                [
                                    1,
                                    0.4934796519454695
                                ],
                                [
                                    2,
                                    0.49999999575903065
                                ],
                                [
                                    3,
                                    0.499970078245102
                                ],
                                [
                                    4,
                                    -0.45104837774182116
                                ],
                                [
                                    5,
                                    0.4990055603070018
                                ],
                                [
                                    6,
                                    -0.4628047115325622
                                ],
                                [
                                    7,
                                    0.39173387565609863
                                ],
                                [
                                    8,
                                    -0.4450552558793708
                                ],
                                [
                                    9,
                                    0.4876752581577447
                                ],
                                [
                                    10,
                                    0.49999995639320194
                                ],
                                [
                                    11,
                                    0.10387315148771747
                                ],
                                [
                                    12,
                                    0.43347891039030684
                                ],
                                [
                                    13,
                                    0.2971481027342635
                                ],
                                [
                                    14,
                                    0.09076480126786968
                                ],
                                [
                                    15,
                                    0.4999999999482345
                                ],
                                [
                                    16,
                                    0.4986714995343068
                                ],
                                [
                                    17,
                                    0.4999994967070174
                                ],
                                [
                                    18,
                                    -0.4395445043089721
                                ],
                                [
                                    19,
                                    0.49704066005543734
                                ],
                                [
                                    20,
                                    0.48740796251731877
                                ],
                                [
                                    21,
                                    0.4934082253597055
                                ],
                                [
                                    22,
                                    0.49790641119023604
                                ],
                                [
                                    23,
                                    0.48119764354141037
                                ],
                                [
                                    24,
                                    0.4966273449730796
                                ],
                                [
                                    25,
                                    0.47799874958033195
                                ],
                                [
                                    26,
                                    0.49913667651946503
                                ],
                                [
                                    27,
                                    -0.46013665386869984
                                ],
                                [
                                    28,
                                    0.49922577338032204
                                ],
                                [
                                    29,
                                    0.4999923298869008
                                ],
                                [
                                    30,
                                    0.49932092152945196
                                ],
                                [
                                    31,
                                    -0.4419972431154624
                                ],
                                [
                                    32,
                                    0.4963067461692291
                                ],
                                [
                                    33,
                                    0.20748893059206086
                                ],
                                [
                                    34,
                                    0.4703260624913912
                                ],
                                [
                                    35,
                                    0.49918730042268944
                                ],
                                [
                                    36,
                                    0.460990254623743
                                ],
                                [
                                    37,
                                    0.3962814865296599
                                ],
                                [
                                    38,
                                    0.4999999690989886
                                ],
                                [
                                    39,
                                    0.4992685765781927
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
                            "seriesId": 7499943
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
                myChart_379ec55cf04e413ca1b69ff212bb3d2a.setOption(option_379ec55cf04e413ca1b69ff212bb3d2a);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div id="a97a7155efdc4ceab4b39b470fbb8f89" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "ZhuLuo",
        methods:{
            myEcharts(){

                var myChart_a97a7155efdc4ceab4b39b470fbb8f89 = this.$echarts.init(document.getElementById('a97a7155efdc4ceab4b39b470fbb8f89'), 'light', {renderer: 'canvas'});

                var option_a97a7155efdc4ceab4b39b470fbb8f89 = {
                    "title": [
                        {
                            "text": "\u4f8f\u7f57\u7eaa\u4e16\u754c2\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 877689,
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
                                    0.36164681299249235
                                ],
                                [
                                    1,
                                    0.008462211228616012
                                ],
                                [
                                    2,
                                    0.499265047580554
                                ],
                                [
                                    3,
                                    0.49999999999999134
                                ],
                                [
                                    4,
                                    0.499130813932012
                                ],
                                [
                                    5,
                                    0.4999817108237793
                                ],
                                [
                                    6,
                                    0.3328366917635166
                                ],
                                [
                                    7,
                                    0.4999998081300687
                                ],
                                [
                                    8,
                                    0.4999972243519517
                                ],
                                [
                                    9,
                                    0.10493389361025174
                                ],
                                [
                                    10,
                                    0.48046677379575775
                                ],
                                [
                                    11,
                                    0.49965015238280774
                                ],
                                [
                                    12,
                                    0.005683086170544804
                                ],
                                [
                                    13,
                                    0.49999999998290345
                                ],
                                [
                                    14,
                                    0.49611187729867656
                                ],
                                [
                                    15,
                                    0.10380474608794255
                                ],
                                [
                                    16,
                                    0.4999066331324422
                                ],
                                [
                                    17,
                                    -0.4985814999095832
                                ],
                                [
                                    18,
                                    0.14056451884806553
                                ],
                                [
                                    19,
                                    0.499956190277271
                                ],
                                [
                                    20,
                                    0.49981108048741985
                                ],
                                [
                                    21,
                                    0.4999998993048068
                                ],
                                [
                                    22,
                                    0.49999999997440114
                                ],
                                [
                                    23,
                                    0.3675904157929105
                                ],
                                [
                                    24,
                                    0.4976824620422515
                                ],
                                [
                                    25,
                                    0.4303108892460864
                                ],
                                [
                                    26,
                                    0.49850437894724975
                                ],
                                [
                                    27,
                                    0.499265047580554
                                ],
                                [
                                    28,
                                    0.49986549434007443
                                ],
                                [
                                    29,
                                    0.4999999999999549
                                ],
                                [
                                    30,
                                    0.4999997264837721
                                ],
                                [
                                    31,
                                    0.499130813932012
                                ],
                                [
                                    32,
                                    0.050847671621961354
                                ],
                                [
                                    33,
                                    0.4999817108237793
                                ],
                                [
                                    34,
                                    0.01873696136076708
                                ],
                                [
                                    35,
                                    0.4990708102232888
                                ],
                                [
                                    36,
                                    0.48022511406972357
                                ],
                                [
                                    37,
                                    0.3328366917635166
                                ],
                                [
                                    38,
                                    0.49999966086745906
                                ],
                                [
                                    39,
                                    0.4764491557746583
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
                            "seriesId": 877689
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
                myChart_a97a7155efdc4ceab4b39b470fbb8f89.setOption(option_a97a7155efdc4ceab4b39b470fbb8f89);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div id="95e867573de94c93aa1c1b0d43818125" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "ZhuoYao",
        methods:{
            myEcharts(){

                var myChart_95e867573de94c93aa1c1b0d43818125 = this.$echarts.init(document.getElementById('95e867573de94c93aa1c1b0d43818125'), 'light', {renderer: 'canvas'});

                var option_95e867573de94c93aa1c1b0d43818125 = {
                    "title": [
                        {
                            "text": "\u6349\u5996\u8bb02\u8bc4\u8bba\u60c5\u611f\u5206\u6790",
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
                    "series_id": 6069407,
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
                                    0.29323345912056253
                                ],
                                [
                                    1,
                                    0.4988204409247573
                                ],
                                [
                                    2,
                                    0.4983256817045153
                                ],
                                [
                                    3,
                                    -0.4318456331711903
                                ],
                                [
                                    4,
                                    0.46830405007563125
                                ],
                                [
                                    5,
                                    -0.473418024634102
                                ],
                                [
                                    6,
                                    -0.29397347019777176
                                ],
                                [
                                    7,
                                    0.4747548641940138
                                ],
                                [
                                    8,
                                    -0.38424726587946767
                                ],
                                [
                                    9,
                                    0.49897371972300986
                                ],
                                [
                                    10,
                                    -0.3479288639382784
                                ],
                                [
                                    11,
                                    -0.18894588688829184
                                ],
                                [
                                    12,
                                    0.4999999154992876
                                ],
                                [
                                    13,
                                    -0.4104080222729388
                                ],
                                [
                                    14,
                                    0.4958629269925876
                                ],
                                [
                                    15,
                                    0.48766768665658644
                                ],
                                [
                                    16,
                                    0.3956755905089836
                                ],
                                [
                                    17,
                                    0.030509691313711507
                                ],
                                [
                                    18,
                                    -0.4168508122565011
                                ],
                                [
                                    19,
                                    -0.01867679232326014
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
                            "seriesId": 6069407
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
                                19
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
                myChart_95e867573de94c93aa1c1b0d43818125.setOption(option_95e867573de94c93aa1c1b0d43818125);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <div id="76c88ffae9be4f8989ed7ba4cf46932a" style="width:1000px;height:580px;"></div>
    </div>
</template>

<script>
    export default {
        name: "movieTypeT30",
        methods:{
            myEcharts(){
                var myChart_76c88ffae9be4f8989ed7ba4cf46932a =  this.$echarts.init(document.getElementById('76c88ffae9be4f8989ed7ba4cf46932a'), 'light', {renderer: 'canvas'});

                var option_76c88ffae9be4f8989ed7ba4cf46932a = {
                    "title": [
                        {
                            "text": "Top30\u7535\u5f71\u7c7b\u578b",
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
                    "series_id": 3326817,
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
                            "type": "pie",
                            "name": "\u7535\u5f71\u7c7b\u578b",
                            "data": [
                                {
                                    "name": "\u52a8\u4f5c",
                                    "value": 15
                                },
                                {
                                    "name": "\u6218\u4e89",
                                    "value": 3
                                },
                                {
                                    "name": "\u5267\u60c5",
                                    "value": 9
                                },
                                {
                                    "name": "\u559c\u5267",
                                    "value": 13
                                },
                                {
                                    "name": "\u52a8\u753b",
                                    "value": 1
                                },
                                {
                                    "name": "\u5947\u5e7b",
                                    "value": 9
                                },
                                {
                                    "name": "\u79d1\u5e7b",
                                    "value": 7
                                },
                                {
                                    "name": "\u5192\u9669",
                                    "value": 7
                                },
                                {
                                    "name": "\u707e\u96be",
                                    "value": 3
                                },
                                {
                                    "name": "\u60ac\u7591",
                                    "value": 1
                                },
                                {
                                    "name": "\u7231\u60c5",
                                    "value": 2
                                },
                                {
                                    "name": "\u5386\u53f2",
                                    "value": 1
                                },
                                {
                                    "name": "\u4f20\u8bb0",
                                    "value": 1
                                },
                                {
                                    "name": "\u72af\u7f6a",
                                    "value": 2
                                },
                                {
                                    "name": "\u53e4\u88c5",
                                    "value": 2
                                },
                                {
                                    "name": "\u60ca\u609a",
                                    "value": 1
                                }
                            ],
                            "radius": [
                                "0%",
                                "70%"
                            ],
                            "center": [
                                "55%",
                                "50%"
                            ],
                            "label": {
                                "normal": {
                                    "show": true,
                                    "position": "outside",
                                    "textStyle": {
                                        "fontSize": 12
                                    },
                                    "formatter": "{b}: {d}%"
                                },
                                "emphasis": {
                                    "show": true,
                                    "textStyle": {
                                        "fontSize": 12
                                    },
                                    "formatter": "{b}: {d}%"
                                }
                            },
                            "seriesId": 3326817
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u52a8\u4f5c",
                                "\u6218\u4e89",
                                "\u5267\u60c5",
                                "\u559c\u5267",
                                "\u52a8\u753b",
                                "\u5947\u5e7b",
                                "\u79d1\u5e7b",
                                "\u5192\u9669",
                                "\u707e\u96be",
                                "\u60ac\u7591",
                                "\u7231\u60c5",
                                "\u5386\u53f2",
                                "\u4f20\u8bb0",
                                "\u72af\u7f6a",
                                "\u53e4\u88c5",
                                "\u60ca\u609a"
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
                    ]
                };
                myChart_76c88ffae9be4f8989ed7ba4cf46932a.setOption(option_76c88ffae9be4f8989ed7ba4cf46932a);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
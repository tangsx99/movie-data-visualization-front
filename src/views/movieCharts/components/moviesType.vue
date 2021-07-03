<template>
    <div>
        <div id="a645c661a083415bbab54705479e9d4a" style="width:1000px;height:580px;"></div>
    </div>
</template>

<script>
    import {get_film_type_charts} from "../../../api";

    export default {
        name: "moviesType",
        data(){
            return{
                actorList: '',
            }
        },
        methods:{
            myEcharts(){
                let myChart_a645c661a083415bbab54705479e9d4a = this.$echarts.init(document.getElementById('a645c661a083415bbab54705479e9d4a'), 'light', {renderer: 'canvas'});

                let option_a645c661a083415bbab54705479e9d4a = {
                    "title": [
                        {
                            "text": "\u4e0a\u699c\u7535\u5f71\u7c7b\u578b",
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
                    "series_id": 5163605,
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
                            "data": [],
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
                            "seriesId": 5163605
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u72af\u7f6a",
                                "\u5267\u60c5",
                                "\u7231\u60c5",
                                "\u540c\u6027",
                                "\u60ac\u7591",
                                "\u559c\u5267",
                                "\u6218\u4e89",
                                "\u5386\u53f2",
                                "\u52a8\u4f5c",
                                "\u5bb6\u5ead",
                                "\u79d1\u5e7b",
                                "\u5192\u9669",
                                "\u4f20\u8bb0",
                                "\u60ca\u609a",
                                "\u97f3\u4e50",
                                "\u6b4c\u821e",
                                "\u513f\u7ae5",
                                "\u897f\u90e8",
                                "\u5947\u5e7b",
                                "\u707e\u96be",
                                "\u53e4\u88c5",
                                "\u8fd0\u52a8",
                                "\u52a8\u753b",
                                "\u6050\u6016",
                                "\u6b66\u4fa0",
                                "\u9ed1\u8272\u7535\u5f71",
                                "\u60c5\u8272"
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
                myChart_a645c661a083415bbab54705479e9d4a.setOption(option_a645c661a083415bbab54705479e9d4a);
                get_film_type_charts().then(res =>{
                    myChart_a645c661a083415bbab54705479e9d4a.hideLoading();
                    myChart_a645c661a083415bbab54705479e9d4a.setOption({
                        series: [{
                            data: res.data  //将异步请求获取到的数据进行装载
                        }]
                    })

                })


            },

        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
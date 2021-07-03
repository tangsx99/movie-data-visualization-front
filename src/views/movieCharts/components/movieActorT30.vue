<template>
    <div>
        <div id="3410101f252643b4b77fd01d2f97962b" style="width:100%;height:100%;"></div>
    </div>
</template>

<script>
    import {get_film_t30_actor_charts} from "../../../api";

    export default {
        name: "movieActorT30",
        methods:{
            myEcharts(){
                var myChart_3410101f252643b4b77fd01d2f97962b = this.$echarts.init(document.getElementById('3410101f252643b4b77fd01d2f97962b'), 'light', {renderer: 'canvas'});

                var option_3410101f252643b4b77fd01d2f97962b = {
                    "title": [
                        {
                            "text": "Top30\u6f14\u5458\u51fa\u73b0\u6b21\u6570",
                            "left": "center",
                            "top": "top",
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
                    "series_id": 1573565,
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
                            "type": "wordCloud",
                            "name": "\u6f14\u5458",
                            "shape": "circle",
                            "rotationRange": [
                                -90,
                                90
                            ],
                            "textStyle": {
                                "fontFamily": "sans-serif",
                                "fontWeight": "bold",
                                // Color can be a callback function or a color string
                                "color": function () {
                                    // Random color
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            "rotationStep": 45,
                            "girdSize": 20,
                            "sizeRange": [
                                12,
                                60
                            ],
                            "data": []
                        }
                    ],
                    "legend": [
                        {
                            "data": [],
                            "selectedMode": "multiple",
                            "show": true,
                            "left": "center",
                            "top": "top",
                            "orient": "horizontal",
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
                myChart_3410101f252643b4b77fd01d2f97962b.setOption(option_3410101f252643b4b77fd01d2f97962b);
                get_film_t30_actor_charts().then(res =>{
                    let arr = []
                    for (let i = 0; i< res.data.length; i++){
                        console.log(res.data[i].name.length)
                        if (res.data[i].value > 1 || res.data[i].name.length <5){
                            arr.push(res.data[i])
                        }
                    }
                    myChart_3410101f252643b4b77fd01d2f97962b.hideLoading();
                    myChart_3410101f252643b4b77fd01d2f97962b.setOption({
                        series: [{
                            data: arr  //将异步请求获取到的数据进行装载
                        }]
                    })

                })
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
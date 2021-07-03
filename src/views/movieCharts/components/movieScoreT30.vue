<template>
    <div>
        <div id="0b4a0450edc24d5fb2dccf0d293e829a" style="width:1000px;height:600px;"></div>
    </div>
</template>

<script>
    export default {
        name: "movieScoreT30",
        methods: {
            myEcharts(){
                var myChart_0b4a0450edc24d5fb2dccf0d293e829a = this.$echarts.init(document.getElementById('0b4a0450edc24d5fb2dccf0d293e829a'), 'light', {renderer: 'canvas'});

                var option_0b4a0450edc24d5fb2dccf0d293e829a = {
                    "title": [
                        {
                            "text": "Top30\u8bc4\u5206\u548c\u8bc4\u8bba\u4eba\u6570",
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
                    "series_id": 8188460,
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
                            "name": "\u8bc4\u4ef7\u4eba\u6570",
                            "symbol": "emptyCircle",
                            "symbolSize": 4,
                            "smooth": false,
                            "step": false,
                            "showSymbol": true,
                            "itemStyle" : {
                                "normal" : {
                                    "color":"#6495ED"
                                }
                            },
                            "data": [
                                [
                                    "\u4e2d\u56fd\u673a\u957f",
                                    -0.10763742142913484
                                ],
                                [
                                    "\u4f8f\u7f57\u7eaa\u4e16\u754c2 Jurassic World: Fallen Kingdom",
                                    -0.8876025548315102
                                ],
                                [
                                    "\u516b\u4f70",
                                    -0.08514881893301587
                                ],
                                [
                                    "\u524d\u4efb3\uff1a\u518d\u89c1\u524d\u4efb",
                                    -0.836777086817957
                                ],
                                [
                                    "\u529f\u592b\u745c\u4f3d",
                                    -1.3109130669156364
                                ],
                                [
                                    "\u53d8\u5f62\u91d1\u521a4\uff1a\u7edd\u8ff9\u91cd\u751f Transformers: Age of Extinction",
                                    -0.9895651938243658
                                ],
                                [
                                    "\u54ea\u5412\u4e4b\u9b54\u7ae5\u964d\u4e16",
                                    2.328219058208999
                                ],
                                [
                                    "\u5510\u4eba\u8857\u63a2\u68482",
                                    0.28092331985861385
                                ],
                                [
                                    "\u590d\u4ec7\u8005\u8054\u76df3\uff1a\u65e0\u9650\u6218\u4e89 Avengers: Infinity War",
                                    0.04948131284731729
                                ],
                                [
                                    "\u590d\u4ec7\u8005\u8054\u76df4\uff1a\u7ec8\u5c40\u4e4b\u6218 Avengers: Endgame",
                                    0.6290061096187537
                                ],
                                [
                                    "\u5bfb\u9f99\u8bc0",
                                    -0.37216593177203106
                                ],
                                [
                                    "\u6211\u4e0d\u662f\u836f\u795e",
                                    2.568958500403592
                                ],
                                [
                                    "\u6211\u548c\u6211\u7684\u5bb6\u4e61",
                                    -0.5050408181632671
                                ],
                                [
                                    "\u6211\u548c\u6211\u7684\u7956\u56fd",
                                    0.4540819821594507
                                ],
                                [
                                    "\u6218\u72fc2",
                                    0.27169486811855686
                                ],
                                [
                                    "\u6349\u5996\u8bb02",
                                    -0.918006368703791
                                ],
                                [
                                    "\u6bd2\u6db2\uff1a\u81f4\u547d\u5b88\u62a4\u8005 Venom",
                                    0.08677325127419214
                                ],
                                [
                                    "\u6d41\u6d6a\u5730\u7403",
                                    2.481387851624397
                                ],
                                [
                                    "\u6d77\u738b Aquaman",
                                    0.25563194561309216
                                ],
                                [
                                    "\u6e2f\u56e7",
                                    -0.8296487976831954
                                ],
                                [
                                    "\u70c8\u706b\u82f1\u96c4",
                                    -1.0177717572823475
                                ],
                                [
                                    "\u75af\u72c2\u7684\u5916\u661f\u4eba",
                                    -0.17911448839475902
                                ],
                                [
                                    "\u7ea2\u6d77\u884c\u52a8",
                                    0.5312131365283823
                                ],
                                [
                                    "\u7f8e\u4eba\u9c7c",
                                    0.05196727174628614
                                ],
                                [
                                    "\u7f9e\u7f9e\u7684\u94c1\u62f3",
                                    -0.1816745406216519
                                ],
                                [
                                    "\u897f\u6e38\u4f0f\u5996\u7bc7",
                                    -0.9021452866433608
                                ],
                                [
                                    "\u897f\u8679\u5e02\u9996\u5bcc",
                                    0.4731239674359305
                                ],
                                [
                                    "\u901f\u5ea6\u4e0e\u6fc0\u60c57 Furious 7",
                                    -0.6660558395115871
                                ],
                                [
                                    "\u901f\u5ea6\u4e0e\u6fc0\u60c58 The Fate of the Furious",
                                    -0.9569436899990481
                                ],
                                [
                                    "\u98de\u9a70\u4eba\u751f",
                                    0.2837490860890964
                                ]
                            ],
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
                                    "type": "solid",
                                    "color": "#6495ED"
                                }
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "markPoint": {
                                "data": []
                            },
                            "markLine": {
                                "data": []
                            },
                            "seriesId": 8188460
                        },
                        {
                            "type": "line",
                            "name": "\u8bc4\u5206",
                            "symbol": "emptyCircle",
                            "symbolSize": 4,
                            "smooth": false,
                            "step": false,
                            "showSymbol": true,
                            "itemStyle" : {
                                "normal" : {
                                    "color":"#90EE90"
                                }
                            },
                            "data": [
                                [
                                    "\u4e2d\u56fd\u673a\u957f",
                                    -0.30153081479157234
                                ],
                                [
                                    "\u4f8f\u7f57\u7eaa\u4e16\u754c2 Jurassic World: Fallen Kingdom",
                                    -0.30153081479157234
                                ],
                                [
                                    "\u516b\u4f70",
                                    0.5645683340778367
                                ],
                                [
                                    "\u524d\u4efb3\uff1a\u518d\u89c1\u524d\u4efb",
                                    -1.4563296799507852
                                ],
                                [
                                    "\u529f\u592b\u745c\u4f3d",
                                    -2.0337291125303913
                                ],
                                [
                                    "\u53d8\u5f62\u91d1\u521a4\uff1a\u7edd\u8ff9\u91cd\u751f Transformers: Age of Extinction",
                                    -0.39776405355484057
                                ],
                                [
                                    "\u54ea\u5412\u4e4b\u9b54\u7ae5\u964d\u4e16",
                                    1.3344342441839792
                                ],
                                [
                                    "\u5510\u4eba\u8857\u63a2\u68482",
                                    -0.39776405355484057
                                ],
                                [
                                    "\u590d\u4ec7\u8005\u8054\u76df3\uff1a\u65e0\u9650\u6218\u4e89 Avengers: Infinity War",
                                    1.0457345278941752
                                ],
                                [
                                    "\u590d\u4ec7\u8005\u8054\u76df4\uff1a\u7ec8\u5c40\u4e4b\u6218 Avengers: Endgame",
                                    1.4306674829472465
                                ],
                                [
                                    "\u5bfb\u9f99\u8bc0",
                                    0.3721018565513019
                                ],
                                [
                                    "\u6211\u4e0d\u662f\u836f\u795e",
                                    1.911833676763585
                                ],
                                [
                                    "\u6211\u548c\u6211\u7684\u5bb6\u4e61",
                                    0.2758686177880337
                                ],
                                [
                                    "\u6211\u548c\u6211\u7684\u7956\u56fd",
                                    0.6608015728411049
                                ],
                                [
                                    "\u6218\u72fc2",
                                    0.08340214026149806
                                ],
                                [
                                    "\u6349\u5996\u8bb02",
                                    -1.9374958737671237
                                ],
                                [
                                    "\u6bd2\u6db2\uff1a\u81f4\u547d\u5b88\u62a4\u8005 Venom",
                                    0.17963537902476628
                                ],
                                [
                                    "\u6d41\u6d6a\u5730\u7403",
                                    0.7570348116043722
                                ],
                                [
                                    "\u6d77\u738b Aquaman",
                                    0.5645683340778367
                                ],
                                [
                                    "\u6e2f\u56e7",
                                    -1.2638632024242495
                                ],
                                [
                                    "\u70c8\u706b\u82f1\u96c4",
                                    -0.49399729231810796
                                ],
                                [
                                    "\u75af\u72c2\u7684\u5916\u661f\u4eba",
                                    -0.5902305310813754
                                ],
                                [
                                    "\u7ea2\u6d77\u884c\u52a8",
                                    1.2382010054207118
                                ],
                                [
                                    "\u7f8e\u4eba\u9c7c",
                                    -0.30153081479157234
                                ],
                                [
                                    "\u7f9e\u7f9e\u7684\u94c1\u62f3",
                                    -0.20529757602830495
                                ],
                                [
                                    "\u897f\u6e38\u4f0f\u5996\u7bc7",
                                    -1.4563296799507852
                                ],
                                [
                                    "\u897f\u8679\u5e02\u9996\u5bcc",
                                    -0.49399729231810796
                                ],
                                [
                                    "\u901f\u5ea6\u4e0e\u6fc0\u60c57 Furious 7",
                                    1.3344342441839792
                                ],
                                [
                                    "\u901f\u5ea6\u4e0e\u6fc0\u60c58 The Fate of the Furious",
                                    -0.012831098501769327
                                ],
                                [
                                    "\u98de\u9a70\u4eba\u751f",
                                    -0.10906433726503671
                                ]
                            ],
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
                                    "type": "solid",
                                    "color": "#90EE90"
                                }
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "markPoint": {
                                "data": []
                            },
                            "markLine": {
                                "data": []
                            },
                            "seriesId": 8188460
                        }
                    ],
                    "legend": [
                        {
                            "data": [
                                "\u8bc4\u4ef7\u4eba\u6570",
                                "\u8bc4\u5206"
                            ],
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
                                "\u4e2d\u56fd\u673a\u957f",
                                "\u4f8f\u7f57\u7eaa\u4e16\u754c2 Jurassic World: Fallen Kingdom",
                                "\u516b\u4f70",
                                "\u524d\u4efb3\uff1a\u518d\u89c1\u524d\u4efb",
                                "\u529f\u592b\u745c\u4f3d",
                                "\u53d8\u5f62\u91d1\u521a4\uff1a\u7edd\u8ff9\u91cd\u751f Transformers: Age of Extinction",
                                "\u54ea\u5412\u4e4b\u9b54\u7ae5\u964d\u4e16",
                                "\u5510\u4eba\u8857\u63a2\u68482",
                                "\u590d\u4ec7\u8005\u8054\u76df3\uff1a\u65e0\u9650\u6218\u4e89 Avengers: Infinity War",
                                "\u590d\u4ec7\u8005\u8054\u76df4\uff1a\u7ec8\u5c40\u4e4b\u6218 Avengers: Endgame",
                                "\u5bfb\u9f99\u8bc0",
                                "\u6211\u4e0d\u662f\u836f\u795e",
                                "\u6211\u548c\u6211\u7684\u5bb6\u4e61",
                                "\u6211\u548c\u6211\u7684\u7956\u56fd",
                                "\u6218\u72fc2",
                                "\u6349\u5996\u8bb02",
                                "\u6bd2\u6db2\uff1a\u81f4\u547d\u5b88\u62a4\u8005 Venom",
                                "\u6d41\u6d6a\u5730\u7403",
                                "\u6d77\u738b Aquaman",
                                "\u6e2f\u56e7",
                                "\u70c8\u706b\u82f1\u96c4",
                                "\u75af\u72c2\u7684\u5916\u661f\u4eba",
                                "\u7ea2\u6d77\u884c\u52a8",
                                "\u7f8e\u4eba\u9c7c",
                                "\u7f9e\u7f9e\u7684\u94c1\u62f3",
                                "\u897f\u6e38\u4f0f\u5996\u7bc7",
                                "\u897f\u8679\u5e02\u9996\u5bcc",
                                "\u901f\u5ea6\u4e0e\u6fc0\u60c57 Furious 7",
                                "\u901f\u5ea6\u4e0e\u6fc0\u60c58 The Fate of the Furious",
                                "\u98de\u9a70\u4eba\u751f"
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
                myChart_0b4a0450edc24d5fb2dccf0d293e829a.setOption(option_0b4a0450edc24d5fb2dccf0d293e829a);
            }
        },
        mounted() {
            this.myEcharts()
        }
    }
</script>

<style scoped>

</style>
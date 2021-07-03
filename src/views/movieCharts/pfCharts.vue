<template>
    <div class="Echarts">
        <el-row :gutter="16">
            <el-col :span="11">
                <el-card shadow="always">
                    <div slot="header" class="clearfix">
                        <span>近五年电影票房</span>
                    </div>
                    <div id="main" style="width: 100%; height:240px"></div>
                </el-card>
            </el-col>
            <el-col :span="13">
                <el-card shadow="always">
                    <div slot="header" class="clearfix">
                        <span>上榜电影超过10部的地区/国家</span>
                    </div>
                    <movies-country10 style="width: 100%; height:240px"></movies-country10>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="12">
                <el-card shadow="always">
                    <div slot="header" class="clearfix">
                        <span>排行榜电影地区分布图</span>
                    </div>
                    <movie-map style="width: 100%; height: 340px"></movie-map>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="always">
                    <div slot="header" class="clearfix">
                        <span>各年代电影分布</span>
                    </div>
                    <movies-age style="width: 100%; height: 340px"></movies-age>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="12">
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>上榜电影数超8的国家/地区</span>
                    </div>
                    <movies-country8 style="width: 100%; height: 360px"></movies-country8>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>各年代电影数与评分关系</span>
                    </div>
                    <movies-score style="width: 100%; height: 360px"></movies-score>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="12">
            <el-col :span="24">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>演员出现频率数</span>
                    </div>
                    <movies-actor style="width: 100%; height: 600px"></movies-actor>
                </el-card>
            </el-col>
        </el-row>
<!--        <movies-score ></movies-score>-->
<!--        <movies-type style="padding-left: 150px"></movies-type>-->
<!--        <movies-country10 style="padding-left: 150px"></movies-country10>-->
<!--        <movies-country8 style="padding-left: 150px"></movies-country8>-->
<!--        <movies-actor></movies-actor>-->
<!--        <movie-type-t30 style="padding-left: 150px"></movie-type-t30>-->
<!--        <movie-score-t30 style="padding-left: 150px"></movie-score-t30>-->
<!--        <movie-actor-t30></movie-actor-t30>-->
<!--        <movie-map style="padding-left: 20px"></movie-map>-->

    </div>
</template>

<script>
    import {year_total} from '../../api/index'
    import moviesAge from "./components/moviesAge";
    import movieMap from "./components/movieMap";
    import movieActorT30 from "./components/movieActorT30";
    import movieScoreT30 from "./components/movieScoreT30";
    import movieTypeT30 from "./components/movieTypeT30";
    import moviesActor from "./components/moviesActor";
    import moviesCountry8 from "./components/moviesCountry8";
    import moviesCountry10 from "./components/moviesCountry10";
    import moviesType from "./components/moviesType";
    import moviesScore from "./components/moviesScore";


    export default {
        name: "pfCharts",
        data() {
            return {
                boxOfficeList: [],
                majorTitle: '',
                minorTitle: '',
                yearStr: [2016, 2017, 2018, 2019, 2020],
                yearNum: [454.23, 558.39, 606.98, 641.47, 203.11],

            }
        },
        components:{
            moviesAge:moviesAge,
            moviesScore:moviesScore,
            moviesType:moviesType,
            moviesCountry10:moviesCountry10,
            moviesCountry8:moviesCountry8,
            moviesActor:moviesActor,
            movieTypeT30:movieTypeT30,
            movieScoreT30:movieScoreT30,
            movieActorT30:movieActorT30,
            movieMap:movieMap,
        },
        methods: {
             getYear() {
                year_total().then(res => {
                }).catch((err) => {
                })
            },

            myEcharts() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                    // title: {
                    //     text: '近五年电影票房'
                    // },
                    tooltip: {},
                    toolbox:{
                        show: true,
                        feature: {
                            saveAsImage: {},
                            magicType: {type: ['line', 'bar']},
                            dataView: {
                                readOnly: false
                            },
                        }
                    },
                    dataZoom: [
                        {   // 这个dataZoom组件，也控制x轴。
                            type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                            start: 0,      // 左边在 10% 的位置。
                            end: 100         // 右边在 60% 的位置。
                        }
                    ],
                    legend: {
                        data: ['票房']
                    },
                    xAxis: {
                        name: '年份',
                        data: this.yearStr
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} 亿元'
                        }
                    },
                    series: [
                        {
                        name: '票房',
                        type: 'bar',
                        data: this.yearNum,
                            "itemStyle":{
                                "normal":{
                                    "color":"#6495ED"
                                }
                            },
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },

        },
        mounted() {
            this.myEcharts();
            this.getYear();
        }
    }
</script>

<style scoped lang="less">
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

</style>
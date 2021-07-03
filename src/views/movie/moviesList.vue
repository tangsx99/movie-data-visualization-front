<template>
    <div>
        <div>
            <div class="title-style">高分电影列表
                <div class="icon-row">
                    <el-tooltip class="item" effect="dark" content="电影评分评价折线图" placement="top">
                    <el-button @click="bars = true" type="mini" icon="el-icon-s-data"></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="电影类型饼状图" placement="top">
                    <el-button @click="pies = true" type="mini" icon="el-icon-pie-chart"></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="演员频率词云" placement="top">
                    <el-button @click="word = true" type="mini" icon="el-icon-coin"></el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="电影分布" placement="top">
                    <el-button @click="drawer = true" type="mini" icon="el-icon-share"></el-button>
                    </el-tooltip>
                </div>
            </div>
            <el-table
                    :data="List"
                    stripe
                    style="width: 100%">
                <el-table-column
                        type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <span class="image-span">
                                <el-image fit="contain" :src="props.row.image"></el-image>
                            </span>
                            <span class="word-span">
                            <el-form-item label="排名" class="w40">
                                <span>{{ props.row.rankId }}</span>
                            </el-form-item>
                            <el-form-item label="影片名" class="w50">
                                <span class="title">{{ props.row.movieName }}</span>
                            </el-form-item>
                            <el-form-item label="电影类型" class="w40">
                                <span>{{ props.row.movieType }}</span>
                            </el-form-item>
                            <el-form-item label="导演" class="w40">
                                <span>{{ props.row.director }}</span>
                            </el-form-item>
                            <el-form-item label="主演" class="w100">
                                <span>{{ props.row.actors }}</span>
                            </el-form-item>
                            <el-form-item label="评价人数" class="w40">
                                <span>{{ props.row.commentNum }}</span>
                            </el-form-item>
<!--                            <el-form-item label="评分" class="w40">-->
<!--                                <span>{{ props.row.score }}</span>-->
<!--                            </el-form-item>-->
                            <el-form-item label="国家/地区" class="w40">
                                <span>{{ props.row.country }}</span>
                            </el-form-item>
                            <el-form-item label="年代" class="w40">
                                <span class="datatime">{{ props.row.years }}</span>
                            </el-form-item>
                         </span>
                            <span class="score-span">
                                <span>评分：</span><span class="word-style">{{ props.row.score }}</span>
                        </span>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="rankId"
                        label="排名">
                </el-table-column>
                <el-table-column
                        prop="movieName"
                        label="电影名称">
                </el-table-column>
<!--                <el-table-column-->
<!--                        prop="movieType"-->
<!--                        label="电影类型">-->
<!--                </el-table-column>-->
                <el-table-column
                        prop="director"
                        label="导演">
                </el-table-column>
<!--                <el-table-column-->
<!--                        prop="actors"-->
<!--                        label="主演">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="commentNum"-->
<!--                        label="评价人数">-->
<!--                </el-table-column>-->
                <el-table-column
                        prop="score"
                        label="评分">
                </el-table-column>
                <el-table-column
                        prop="country"
                        label="国家/地区">
                </el-table-column>
                <el-table-column
                        prop="years"
                        label="年代">
                </el-table-column>
            </el-table>

            <el-col :span="24" class="toolbar">
                <el-pagination layout="total,prev, pager, next"
                               @current-change="handleCurrentChange"
                               :page-size="this.pageSize"
                               :total="this.total"
                               ref="pagination"
                               style="float:right;">
                </el-pagination>
            </el-col>

        </div>
        <div>
            <el-drawer
                    v-loading="loading"
                    size="72%"
                    :visible.sync="bars"
                    :direction="direction"
                    :before-close="handleClose">
                <div>
                    <movies-score style="width: 100%; height: 620px"></movies-score>
                </div>
            </el-drawer>
        </div>
        <div>
            <el-drawer
                    size="90%"
                    :visible.sync="pies"
                    :direction="direction"
                    :before-close="handleClose">
                <div>
                    <movies-type style="padding-left: 150px"></movies-type>
                </div>
            </el-drawer>

        </div>
        <div>
            <el-drawer
                    size="90%"
                    :visible.sync="drawer"
                    :direction="direction"
                    :with-header="false"
                    :before-close="handleClose">
                <div>
                    <div class="title-style">排行榜电影地区分布图</div>
                    <movie-map class="map-style" style="width: 100%; height: 680px"></movie-map>
                </div>
            </el-drawer>

        </div>
        <div>
            <el-drawer
                    v-loading="loading"
                    size="90%"
                    :visible.sync="word"
                    :direction="direction"
                    :with-header="false"
                    :before-close="handleClose">
                <div>
                        <div class="title-style">上榜电影中各演员出现频率数</div>
                    <movies-actor style="width: 100%; height: 680px"></movies-actor>
                </div>
            </el-drawer>
        </div>
    </div>
</template>

<script>
    import {movies_rank} from "../../api";
    import movieMap from "../movieCharts/components/movieMap";
    import moviesActor from "../movieCharts/components/moviesActor";
    import moviesType from "../movieCharts/components/moviesType";
    import moviesScore from "../movieCharts/components/moviesScore";

    export default {
        name: "moviesList",
        data() {
            return {
                List:[],
                majorTitle: '',
                minorTitle: '',
                total: 0,
                pageSize: 10,
                queryParam: {
                    page: 1,  //页数
                },
                word: false,
                drawer: false,
                direction: 'rtl',
                loading: true,
                pies: false,
                bars: false,

            }
        },
        methods: {
            getList(queryParam){
                movies_rank(this.queryParam).then(res =>{
                    this.List = res.data;
                    this.total = res.total;
                    this.pageSize = res.pageSize;
                    for(let i = 0; i < this.List.length; i++){
                        this.List[i].rankId = this.List[i].rankId + 1
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            /**
             *
             * @param val
             */
            handleCurrentChange(val) {
                this.queryParam.page = val;
                this.getList();
                this.queryParam.page = 1;
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }

        },
        components: {
            movieMap,
            moviesActor,
            moviesType,
            moviesScore
        },

        mounted() {
            this.getList();
        }

    }
</script>


<style scoped lang="less">
    .title-style{
        text-align: center;
        font-size: 24px;
        color: transparent;
        background-color : black;
        padding-top: 8px;
        margin-bottom: 12px;
        text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;
        -webkit-background-clip : text;
        .icon-row{
            display: flex;
            flex-direction: row-reverse;
            font-size: 16px;
            margin-right: 50px;
        }
    }
    /deep/  .el-table th>.cell{
        text-align: center;
    }
    /deep/ .el-table .cell{
        text-align: center;
    }

    .demo-table-expand {
        /deep/ .el-form-item__label{
            font-weight: bolder;
        }
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
    }

    .w40{
        width: 40%;
    }
    .w50{
        width: 50%;
    }
    .w100{
        width: 100%;
    }
    .map-style{
        transform: scale(0.90);
    }
    /deep/ .el-image__inner{
        width: 124px;
        height: 200px;
    }
    .image-span{
        display: inline-block;
        width: 20%;
        float: left;
    }
    .word-span{
        display: inline-block;
        width: 70%;
    }
    .score-span{
        display: inline-block;
        width: 10%;
        float: right;
        padding: 80px 0;
    }
    .word-style{
        font-size: 36px;
        color: #ffb400;
        font-style: italic;
        font-weight: 700;
    }
    .title{
        font-size: 18px;
        color: #333;
        white-space: nowrap;
    }
    .datatime{
        margin-top: 8px;
        color: #999;
    }

</style>
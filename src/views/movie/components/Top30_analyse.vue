<template>
    <div>
        <div class="title-style">
        <span>
            <el-tooltip class="item" effect="dark" content="电影评分评价折线图" placement="top">
            <el-button @click="drawer = true" type="mini" icon="el-icon-share"></el-button>
            </el-tooltip>
        </span>
        </div>
        <div>
            <el-table
                    :data="boxOfficeList"
                    stripe
                    style="width: 100%">
                <el-table-column
                        prop="rankId"
                        label="排名">
                </el-table-column>
                <el-table-column
                        prop="movieName"
                        label="影片名">
                </el-table-column>
                <el-table-column
                        prop="five"
                        label="五星">
                </el-table-column>
                <el-table-column
                                 prop="four"
                                 label="四星">
                </el-table-column>
                <el-table-column
                        prop="three"
                        label="三星">
                </el-table-column>
                <el-table-column
                        prop="two"
                        label="两星">
                </el-table-column>
                <el-table-column
                        prop="one"
                        label="一星">
                </el-table-column>
                <el-table-column
                        prop="rem"
                        label="推荐度">
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-drawer
                    size="70%"
                    :visible.sync="drawer"
                    :direction="direction"
                    :before-close="handleClose">
                <div>
                    <movie-score-t30></movie-score-t30>
                </div>
            </el-drawer>

        </div>
    </div>
</template>

<script>
    import {movies_t30_analyse} from "../../../api";
    import movieScoreT30 from "../../movieCharts/components/movieScoreT30";

    export default {
        name: "Top30_analyse",
        components: {
            movieScoreT30
        },
        data() {
            return {
                boxOfficeList:[],
                direction: 'rtl',
                loading: true,
                drawer: false

            }
        },

        methods: {
             getT30() {
                movies_t30_analyse().then(res =>{
                    this.boxOfficeList = res.data;
                    for(let i = 0; i < this.boxOfficeList.length; i++){
                        this.boxOfficeList[i].rankId = this.boxOfficeList[i].rankId + 1
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        },

        mounted() {
            this.getT30()
        }
    }
</script>

<style scoped lang="less">
    .title-style{

        text-align: center;
        font-size: 24px;
        color: transparent;
        background-color : black;
        margin-bottom: 12px;
        text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;
        -webkit-background-clip : text;
        span{
            float: right;
            margin-right: 50px;
        }
    }
    /deep/  .el-table th>.cell{
        text-align: center;
    }
    /deep/ .el-table .cell{
        text-align: center;
    }
</style>
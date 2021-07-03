<template>
    <div>
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
                            <el-form-item label="排名" class="w100">
                                <span>{{ props.row.rankId }}</span>
                            </el-form-item>
                            <el-form-item label="影片名" class="w100">
                                <span class="title">{{ props.row.movieName }}</span>
                            </el-form-item>
                            <el-form-item label="主演" class="w100">
                                <span>{{ props.row.actors }}</span>
                            </el-form-item>
                            <el-form-item label="年代" class="w100">
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
            <el-table-column
                    prop="actors"
                    label="主演">
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
</template>

<script>
    import {get_film_t100} from "../../api";
    export default {
        name: "movieTopList",
        data(){
            return{
                queryParam: {
                    page: 1,  //页数
                },
                List:[],
                total: 0,
                pageSize: 10,
            }
        },
        methods: {
            getFilmList(){
                get_film_t100(this.queryParam).then(res =>{
                    this.List = res.data
                    this.total = res.total;
                    this.pageSize = res.pageSize;
                    for(let i = 0; i < this.List.length; i++){
                        this.List[i].rankId = this.List[i].rankId + 1
                        this.List[i].actors = this.List[i].actors.slice(21)
                    }
                }).catch(err =>{
                    console.log(err)
                })
            },

            /**
             *
             * @param val
             */
            handleCurrentChange(val) {
                this.queryParam.page = val;
                this.getFilmList();
                this.queryParam.page = 1;
            },

        },
        mounted() {
            this.getFilmList()
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

    .title{
        font-size: 24px;
        color: #333;
        white-space: nowrap;
        display: block;
    }
    .w60{
        width: 60%;
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
    .datatime{
        margin-top: 8px;
        color: #999;
    }

</style>
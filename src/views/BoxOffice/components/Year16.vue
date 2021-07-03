<template>
    <div>
        <div class="title-style">{{majorTitle}}
            <div class="small-title">{{minorTitle}}</div>
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
                        prop="releaseInfo"
                        label="上映时间">
                </el-table-column>
                <el-table-column
                        prop="boxDesc"
                        label="票房（万）">
                </el-table-column>
                <el-table-column
                        prop="avgViewBoxDesc"
                        label="平均票价（元）">
                </el-table-column>
                <el-table-column
                        prop="avgShowViewDesc"
                        label="均场人数">
                </el-table-column>
            </el-table>

            <el-col :span="24" class="toolbar">
                <el-pagination layout="total,prev, pager, next"
                               @current-change="handleCurrentChange"
                               :page-size="this.pageSize"
                               :total="total"
                               ref="pagination"
                               style="float:right;">
                </el-pagination>
            </el-col>
        </div>

    </div>
</template>

<script>
    import {year_16, year_2016, year_total} from '../../../api/index'

    export default {
        name: "Year16",
        data() {
            return {
                boxOfficeList:[],
                majorTitle: '',
                minorTitle: '',
                total: 100,
                pageSize: 10,
                queryParam: {
                    page: 1,  //页数
                },

            }
        },
        methods: {
            //  get2016() {
            //     year_16().then(res =>{
            //         this.boxOfficeList = res.data;
            //         for(let i = 0; i < this.boxOfficeList.length; i++){
            //             this.boxOfficeList[i].rankId =  (res.currentPage -1) * 10  + 1 + i
            //         }
            //     }).catch((err) => {
            //         console.log(err)
            //     })
            //
            // },

             get16(queryParam){
                year_2016(this.queryParam).then(res =>{
                    this.boxOfficeList = res.data;
                    this.total = res.total;
                    this.pageSize = res.pageSize;
                    for(let i = 0; i < this.boxOfficeList.length; i++){
                        this.boxOfficeList[i].rankId =  (res.currentPage -1) * 10  + 1 + i
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
                this.get16();
                this.queryParam.page = 1;
            },



             getYear() {
                year_total().then(res =>{
                    this.majorTitle = res.data[4].majorTitle;
                    this.minorTitle = res.data[4].minorTitle;
                    // console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                })

            },
        },
        components: {},

        mounted() {
            this.get16();
            this.getYear();
        }

    }
</script>


<style scoped lang="less">
    .title-style{
        text-align: center;
        font-size: 24px;
        color: transparent;
        background-color : black;
        margin-bottom: 4px;
        text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;
        -webkit-background-clip : text;
        .small-title{
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
</style>
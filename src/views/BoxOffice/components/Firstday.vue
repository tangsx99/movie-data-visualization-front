<template>
    <div>
        <div class="title-style">首日票房排行</div>
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
                        prop="weekDayInfo"
                        label="星期">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
    import { first_day } from '../../../api/index'
    export default {
        name: "Firstday",
        data() {
            return {
                boxOfficeList:[],

            }
        },
        methods: {
            async getFirst() {
                first_day().then(res =>{
                    this.boxOfficeList = res.data;
                    for(let i = 0; i < this.boxOfficeList.length; i++){
                        this.boxOfficeList[i].rankId = this.boxOfficeList[i].rankId + 1
                    }
                }).catch((err) => {
                    console.log(err)
                })

            },


        },
        components: {},

        mounted() {
            this.getFirst();
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
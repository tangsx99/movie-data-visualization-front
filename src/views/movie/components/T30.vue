<template>
    <div>
        <div class="title-style">
        <div class="icon-row">
            <el-tooltip class="item" effect="dark" content="电影类型饼状图" placement="top">
            <el-button @click="pies = true" type="mini" icon="el-icon-pie-chart"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="演员频率词云图" placement="top">
            <el-button @click="word = true" type="mini" icon="el-icon-coin"></el-button>
            </el-tooltip>
        </div>
        </div>
        <div>
            <el-table
                    :data="boxOfficeList"
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
                            <el-form-item label="排名" class="w30">
                                <span>{{ props.row.rankId }}</span>
                            </el-form-item>
                            <el-form-item label="影片名" class="w30">
                                <span>{{ props.row.movieName }}</span>
                            </el-form-item>
                            <el-form-item label="导演" class="w30">
                                <span>{{ props.row.director }}</span>
                            </el-form-item>
                            <el-form-item label="主演" class="w100">
                                <span>{{ props.row.actors }}</span>
                            </el-form-item>
                            <el-form-item label="电影类型" class="w30">
                                <span>{{ props.row.movieType }}</span>
                            </el-form-item>
                            <el-form-item label="评价人数" class="w30">
                                <span>{{ props.row.commentNum }}</span>
                            </el-form-item>
                            <el-form-item label="口碑" class="w30">
                                <span>{{ props.row.publicPraise }}</span>
                            </el-form-item>
                            <el-form-item label="评分" class="w30">
                                <span>{{ props.row.score }}</span>
                            </el-form-item>
                            <el-form-item label="简介" class="w100">
                                <span>{{ props.row.info }}</span>
                            </el-form-item>
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
                        label="影片名">
                </el-table-column>
                <el-table-column
                        prop="director"
                        label="导演">
                </el-table-column>
<!--                <el-table-column width="360px"-->
<!--                        prop="actors"-->
<!--                        label="主演">-->
<!--                </el-table-column>-->
                <el-table-column
                        prop="movieType"
                        label="电影类型">
                </el-table-column>
<!--                <el-table-column-->
<!--                        prop="commentNum"-->
<!--                        label="评价人数">-->
<!--                </el-table-column>-->
                <el-table-column
                        prop="publicPraise"
                        label="口碑">
                </el-table-column>
                <el-table-column
                        prop="score"
                        label="评分">
                </el-table-column>
<!--                <el-table-column width="480px"-->
<!--                        prop="info"-->
<!--                        label="简介">-->
<!--                </el-table-column>-->
                <el-table-column>
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text">情感</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-drawer
                title=""
                :visible.sync="charts"
                direction="rtl"
                :before-close="handleClose"
                size="72%">
            <wolf-warriors2 v-if="this.filmId == 1" style="padding-left: 50px"></wolf-warriors2>
            <ne-zha v-if="this.filmId == 2" style="padding-left: 50px"></ne-zha>
            <liu-lang v-if="this.filmId == 3" style="padding-left: 50px"></liu-lang>
            <fu-lian4 v-if="this.filmId == 4" style="padding-left: 50px"></fu-lian4>
            <hong-hai v-if="this.filmId == 5" style="padding-left: 50px"></hong-hai>
            <tang-ren v-if="this.filmId == 6" style="padding-left: 50px"></tang-ren>
            <mei-ren v-if="this.filmId == 7" style="padding-left: 50px"></mei-ren>
            <my-nation v-if="this.filmId == 8" style="padding-left: 50px"></my-nation>
            <ba-bai v-if="this.filmId == 9" style="padding-left: 50px"></ba-bai>
            <wo-bu v-if="this.filmId == 10" style="padding-left: 50px"></wo-bu>
            <zhong-guo v-if="this.filmId == 11" style="padding-left: 50px"></zhong-guo>
            <my-hometown v-if="this.filmId == 12" style="padding-left: 50px"></my-hometown>
            <su8 v-if="this.filmId == 13" style="padding-left: 50px"></su8>
            <xi-hong v-if="this.filmId ==14" style="padding-left: 50px"></xi-hong>
            <su7 v-if="this.filmId == 15" style="padding-left: 50px"></su7>
            <fu-lian3 v-if="this.filmId == 16" style="padding-left: 50px"></fu-lian3>
            <zhuo-yao v-if="this.filmId == 17" style="padding-left: 50px"></zhuo-yao>
            <xiu-xiu v-if="this.filmId == 18" style="padding-left: 50px"></xiu-xiu>
            <feng-kuang v-if="this.filmId == 19" style="padding-left: 50px"></feng-kuang>
            <hai-wang v-if="this.filmId == 20" style="padding-left: 50px"></hai-wang>
            <bian-xing4 v-if="this.filmId == 21" style="padding-left: 50px"></bian-xing4>
            <qian-ren v-if="this.filmId == 22" style="padding-left: 50px"></qian-ren>
            <du-ye v-if="this.filmId == 23" style="padding-left: 50px"></du-ye>
            <gong-fu v-if="this.filmId == 24" style="padding-left: 50px"></gong-fu>
            <fei-chi v-if="this.filmId == 25" style="padding-left: 50px"></fei-chi>
            <lie-huo v-if="this.filmId == 26" style="padding-left: 50px"></lie-huo>
            <zhu-luo v-if="this.filmId == 27" style="padding-left: 50px"></zhu-luo>
            <xun-long v-if="this.filmId == 28" style="padding-left: 50px"></xun-long>
            <xun-long v-if="this.filmId == 29" style="padding-left: 50px"></xun-long>
            <gang-jiong v-if="this.filmId == 30" style="padding-left: 50px"></gang-jiong>
        </el-drawer>

        <div>
            <el-drawer
                    size="90%"
                    :visible.sync="word"
                    :direction="direction"
                    :with-header="false"
                    :before-close="handleClose">
                <div>
                    <movie-actor-t30 style="width: 100%; height: 680px"></movie-actor-t30>
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
                    <movie-type-t30 style="padding-left: 150px"></movie-type-t30>
                </div>
            </el-drawer>

        </div>
    </div>
</template>


<script>
    import {movies_t30} from "../../../api";
    import WolfWarriors2 from "../../../components/details/WolfWarriors2";
    import NeZha from "../../../components/details/NeZha";
    import LiuLang from "../../../components/details/LiuLang";
    import FeiChi from "../../../components/details/FeiChi";
    import FengKuang from "../../../components/details/FengKuang";
    import FuLian3 from "../../../components/details/FuLian3";
    import FuLian4 from "../../../components/details/FuLian4";
    import HaiWang from "../../../components/details/HaiWang";
    import HongHai from "../../../components/details/HongHai";
    import TangRen from "../../../components/details/TangRen";
    import MeiRen from "../../../components/details/MeiRen";
    import MyHometown from "../../../components/details/MyHometown";
    import MyNation from "../../../components/details/MyNation";
    import BaBai from "../../../components/details/BaBai";
    import WoBu from "../../../components/details/WoBu";
    import ZhongGuo from "../../../components/details/ZhongGuo";
    import ZhuLuo from "../../../components/details/ZhuLuo";
    import ZhuoYao from "../../../components/details/ZhuoYao";
    import Su7 from "../../../components/details/Su7";
    import Su8 from "../../../components/details/Su8";
    import XiHong from "../../../components/details/XiHong";
    import XiuXiu from "../../../components/details/XiuXiu";
    import XiYou from "../../../components/details/XiYou";
    import XunLong from "../../../components/details/XunLong";
    import QianRen from "../../../components/details/QianRen";
    import GangJiong from "../../../components/details/GangJiong";
    import GongFu from "../../../components/details/GongFu";
    import LieHuo from "../../../components/details/LieHuo";
    import BianXing4 from "../../../components/details/BianXing4";
    import DuYe from "../../../components/details/DuYe";
    import movieActorT30 from "../../movieCharts/components/movieActorT30";
    import movieTypeT30 from "../../movieCharts/components/movieTypeT30";


    export default {
        name: "T30",
        components:{
            WolfWarriors2,
            NeZha,
            LiuLang,
            FuLian4,
            HongHai,
            TangRen,
            MeiRen,
            MyNation,
            BaBai,
            WoBu,
            ZhongGuo,
            MyHometown,
            Su8,
            XiHong,
            Su7,
            FuLian3,
            ZhuoYao,
            XiuXiu,
            FengKuang,
            HaiWang,
            BianXing4,
            QianRen,
            DuYe,
            GongFu,
            FeiChi,
            LieHuo,
            ZhuLuo,
            XunLong,
            XiYou,
            GangJiong,
            movieActorT30,
            movieTypeT30
        },
        data() {
            return {
                boxOfficeList:[],
                charts: false,
                filmId: '',
                word: false,
                pies: false,
                direction: 'rtl',
            }
        },

        methods: {
             getT30() {
                movies_t30().then(res =>{
                    this.boxOfficeList = res.data;
                    this.boxOfficeList.shift()
                    // for(let i = 1; i < this.boxOfficeList.length; i++){
                    //     this.boxOfficeList[i].rankId = this.boxOfficeList[i].rankId + 1
                    // }
                }).catch((err) => {
                    console.log(err)
                })
            },
            handleClick(row){
                 this.charts = true;
                 this.filmId = row.rankId;
                console.log(row);
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
        margin-bottom: 4px;
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
    /deep/ .el-image__inner{
        width: 90%;
        height: 90%;
    }
    .w30{
        width: 30%;
    }
    .w100{
        width: 100%;
    }
    .image-span{
        display: inline-block;
        width: 20%;
        float: left;
    }
    .word-span{
        display: inline-block;
        width: 80%;
        float: right;
    }
</style>
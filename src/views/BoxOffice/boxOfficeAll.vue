<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="2020年电影票房" name="first">
                <Year20></Year20>
            </el-tab-pane>
            <el-tab-pane label="2019年电影票房" name="second">
                <Year19></Year19>
            </el-tab-pane>
            <el-tab-pane label="2018年电影票房" name="third">
                <Year18></Year18>
            </el-tab-pane>
            <el-tab-pane label="2017年电影票房" name="fourth">
                <Year17></Year17>
            </el-tab-pane>
            <el-tab-pane label="2016年电影票房" name="fifth">
                <Year16></Year16>
            </el-tab-pane>
            <el-tab-pane label="单日电影票房" name="sixth">
                <Oneday></Oneday>
            </el-tab-pane>
            <el-tab-pane label="首日电影票房" name="seventh">
                <FirstDay></FirstDay>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import FirstDay from './components/Firstday'
    import Oneday from "./components/Oneday"
    import Year16 from "./components/Year16"
    import Year17 from "./components/Year17"
    import Year18 from "./components/Year18"
    import Year19 from "./components/Year19"
    import Year20 from "./components/Year20"
    export default {
        name: "boxOfficeAll",
        data() {
            return {
                activeName: 'first',
            }
        },
        components : {
            FirstDay,
            Oneday,
            Year20,
            Year19,
            Year18,
            Year17,
            Year16
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>
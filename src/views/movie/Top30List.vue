<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="评论情感分析" name="first">
                <t30></t30>
            </el-tab-pane>
            <el-tab-pane label="电影评分分析" name="second">
                <Top30_analyse></Top30_analyse>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import T30 from "./components/T30";
    import Top30_analyse from "./components/Top30_analyse";
    export default {
        name: "Top30List",
        data (){
            return{
                activeName: 'first',
            }
        },
        components: {
            Top30_analyse,
            T30
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
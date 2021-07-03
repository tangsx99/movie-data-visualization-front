<template>
    <div>

        <div class="word-style">电影信息分析及数据可视化系统</div>
        <ul class='box'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>



    </div>
</template>

<script>
    import 'echarts-wordcloud'
    export default {
        name: "welcome",
        data() {
            return {}
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .word-style{
        padding-top: 12px;
        background-color: 	#FFFAFA;
        line-height: 50px;
        text-align: center;
        color: #fafafa;
        letter-spacing: 0;
        font-size: 36px;
        text-shadow: 0px 1px 0px #999,
        0px 2px 0px #888,
        0px 3px 0px #777,
        0px 4px 0px #666,
        0px 5px 0px #555,
        0px 6px 0px #444,
        0px 7px 0px #333,
        0px 8px 7px #001135
    }
    ul li {
        list-style: none;
    }
    ul{
        transform-style:preserve-3d;
        width:200px; height:200px;
        margin:200px auto;
        position:relative;
        animation: zhuan 8s linear infinite;
    }
    ul li{
        width:200px;
        height:200px;
        position:absolute;
        opacity: 0.5;
    }

    ul li:nth-of-type(1){
        background:#F00;
        transform:rotateY(90deg) translateZ(-100px);
    }
    ul li:nth-of-type(2){
        background:#6495ED;
        transform:rotateY(90deg) translateZ(100px);
    }
    ul li:nth-of-type(3){
        background:	#FFD700;
        transform:rotateX(90deg) translateZ(100px);
    }
    ul li:nth-of-type(4){
        background:	#7FFFAA;
        transform:rotateX(90deg) translateZ(-100px);
    }
    ul li:nth-of-type(5){
        background:#EE82EE;
        transform:translateZ(100px);
    }
    ul li:nth-of-type(6){
        background:#E1FFFF;
        transform:translateZ(-100px);
    }
    @keyframes zhuan {
        0%{
            transform:rotateX(0deg) rotateY(0deg)
        }
        25%{
            transform:rotateX(90deg) rotateY(90deg)
        }
        50%{
            transform:rotateX(180deg) rotateY(180deg)
        }
        75%{
            transform:rotateX(270deg) rotateY(270deg)
        }
        100%{
            transform:rotateX(360deg) rotateY(360deg)
        }
    }

</style>
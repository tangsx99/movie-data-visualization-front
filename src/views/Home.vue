<template>
    <div class="home">
        <div>
            <el-container>

                <el-header>
                    <i class="el-icon-s-fold" @click="isC" ></i>
                </el-header>

                <el-container>

                    <el-aside v-bind:class="styleObject1()"  style="background-color: rgb(238, 241, 246)">
                        <el-menu
                                :default-active="$route.path"
                                router unique-opened
                                class="el-menu-vertical-demo"
                                :collapse="isCollapse"
                                @open="handleOpen"
                                @close="handleClose">

                            <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                                <!--二级菜单-->
                                <template v-if="!item.leaf">
                                    <el-submenu :index="index+''">
                                        <template slot="title">
                                            <i :class="item.iconCls"></i>
                                            <span>{{item.name}}</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item :index="child.path" :key="index"
                                                          v-for="(child, index) in item.children">
                                                {{child.name}}
                                            </el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                </template>

                                <!--一级菜单-->
                                <template v-else>
                                    <el-menu-item :index="child.path" :key="index"
                                                  v-for="(child, index) in item.children">
                                        <i :class="child.iconCls"></i>
                                        <span slot="title">{{child.name}}</span>
                                    </el-menu-item>
                                </template>
                                <!-- <subMenu v-else :data="item" :key="key"></subMenu> -->
                            </template>

                        </el-menu>

                    </el-aside>

                    <el-main v-bind:class="styleObject()"  >
                        <router-view/>
                    </el-main>

                </el-container>
            </el-container>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                isCollapse: true,
            }
        },
        computed:{
            styleObject: function () {
                return function () {
                    return {
                        mainsj: this.isCollapse == true,
                        mainys: this.isCollapse == false,
                    }
                }
            },
            styleObject1: function () {
                return function () {
                    return {
                        asidesj: this.isCollapse == true,
                        asideys: this.isCollapse == false,
                    }
                }
            },
        },

        methods: {
            handleOpen(key, keyPath) {
                //console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                //console.log(key, keyPath);
            },
            isC(){
                this.isCollapse = !this.isCollapse
            },
        },
        components: {},

    }
</script>

<style scoped lang="less">
    body {
        margin: 0;
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .el-header, .el-footer {
        background-color: #235d8b;
        color: #ffffff;
        text-align: left;
        line-height: 60px;
        position: absolute;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        z-index: 100;
    }

    .el-aside {
        background-color: #4175a4;
        color: #ffffff;
        text-align: left;
        height: 100%;
        z-index: 10;
        position: absolute;
        left: 0;
        top: 0;
        padding-top: 60px;
    }

    .el-main {
        background-color: #FFFFFF;
        color: #333;
        text-align: left;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding-top: 80px;
        /*padding-left: 100px;*/
        width: 100%;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .el-menu-vertical-demo {
        background: #4175a4;
    }

    .mainsj{
            padding-left: 80px !important;
    }

    .mainys{
            padding-left: 200px !important;
    }

    .asidesj{
        width: 60px !important;
    }

    .asideys{
        width: 180px !important;
    }


</style>

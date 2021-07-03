import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: '首页',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    redirect: '/welcome',
    children:[
      {
        path: '/welcome',
        component: () => import('../views/firstPage/welcome'),
        name: '首页',
        iconCls: 'el-icon-star-on'
      },
    ]
  },

  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: '电影数据',
    iconCls: 'el-icon-discover',
    leaf: false,//只有一个节点
    children: [
      {
        path: '/boxOffice',
        component: () => import('../views/BoxOffice/boxOfficeAll'),
        name: '电影票房',
        iconCls: 'el-icon-folder'
      },
      {
        path: '/movieT100',
        component: () => import('../views/BoxOffice/movieTopList'),
        name: '电影榜单100',
        iconCls: 'el-icon-folder'
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: '图表',
    iconCls: 'el-icon-s-data',
    leaf: false,//只有一个节点
    children:[
      {
        path: '/pfCharts',
        component: () => import('../views/movieCharts/pfCharts'),
        name: '综合展示',
        iconCls: 'el-icon-star-on'
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: '电影排行',
    iconCls: 'el-icon-film',
    leaf: false,//只有一个节点
    children:[
      {
        path: '/moviesList',
        component: () => import('../views/movie/moviesList'),
        name: '高分电影排行',
        iconCls: 'el-icon-data-board'
      },
      {
        path: '/Top30',
        component: () => import('../views/movie/Top30List'),
        name: '票房前30电影分析',
        iconCls: 'el-icon-data-board'
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

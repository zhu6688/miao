import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './movie'
import CnemaRouter from './cnema'
import MineRouter from './mine'
import adminRouter from './admin'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //base:'/miao',
  routes: [ // 页面级别的路由，去每个页面中单独在做，页面的路由嵌套
    MovieRouter,
    CnemaRouter,
    MineRouter,
    adminRouter,
    {
      path:'/',
      redirect:'/movie'
    },
    {
      path:'*',
      component:()=>import('@/components/NotFound')
    }
  ]
})

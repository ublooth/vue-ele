import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home', // 设置默认指向路径
  },
  {
    path: '/home', // 首页
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 分模块打包,按需加载组件
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/list.vue')
  },
  {
    path: '/city/:cityid',
    name: 'city',
    component: () => import(/* webpackChunkName: "city" */ '../views/city/city.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

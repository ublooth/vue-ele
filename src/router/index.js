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
    path: '/city/:cityid',
    name: 'city',
    component: () => import(/* webpackChunkName: "city" */ '../views/city/city.vue')
  },
  {
    path: '/takeOut',
    name: 'takeOut',
    component: () => import(/* webpackChunkName: "takeOut" */ '../views/takeOut/takeOutIndex.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search/searchIndex.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order/orderIndex.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "my" */ '../views/my/myIndex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // 如果路由存在二级目录，需要添加 base 属性，否则默认为 "/"
  // 默认路由模式是 hash 模式，会携带 # 标记，与真实 url 不符，可以改为 history 模式
  base: process.env.BASE_URL,
  // 页面组件没有进行按需加载，可以使用 require.ensure() 来进行优化
  routes
})

export default router

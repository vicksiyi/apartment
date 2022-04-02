import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/home"),
      children: [
        {
          path: '/',
          name: "RoomList",
          component: () => import("@/components/Home/RoomList")
        },
        {
          path: '/detail',
          name: "RoomDetail",
          component: () => import("@/components/Home/RoomDetail")
        }]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/login")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/register")
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import("@/views/admin")
    },
    {
      path: '/*',
      redirect: "/"
    }
  ]
})

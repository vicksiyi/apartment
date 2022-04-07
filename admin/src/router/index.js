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
        },
        {
          path: '/mine',
          name: "MineDetail",
          component: () => import("@/components/Mine/Detail")
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
      component: () => import("@/views/admin"),
      children: [
        {
          path: '/admin',
          name: "Home",
          component: () => import("@/components/Admin/Home")
        },
        {
          path: '/admin/apartment/detail',
          name: "Detail",
          component: () => import("@/components/Admin/ApartmentManage/Detail")
        },
        {
          path: '/admin/apartment/device',
          name: "Device",
          component: () => import("@/components/Admin/ApartmentManage/DeviceType")
        },
        {
          path: '/admin/apartment/service',
          name: "Service",
          component: () => import("@/components/Admin/ApartmentManage/Service")
        },
        {
          path: '/admin/person/lessee',
          name: "Lessee",
          component: () => import("@/components/Admin/Person/Lessee")
        },
        {
          path: '/admin/system/notice',
          name: "Notice",
          component: () => import("@/components/Admin/System/Notice")
        }
      ]
    },
    {
      path: '/*',
      redirect: "/"
    }
  ]
})

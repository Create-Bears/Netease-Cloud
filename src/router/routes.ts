export default [
  {
    path: "/",
    name: "login",
    component: ()=>import('@/views/login/index.vue')
  },
  {
    path: "/main",
    name: "main",
    component: () =>import("@/views/main/index.vue"),
    children:[
      {
        redirect:'/main/home',
        path:'/main'
      },
      {
        path: "/main/home",
        name: "home",
        component: () =>import("@/views/main/home/index.vue"),
      },
      {
        path: "/main/special",
        name: "special",
        component: () =>import("@/views/main/special/index.vue"),
      },
      {
        path: "/main/classify",
        name: "classify",
        component: () =>import("@/views/main/classify/index.vue"),
      },
      {
        path: "/main/shopcar",
        name: "shopcar",
        component: () =>import("@/views/main/shopcar/index.vue"),
      },
      {
        path: "/main/mine",
        name: "mine",
        component: () =>import("@/views/main/mine/index.vue"),
      }
    ]
  },
  {
    path:'/goodsSearch',
    name:'goodsSearch',
    component:()=>import('@/views/goodsSearch/index.vue')
  }
]
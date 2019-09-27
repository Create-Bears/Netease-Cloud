const Login = () =>
  import(/* webpackChunkName: "login" */ "@/views/login/index.vue");

const Main = () =>
  import(/* webpackChunkName: "main" */ "@/views/main/index.vue");

const Home = () =>
  import(/* webpackChunkName: "home" */ "@/views/main/home/index.vue");

const Special = () =>
  import(/* webpackChunkName: "special" */ "@/views/main/special/index.vue");

const Classify = () =>
  import(/* webpackChunkName: "classify" */ "@/views/main/classify/index.vue");

const Shopcar = () =>
  import(/* webpackChunkName: "shopcar" */ "@/views/main/shopcar/index.vue");

const Mine = () =>
  import(/* webpackChunkName: "mine" */ "@/views/main/mine/index.vue");

const GoodsSearch = () =>
  import(/* webpackChunkName: "goodsearch" */ "@/views/goodsSearch/index.vue");

const Categorys = () =>
  import(/* webpackChunkName: "categorys" */ "@/views/categorys/index.vue");

const Cs = () => import(/* webpackChunkName: "cs" */ "@/views/cs/index.vue");
export default [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    children: [
      {
        redirect: "/main/home",
        path: "/main"
      },
      {
        path: "/main/home",
        name: "home",
        component: Home
      },
      {
        path: "/main/special",
        name: "special",
        component: Special
      },
      {
        path: "/main/classify",
        name: "classify",
        component: Classify
      },
      {
        path: "/main/shopcar",
        name: "shopcar",
        component: Shopcar
      },
      {
        path: "/main/mine",
        name: "mine",
        component: Mine
      }
    ]
  },
  {
    path: "/cs",
    name: "cs",
    component: Cs
  },
  {
    path: "/productDetail/:id",
    name: "productDetail",
    component: () => import("@/views/pDetail/index.vue")
  },
  {
    path: "/categorys/:id?",
    name: "categorys",
    component: Categorys
  },
  {
    path: "/goodsSearch",
    name: "goodsSearch",
    component: GoodsSearch
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/address/index.vue")
  },
  {
    path:'/commentDetail/:id',
    name: "commentDetail",
    component: () => import("@/views/commentDetail/index.vue")
  },
  {
    path:'/homeDetail/:id',
    name:'homeDetail',
    component:()=>import("@/views/homeDetail/index.vue")
  },{
    path:'/topListDetaild/:id',
    name:'topListDetaild',
    component:()=>import('@/views/topListDetail/index.vue')
  },
  {
    path:'/topListCommentDetail/:id',
    name:'topListCommentDetail',
    component:()=>import('@/views/topListCommentDetail/index.vue')
  },
  {
    path:'/collect',
    name:'collect',
    component:()=>import('@/views/collect/index.vue')
  }
];

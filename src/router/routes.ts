const Login = () =>
  import("@/views/login/index.vue");

const Main = () =>
  import("@/views/main/index.vue");

const Home = () =>
  import("@/views/main/home/index.vue");

const Special = () =>
  import("@/views/main/special/index.vue");

const Classify = () =>
  import("@/views/main/classify/index.vue");

const Shopcar = () =>
  import("@/views/main/shopcar/index.vue");

const Mine = () =>
  import("@/views/main/mine/index.vue");

const GoodsSearch = () =>
  import("@/views/goodsSearch/index.vue");

const Categorys = () =>
  import("@/views/categorys/index.vue");

const Cs = () => import("@/views/cs/index.vue");
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
    path: '/commentDetail/:id',
    name: "commentDetail",
    component: () => import("@/views/commentDetail/index.vue")
  },
  {
    path: '/homeDetail/:id',
    name: 'homeDetail',
    component: () => import("@/views/homeDetail/index.vue")
  }, {
    path: '/topListDetaild/:id',
    name: 'topListDetaild',
    component: () => import('@/views/topListDetail/index.vue')
  },
  {
    path: '/topListCommentDetail/:id',
    name: 'topListCommentDetail',
    component: () => import('@/views/topListCommentDetail/index.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('@/views/collect/index.vue')
  }
];

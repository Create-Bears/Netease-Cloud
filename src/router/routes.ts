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

const goodsSearch = () =>
  import(/* webpackChunkName: "goodsearch" */ "@/views/goodsSearch/index.vue");
const Categorys = () =>
  import(/* webpackChunkName: "categorys" */ "@/views/categorys/index.vue");

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
    component: () => import("@/views/goodsSearch/index.vue")
  },
  {
    path:'/commentDetail/:id',
    name: "commentDetail",
    component: () => import("@/views/commentDetail/index.vue")
  }
];

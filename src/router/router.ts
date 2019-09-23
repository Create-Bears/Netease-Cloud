import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token');
  if (to.path == '/main/home' || to.path == '/main/special' || to.path == '/main/classify' || to.path == '/main/shopcar' || to.path == '/main/mine') {
    if (token) {
      next()
    } else {
      next('/')
    }
  } else {
    next();
  }
})

export default router
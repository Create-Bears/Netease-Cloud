import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading: require("@/static/images/loading.jpg")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

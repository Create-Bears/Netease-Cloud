import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import classify from "./modules/classify";
import search from "./modules/search";
import main from "./modules/main";
import detail from './modules/detail'
import category from "./modules/category";
import shopcar from './modules/shopcar'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    classify,
    search,
    main,
    detail,
    category,
    shopcar
  }
});

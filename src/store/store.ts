import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import classify from "./modules/classify";
import search from "./modules/search";
import main from "./modules/main";
import category from "./modules/category";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    classify,
    search,
    main,
    category
  }
});

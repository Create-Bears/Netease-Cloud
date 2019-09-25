import {
  getCategoryList,
  getCategoryCurrent,
  getGoodsList
} from "@/service/index";

export default {
  namespaced: true,
  state: {
    navLink: [],
    goodList: [],
    currentCategory: {}
  },
  mutations: {
    getCategory(state: any, payload: any) {
      state.navLink = payload.brotherCategory;
    },
    getCurrent(state: any, payload: any) {
      state.currentCategory = payload.currentCategory;
    },
    getGood(state: any, payload: any) {
      state.goodList = payload.goodsList;
    }
  },
  actions: {
    async _getCategoryList({ commit }: any, payload: any) {
      let result = await getCategoryList(payload);
      commit("getCategory", result.data.data);
    },
    async _getCategoryCurrent({ commit }: any, payload: any) {
      let result = await getCategoryCurrent(payload);
      commit("getCurrent", result.data.data);
    },
    async _getGoodsList({ commit }: any, payload: any) {
      let result = await getGoodsList(payload);
      commit("getGood", result.data.data);
    }
  }
};

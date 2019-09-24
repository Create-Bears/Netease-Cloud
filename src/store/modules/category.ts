import { getCategoryList } from "@/service/index";

export default {
  namespaced: true,
  state: {
    categorys: {}
  },
  mutations: {
    getCategory(state: { categorys: any }, payload: any) {
      state.categorys = payload;
    }
  },
  actions: {
    async _getCategoryList({ commit }: any, payload: any) {
      let result = await getCategoryList(payload);
      commit("getCategory", result.data.data);
    }
  }
};

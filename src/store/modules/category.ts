import { getCategoryList } from "@/service/index";

export default {
  namespaced: true,
  state: {
    navLink: []
  },
  mutations: {
    getCategory(state: any, payload: any) {
      console.log(payload);
      state.navLink = payload.brotherCategory;
    }
  },
  actions: {
    async _getCategoryList({ commit }: any, payload: any) {
      let result = await getCategoryList(payload);
      commit("getCategory", result.data.data);
    }
  }
};

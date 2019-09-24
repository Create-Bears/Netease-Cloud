import { getCategoryList } from "@/service/index";

export default {
  namespaced: true,
  state: {
    category: {}
  },
  mutations: {
    getCategory(state: { category: any }, payload: any) {
      state.category = payload;
    }
  },
  actions: {
    _getCategoryList(context: any, payload: any) {
      return new Promise((resolve, reject) => {
        getCategoryList().then(res => {
          context.commit("getCategory", res.data.data);
        });
        resolve();
      });
    }
  }
};

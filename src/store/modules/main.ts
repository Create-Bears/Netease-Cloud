import { getFirstList } from "@/service/index";

export default {
  namespaced: true,
  state: {
    getList: {}
  },
  mutations: {
    getBanner(state: { getList: any }, payload: any) {
      state.getList = payload;
    }
  },
  actions: {
    _getFirstList(context: any, payload: any) {
      return new Promise((resolve, reject) => {
        getFirstList().then(res => {
          console.log(res.data);
          context.commit("getBanner", res.data.data);
        });
        resolve();
      });
    }
  }
};

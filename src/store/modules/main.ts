import { getFirstList, getTopLists } from "@/service/index";

export default {
  namespaced: true,
  state: {
    getList: {},
    getTop: {}
  },
  mutations: {
    getBanner(state: { getList: any }, payload: any) {
      state.getList = payload;
    },
    getTopLists(state: { getTop: any }, payload: any) {
      state.getTop = payload;
    }
  },
  actions: {
    _getFirstList(context: any, payload: any) {
      return new Promise((resolve, reject) => {
        getFirstList().then(res => {
          context.commit("getBanner", res.data.data);
        });
        resolve();
      });
    },
    _getTopLists(context: any, payload: any) {
      return new Promise((resolve, reject) => {
        getTopLists().then(res => {
          context.commit("getTopLists", res.data.data);
        });
        resolve();
      });
    }
  }
};

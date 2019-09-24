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
    async _getFirstList({ commit }: any, payload: any) {
      let result = await getFirstList();
      commit("getBanner", result.data.data);
    },
    async _getTopLists({ commit }: any, payload: any) {
      let result = await getTopLists();
      commit("getTopLists", result.data.data);
    }
  }
};

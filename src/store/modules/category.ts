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
    currentCategory: {},
    id: null,
  },
  mutations: {
    getCategory(state: any, payload: any) {
      state.navLink = payload.brotherCategory;
    },
    getCurrent(state: any, payload: any) {
      state.currentCategory = payload.currentCategory;
    },
    getGood(state: any, payload: any) {
      state.goodList = payload.goodsList
      // payload.goodsList.map((item:any)=>{
      //   return state.goodList.push(item)
      // })
    },
    setGoodList(state: any, payload: any) {
      state.goodList = [
        { id: 1, name: "1234" },
        { id: 2, name: "2234" },
        { id: 3, name: "3234" },
        { id: 4, name: "4234" },
        { id: 5, name: "4234" },
        { id: 6, name: "4234" },
      ]
    },
    setId(state: any, payload: any) {
      state.id = payload;
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

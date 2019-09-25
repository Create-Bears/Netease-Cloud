import { getFirstList, getTopLists } from "@/service/index";

export default {
  namespaced: true,
  state: {
    getList: {},
    getTop: {},
    channels: [],
    brandList: [],
    newGoodsList: [],
    hotGoodsList: [],
    categoryList: [],
    swiperSlides: [],
    topicList: []
  },
  mutations: {
    getBanner(state: any, payload: any) {
      state.getList = payload;
      state.channels=payload.channel;
      state.swiperSlides=payload.banner;
      state.brandList=payload.brandList;
      state.newGoodsList=payload.newGoodsList;
      state.hotGoodsList=payload.hotGoodsList;
      state.topicList=payload.topicList;
      state.categoryList=payload.categoryList;
      console.log(payload.topicList)
    },
    getTopLists(state:any, payload: any) {
      
      state.getTop = payload;
    }
  },
  actions: {
    async _getFirstList({ commit }: any, payload: any) {
      let result = await getFirstList();
      commit("getBanner", result.data.data);
    },
    async _getTopLists({ commit }: any, payload: any) {
      let result = await getTopLists(payload);
      commit("getTopLists", result.data.data);
    }
  }
};

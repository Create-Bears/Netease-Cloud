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
  },
  mutations: {
    getBanner(state :any , payload: any) {
      state.getList = payload;
      state.channels=payload.channel;
      state.swiperSlides=payload.banner;
      state.brandList=payload.brandList;
      state.newGoodsList=payload.newGoodsList;
      state.hotGoodsList=payload.hotGoodsList;
      state.topicList=payload.topicList;
      state.categoryList=payload.categoryList;
    },
    getTopLists(state:any, payload: any) {
      console.log(payload)
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

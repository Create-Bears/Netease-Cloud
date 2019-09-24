import { getFirstList } from "@/service/index";

export default {
  namespaced: true,
  state: {
    getList: {},
    channels: [],
    brandList: [],
    newGoodsList: [],
    hotGoodsList: [],
    swiperSlides: [],
    topicList: []
  },
  mutations: {
    getBanner(state: any, payload: any) {
      // state.getList = payload;
      state.swiperSlides=payload.banner;
      state.channels=payload.channels;
      state.brandList=payload.brandList;
      state.newGoodsList=payload.newGoodsList;
      state.hotGoodsList=payload.hotGoodsList;
      state.topicList=payload.topicList;

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

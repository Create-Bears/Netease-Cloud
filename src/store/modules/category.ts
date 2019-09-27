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
    query: {
      brandId: '',
      categoryId: '',
      sort: '',
      order: '',
      page: 1,
      size: ''
    },
    limit: 10,
    count: 0,
    value: []
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
    },
    setGoodList(state: any, payload: any) {
    
    },
    setId(state: any, payload: any) {
      state.id = payload;
    },
    //改变传递的椰树
    setPage(state: any, payload: any){
      state.query.page = payload;
    },
    appendValue(state: any, payload: any){
      state.value = state.value.concat(payload.data.data);
      state.count = payload.data.count;
    },
    setValue(state: any, payload: any){
      state.value = payload.data.data;
      state.count = payload.data.count;
    },
    setCategoryId(state: any, payload:string){
      state.query.categoryId = payload;
    },
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
    },
    async pullRefresh({commit,state}:any,payload:any){
      commit('setPage',1)
      let params:any={};
      for(let key in state.query){
        if(state.query[key]){
          params[key]=state.query[key]
        }
      }
      let result = await getGoodsList(params);
      commit('setValue', result.data);
    },
    async loadMore({commit,state}:any,{page}:any){
      console.log(page)
      commit('setPage',page)
      let params:any={};
      for(let key in state.query){
        if(state.query[key]){
          params[key]=state.query[key]
        }
      }
      let result = await getGoodsList(params);
      console.log(result)
      commit('appendValue', result.data);
    }
  }
};

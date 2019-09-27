import { getDetailList, goodsListData, getCommentList, addorDelete,getCollect } from '@/service'

export default {
  namespaced: true,
  state: {
    detailList: {},
    name: '',
    info: {},
    comment: {},
    commentData: {},
    attribute: [],
    issue: [],
    productList: [],
    commentList: [],
    specificationList: [],
    goodsCount: 0,
    product: [],
    addorFlag:null,
    collectList:[],
  },
  mutations: {
    setDetailList(state: any, payload: any) {
      state.detailList = payload;
      state.info = payload.info;
      state.name = payload.brand.name;
      state.comment = payload.comment;
      state.commentData = payload.comment.data;
      state.attribute = payload.attribute;
      state.issue = payload.issue;
      state.specificationList = payload.specificationList;
      state.product = payload.productList;
    },
    setPriductList(state: any, payload: any) {
      state.productList = payload;
    },
    setCommentList(state: any, payload: any) {
      state.commentList = payload.data;
    },
    reduceNum(state: any, payload: any) {
      if (state.goodsCount <= 0) {
        return false
      }
      state.goodsCount--;
    },
    addNum(state: any, payload: any) {
      state.goodsCount++;
    },
    setAddorFlag(state:any,payload:any){
      console.log(payload)
      if(payload.type==='add'){
        state.addorFlag=true;
      }else{
        state.addorFlag=false;
      }
    },
    setCollectList(state:any,payload:any){
      state.collectList=payload;
    }
  },
  actions: {
    async _getDetailList({ commit }: any, payload: any) {
      let result = await getDetailList(payload)
      console.log(result)
      commit('setDetailList', result.data.data)
    },
    async _goodsListData({ commit }: any, payload: any) {
      let result = await goodsListData(payload);
      console.log(result);
      commit('setPriductList', result.data.data.goodsList)
    },
    async _getCommentList({ commit }: any, payload: any) {
      let result = await getCommentList(payload)
      console.log(result)
      commit('setCommentList', result.data.data)
    },
    //添加到收藏仓库
    async _addorDelete({ commit }: any, payload: any) {
      let result = await addorDelete(payload);
      commit("setAddorFlag",result.data.data)
    },
    async _getCollect({ commit }: any, payload: any) {
      let result = await getCollect(payload.id);
      console.log(result)
      commit('setCollectList',result.data.data)
    }

  }
}
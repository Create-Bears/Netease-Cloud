import { getDetailList,goodsListData,getCommentList } from '@/service'

export default {
  namespaced: true,
  state: {
    detailList:{},
    name:'',
    info:{},
    comment:{},
    commentData:{},
    attribute:[],
    issue:[],
    productList:[],
    commentList:[],
    specificationList:[],
    goodsCount:0,
  },
  mutations: {
    setDetailList(state:any,payload:any){
      state.detailList=payload;
      state.info=payload.info;
      state.name=payload.brand.name;
      state.comment=payload.comment;
      state.commentData=payload.comment.data;
      state.attribute=payload.attribute;
      state.issue=payload.issue;
      state.specificationList=payload.specificationList
    },
    setPriductList(state:any,payload:any){
      state.productList=payload;
    },
    setCommentList(state:any,payload:any){
      state.commentList=payload.data;
    },
    reduceNum(state:any,payload:any){
      if(state.goodsCount<=0){
        return false
      }
      state.goodsCount--;
    },
    addNum(state:any,payload:any){
      state.goodsCount++;
    },
  },
  actions: {
    async _getDetailList({ commit }: any, payload: any) {
      let result = await getDetailList(payload)
      console.log(result)
      commit('setDetailList',result.data.data)
    },
    async _goodsListData({commit}:any,payload:any){
      let result =await goodsListData(payload);
      console.log(result);
      commit('setPriductList',result.data.data.goodsList)
    },
    async _getCommentList({commit}:any,payload:any){
      let result = await getCommentList(payload)
      console.log(result)
      commit('setCommentList',result.data.data)
    }
  }
}
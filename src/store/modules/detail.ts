import { getDetailList,goodsListData } from '@/service'

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
    },
    setPriductList(state:any,payload:any){
      state.productList=payload;
    }
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
    }
  }
}
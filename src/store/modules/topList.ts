import {
  getTopList,
  getTopListRelated,
  getCommentList,
  addCommentData
} from '@/service'

export default {
  namespaced: true,
  state: {
    topListContent: {},
    topicList: [],
    commentList: [],
    msg:'',
  },
  // getters:{
  //   doneMsg: (state:any) => {
  //     return state.msg
  //   }
  // },
  mutations: {
    setTopListContent(state: any, payload: any) {
      state.topListContent = payload;
    },
    setTopicList(state: any, payload: any) {
      state.topicList = payload;
    },
    setCommentList(state: any, payload: any) {
      state.commentList = payload;
    },
    setMsg(state:any,payload:any){
      state.msg = payload;
      console.log(state.msg)
    }
  },
  actions: {
    async _getTopList({ commit }: any, payload: any) {
      let result = await getTopList(payload);
      commit('setTopListContent', result.data.data)
    },
    async _getTopListRelated({ commit }: any, payload: any) {
      let result = await getTopListRelated(payload);
      commit('setTopicList', result.data.data)
    },
    async _getCommentList({ commit }: any, payload: any) {
      let result = await getCommentList(payload);
      console.log(result)
      commit('setCommentList', result.data.data.data)
    },
    async _addCommentData({commit}:any,payload:any){
      let result = await addCommentData(payload);
      commit('setMsg',result.data.data)
    }
  }
}
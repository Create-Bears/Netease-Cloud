import { getDetailList } from '@/service'

export default {
  namespaced: true,
  state: {
    detailList:{},
  },
  mutations: {
    setDetailList(state:any,payload:any){
      state.detailList=payload;
      console.log(state.detailList)
    }
  },
  actions: {
    async _getDetailList({ commit }: any, payload: any) {
      let result = await getDetailList(payload)
      console.log(result)
      commit('setDetailList',result.data.data)
    }
  }
}
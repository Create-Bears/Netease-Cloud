import { searchHistory } from '@/service/search'

export default {
  namespaced: true,
  state: {
    hotKeyword:[],
    historyKeywordList:[],
  },
  mutations: {
    hotKeyword(state:any,payload:any){
      state.hotKeyword=payload.hotKeywordList;
      state.historyKeywordList=payload.historyKeywordList
    }
  },
  actions: {
    async _searchHistory({ commit }: any) {
      let result = await searchHistory();
      console.log(result)
      commit('hotKeyword',result.data.data)
    }
  }
}
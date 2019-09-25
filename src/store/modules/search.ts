import {
  searchHistory,
  searchFit,
  searchHelper,
  clearHistory
} from '@/service/search'

export default {
  namespaced: true,
  state: {
    hotKeyword: [],
    historyKeywordList: [],
    searchList: [],
    historyShow: '',
    detailList: [],
    keyWord:'',
  },
  mutations: {
    hotKeyword(state: any, payload: any) {
      state.hotKeyword = payload.hotKeywordList;
      state.historyKeywordList = payload.historyKeywordList;
      if (payload.historyKeywordList) {
        state.historyShow = true
      } else {
        state.historyShow = false
      }
    },
    setKeyWord(state:any,payload:any){
      state.keyWord=payload
    },
    setSearchList(state: any, payload: any) {
      state.searchList = payload;
    },
    setClearHistory(state: any) {
      state.historyKeywordList = [];
      state.historyShow = false
    },
    setDatailList(state: any, payload: any) {
      console.log(payload.data)
      state.detailList = payload.data
    },
    priceSort(state: any) {
      state.detailList.data.sort(function (a: any, b: any) {
        return a.retail_price - b.retail_price
      })
    }
  },
  actions: {
    //获取搜索页面的数据
    async _searchHistory({ commit }: any) {
      let result = await searchHistory();
      console.log(result)
      commit('hotKeyword', result.data.data)
    },
    //点击搜索按钮进行搜索
    async _searchFit({ commit }: any, payload: object) {
      let result = await searchFit(payload);
      console.log(result)
      commit('setDatailList', result.data)
    },
    //当input发生变化时获取的参数
    async _searchHelper({ commit }: any, payload: object) {
      let result = await searchHelper(payload);
      commit('setSearchList', result.data.data)
    },
    //点击删除可删除历史记录
    async _clearHistory({ commit }: any) {
      let result = await clearHistory();
      commit('setClearHistory')
    }
  }
}
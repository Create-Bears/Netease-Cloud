import { getAllList ,navListData} from '@/service'
export default {
  namespaced: true,
  state: {
    tabAllList: [],
    tabCurrentList:[],
  },
  mutations: {
    getTabAllList(state:any,payload:any){
      state.tabAllList=payload.categoryList
      state.tabCurrentList=payload.currentCategory;
    },
    currentListData(state:any,payload:any){
      state.tabCurrentList=payload.currentCategory;
    }
  },
  actions: {
    async  _getAllList({ commit }: any) {
      let result = await getAllList();
      commit('getTabAllList',result.data.data)
    },
    async _navListData({commit}:any,payload:any){
      let result =await navListData(payload)
      commit('currentListData',result.data.data)
    }
  }
}
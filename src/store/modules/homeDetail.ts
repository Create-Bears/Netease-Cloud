import { brandDetail, brandList } from '@/service'

export default {
  namespaced: true,
  state: {
    brandList: {},
    brandBottomList:[],
  },
  mutations: {
    setBrandList(state: any, payload: any) {
      state.brandList = payload.brand;
    },
    setBrandBottomList(state:any,payload:any){
      console.log(payload)
      state.brandBottomList=payload.data
    }
  },
  actions: {
    async _brandDetail({ commit }: any, payload: any) {
      let result = await brandDetail(payload);
      commit('setBrandList', result.data.data)
    },
    async _brandList({commit}:any,payload:any){
      let result = await brandList(payload);
      console.log(result)
      commit('setBrandBottomList', result.data.data)
    }
  }
}
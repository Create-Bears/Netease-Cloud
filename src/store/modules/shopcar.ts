import {getShopcarList,addCartList} from '@/service'

export default {
  namespaced:true,
  state:{
    shopcarList:[],
    cartTotal:[],
  },
  mutations:{
    setshopcarList(state:any,payload:any){
      state.shopcarList=payload.cartList;
      state.cartTotal=payload.cartTotal
    }
  },
  actions:{
    async _getShopcarList({commit}:any,payload:any){
      let result = await getShopcarList();
      console.log(result)
      commit('setshopcarList',result.data.data)
    },
    async _addCartList({commit}:any,payload:any){
      let result = await addCartList(payload);
      console.log(result)
    }
  }
}
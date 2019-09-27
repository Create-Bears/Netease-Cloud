import {getShopcarList,addCartList,cartCount,setChecked} from '@/service'

export default {
  namespaced:true,
  state:{
    shopcarList:[],
    cartTotal:[],
    goodsCount:0,
  },
  mutations:{
    setshopcarList(state:any,payload:any){
      state.shopcarList=payload.cartList;
      state.cartTotal=payload.cartTotal;
    },
    setGoodsCount(state:any,payload:any){
      console.log(payload)
      state.goodsCount=payload.cartTotal.goodsCount;
    }
  },
  actions:{
    //获取购物车的数据
    async _getShopcarList({commit}:any,payload:any){
      let result = await getShopcarList();
      console.log(result)
      commit('setshopcarList',result.data.data)
    },
    //添加购物车数据
    async _addCartList({commit}:any,payload:any){
      let result = await addCartList(payload);
      console.log(result)
    },
    //获取购物车的总数量
    async _cartCount({commit}:any){
      let result = await cartCount();
      commit('setGoodsCount',result.data.data);
    },
    async _setChecked({commit}:any,payload:any){
      let result = await setChecked(payload);
      commit('setshopcarList',result.data.data)
    }
  }
}
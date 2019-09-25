import {getAddressList} from '@/service'

export default {
  namespaced:true,
  state:{
    addressList:[],
  },
  mutations:{
    setAddressList(state:any,payload:any){
      state.addressList=payload
    }
  },
  actions:{
    async _getAddressList(state:any){
      let result = await getAddressList();
      console.log(result)
    }
  }
}
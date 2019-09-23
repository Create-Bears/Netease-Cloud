import { UserLogin } from '@/service/index'

export default {
  namespaced: true,
  state: {
    session:window.localStorage.getItem('token')||'',
    msg:'',
  },
  mutations: {
    setSession(state:any,payload:any){
      state.session=payload.sessionKey;
    }
  },
  actions: {
    async getUserLogin({commit}: any, payload: object) {
      console.log(payload)
      let result = await UserLogin(payload)
      console.log(result)
      window.localStorage.setItem('token',result.data.data.sessionKey)
      commit('setSession',result.data)
    }
  }
}
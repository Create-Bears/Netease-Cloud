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
      let result = await UserLogin(payload)
      window.localStorage.setItem('token',result.data.data.sessionKey)
      commit('setSession',result.data)
    }
  }
}
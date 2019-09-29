import { UserLogin } from '@/service/index'

export default {
  namespaced: true,
  state: {
    session: window.localStorage.getItem('token') || '',
    msg: '',
  },
  mutations: {
    setSession(state: any, payload: any) {
      state.session = payload.sessionKey;
    },
    setMsg(state: any, payload: any) {
      state.msg = payload.errmsg;
      console.log(state.msg)
    }
  },
  actions: {
    async getUserLogin({ commit }: any, payload: object) {
      let result = await UserLogin(payload)
      console.log(result)
      if (result.data.errno === 0) {
        window.localStorage.setItem('token', result.data.data.sessionKey)
        commit('setSession', result.data)
        commit('setMsg', result.data)
      }else{
        commit('setMsg', result.data)
      }
    }
  }
}
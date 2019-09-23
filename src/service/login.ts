import request from '@/utils/request'

export let UserLogin = (params: object) => {
  console.log(params)
  let url = '/auth/loginByMobile';
  return request.post(url, params)
}
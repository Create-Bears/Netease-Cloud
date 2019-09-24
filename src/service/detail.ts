import request from '@/utils/request'

export let getDetailList = (id: any) => {
  let url = "/goods/detail";
  return request.get(url, {
    params:{
      id
    }
  })
}
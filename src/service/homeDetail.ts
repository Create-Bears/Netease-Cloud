import request from '@/utils/request'

export let brandDetail = (id: any) => {
  let url = "/brand/detail";
  return request.get(url, {
    params: {
      id
    }
  })
}

export let brandList = (params: any) => {
  let url = "/goods/list";
  return request.get(url, {
    params
  })
}
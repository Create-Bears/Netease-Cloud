import request from '@/utils/request'

export let getShopcarList = () => {
  let url = "/cart/index";
  return request.get(url)
}

//加入购物车
export let addCartList = (params: any) => {
  let url = '/cart/add';
  return request.post(url, params)
}
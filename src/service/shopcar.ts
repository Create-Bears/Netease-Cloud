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

export let cartCount =()=>{
  let url='/cart/goodscount';
  return request.get(url);
}

export let setChecked=(params:any)=>{
  let url="/cart/checked";
  return request.post(url,params)
}
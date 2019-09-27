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

//添加到收藏列表
export let addorDelete=(params:any)=>{
  let url="/collect/addordelete";
  return request.post(url,params)
}

//获取收藏列表数据
export let getCollect=(id:any)=>{
  let url ="/collect/list";
  return request.get(url,{
    params:{
      typeId:id
    }
  })
}
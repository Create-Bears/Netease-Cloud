import request from '@/utils/request'

export let getDetailList = (id: any) => {
  let url = "/goods/detail";
  return request.get(url, {
    params:{
      id
    }
  })
}

export let goodsListData=(id:any)=>{
  let url ="/goods/related";
  return request.get(url,{
    params:{
      id
    }
  })
}
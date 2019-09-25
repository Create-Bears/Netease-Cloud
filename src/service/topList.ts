import request from '@/utils/request'

export let getTopList =(id:any)=>{
  let url ='/topic/detail';
  return request.get(url,{
    params:{
      id
    }
  })
}

export let getTopListRelated =(id:any)=>{
  let url ='/topic/related';
  return request.get(url,{
    params:{
      id
    }
  })
}

export let getCommentList =(params:any)=>{
  let url ='/comment/list';
  return request.get(url,{
    params
  })
}
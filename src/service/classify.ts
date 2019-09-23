import request from '@/utils/request'

export let getAllList = () => {
  let url = '/catalog/index';
  return request.get(url)
}

export let navListData = (id:any) => {
  let url = '/catalog/current';
  return request.get(url, { params: id })
}
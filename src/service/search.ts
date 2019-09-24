import request from '@/utils/request'

//获取页面原始数据
export let searchHistory = () => {
  let url = "search/index";
  return request.get(url)
}

//按条件搜索
export let searchFit = (params: object) => {
  let url = "/goods/list";
  return request.get(url, {
    params
  })
}

//模糊搜索
export let searchHelper = (params: object) => {
  let url = '/search/helper';
  return request.get(url, {
    params
  })
}

//删除历史搜索记录
export let clearHistory = () => {
  let url = '/search/clearhistory';
  return request.get(url)
}
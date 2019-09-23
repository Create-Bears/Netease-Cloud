import request from '@/utils/request'

export let searchHistory = () => {
  let url = "search/index";
  return request.get(url)
}
import request from '@/utils/request'

export let getAddressList = () => {
  let url = '/address/list';
  return request.get(url);
}
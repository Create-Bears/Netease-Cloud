import request from "@/utils/request";

export let getCategoryList = (id: any) => {
  let url = "/goods/category";
  return request.get(url, { params: { id: id } });
};

export let getCategoryCurrent = (id: any) => {
  let url = "/catalog/current";
  return request.get(url, { params: { id: id } });
};

export let getGoodsList = (params: any) => {
  let url = "/goods/list";
  return request.get(url, { params });
};

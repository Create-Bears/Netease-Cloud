import request from "@/utils/request";

export let getCategoryList = () => {
  let url = "/goods/category";
  return request.get(url);
};

import request from "@/utils/request";

export let getCategoryList = (id: any) => {
  console.log(id);
  let url = "/goods/category";
  return request.get(url, { params: { id: id } });
};

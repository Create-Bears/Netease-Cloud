import request from "@/utils/request";

//获取首页数据
export const getFirstList = () => {
  const url = "/";
  return request.get(url);
};

//获取专题数据
export const getTopLists=()=>{
    const url='/topic/list';
    return request.get(url)
}

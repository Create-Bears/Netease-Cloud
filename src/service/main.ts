import request from "@/utils/request";

export const getFirstList = () => {
  const url = "/";
  return request.get(url);
};

import request from "@/utils/request";

export let UserLogin = (params: object) => {
  let url = "/auth/loginByMobile";
  return request.post(url, params);
};

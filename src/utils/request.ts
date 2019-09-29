import axios from "axios";

const instance = axios.create({
  baseURL: /cyz.jasonandjay.com/.test(window.location.host)
    ? "https://easymarket.jasonandjay.com"
    : "//169.254.191.66:8888",
  timeout: 1000,
  headers: { "x-nideshop-token": window.localStorage.getItem("token") }
});

instance.interceptors.request.use(
  function(config) {
    /* eslint-disable */
        console.log(config)
        // Do something before request is sent
        return config
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
instance.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error)
    }
)

export default instance

// 请求工具封装
import axios from "axios";
import qs from "qs";
import router from "@/router";
import store from "@/store";
import vue from "@/main";

// 设置环境
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 60000,
  // get方法提交内容是数组时的展示方式. 需要和后端确认类型
  paramsSerializer: function(params) {
    return qs.stringify(params, { arrayFormat: "repeat" });
  }
});

// 请求拦截
service.interceptors.request.use(
  config => {
    // 每一次请求，都会经过这个拦截器
    // 如有需求，在此添加
    if (process.env.NODE_ENV === "development") {
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

//响应拦截
service.interceptors.response.use(
  response => {
    // 与后端约定响应码
    switch (response.data.code) {
      case 200:
        return response;
      case 401:
        // 未登录
        store.dispatch("clearToken").then(_ => {
          router.replace("/login");
        });
        break;
    }
    vue.$toast.error(response.data.msg);
    return Promise.reject(response.data.msg);
  },
  e => {
    console.error("Request Error: " + e);
    if (!!e.message) {
      console.error(e.message);
      vue.$toast(e.message);
    }
    return Promise.reject(e.message);
  }
);

export default service;

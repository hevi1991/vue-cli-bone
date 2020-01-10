/*
控制路由跳转，登录相关

SPA 登录思路

请求拦截器中，拦截未登录401状态码，如未登录，跳转到登录页

登录
1. 登录页输入用户名密码进行登录，记录登录flag。

路由跳转前
1. 查看vuex里有无登录flag
  - 有，跳转到目的路由
  - 无，跳转登录页
2. 跳转到登录页，可选附带重定向地址
 */
import router from "./router";
import { getToken } from "@/utils/auth";

const whiteList = [
  "/login"
];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }
});

router.afterEach(_ => {
  // do something after each
});

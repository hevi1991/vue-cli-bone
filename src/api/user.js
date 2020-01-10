import request from "../utils/request";

/**
 * 登录
 * @param data
 * @return {*}
 */
export function login(data) {
  return request.post("/login", data);
}

/**
 * 登出
 * @param params
 * @return {*}
 */
export function logout(params = {}) {
  return request.get("/logout", { params });
}

/**
 * get请求一个响应
 *
 * @export
 * @param {*} params
 * @returns
 */
export function getRequest(params = {}) {
  return request.get("/ping", { params });
}

/**
 * post请求一个响应
 * @param data
 * @return {*}
 */
export function postHi(data) {
  return request.post("/sayHello", data);
}

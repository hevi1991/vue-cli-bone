import Cookies from "js-cookie";

const TOKEN_KEY = "token-key";

/**
 * Cookies中取出登录标识
 * @return {*}
 */
export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

/**
 * Cookies中配置已登录标识
 * @param token
 * @return {*}
 */
export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token);
}

/**
 * Cookies删除登录标识
 * @return {*}
 */
export function removeToken() {
  return Cookies.remove(TOKEN_KEY);
}

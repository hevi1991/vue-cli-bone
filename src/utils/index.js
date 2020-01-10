import qs from "qs";

/**
 * 请求路径参数转对象
 * @export
 * @param {*} url
 * @returns
 */
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    "{\"" +
    decodeURIComponent(search)
      .replace(/"/g, "\\\"")
      .replace(/&/g, "\",\"")
      .replace(/=/g, "\":\"")
      .replace(/\+/g, " ") +
    "\"}"
  );
}

/**
 * 请求路径参数转对象
 * @param url
 * @returns {*}
 */
export function getURLParams(url) {
  const found = url.match(/.+\?([\w\W]+)/i);
  if (found !== null) {
    return qs.parse(found[1]);
  } else {
    return null;
  }
}

/**
 * 解析时间
 * @param time
 * @param cFormat
 * @return {*}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if ((typeof time === "string") && (/^[0-9]+$/.test(time))) {
      time = parseInt(time);
    }
    if ((typeof time === "number") && (time.toString().length === 10)) {
      time = time * 1000;
    }
    // iOS遇到yyyy-MM-dd这种格式会转换异常，这里强行修复
    time = time.replace(/-/g, "/");
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
}

/**
 * 格式化时间
 * @param time
 * @param option
 * @return {*}
 */
export function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getFullYear() +
      "年" +
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    );
  }
}

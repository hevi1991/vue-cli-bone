class Result {
  constructor({ code, msg, data }) {
    this.code = code;
    this.msg = msg;
    if (data) {
      this.data = data;
    } else {
      this.data = {};
    }
  }

  toJSONString() {
    return JSON.stringify({
      code: this.code,
      msg: this.msg,
      data: this.data
    });
  }

}

/**
 * 成功回调
 * @param data
 * @param msg
 */
function success(data, msg = "操作成功") {
  return new Result({
    code: 200,
    msg: msg,
    data
  });
}

/**
 * 失败回调
 * @param code
 * @param msg
 * @returns {Result}
 */
function fail(code, msg) {
  return new Result({ code, msg });
}

module.exports = {
  success,
  fail
};



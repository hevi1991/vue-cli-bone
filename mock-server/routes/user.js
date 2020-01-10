const Mock = require("mockjs");
const success = require("../vo/Result").success;
const fail = require("../vo/Result").fail;
const { users } = require("../models/user");

module.exports = [
  {
    method: "post",
    path: "/login",
    options: {
      auth: {
        mode: "try"
      },
      handler: async (request, h) => {

        const { username, password } = request.payload;
        if (!username || !password) {
          return fail(0, "帐号和密码不能为空");
        }

        // Try to find user with given credentials

        const account = users.find(
          (user) => user.username === username && user.password === password
        );

        if (!account) {
          return fail(0, "用户或密码错误");
        }

        request.cookieAuth.set({ id: account.id });
        return success(null, "登录成功");
      }
    }
  },
  {
    method: "get",
    path: "/logout",
    options: {
      handler: (request, h) => {
        request.cookieAuth.clear();
        return success();
      }
    }
  },
  {
    method: "get",
    path: "/user/info",
    handler(request, h) {
      return success({
        name: request.auth.credentials.name,
        age: 19
      });
    }
  }
];

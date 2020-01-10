"use strict";

const Hapi = require("hapi");
const config = require("./config");
const routes = require("./routes");
const fail = require("./vo/Result").fail;

const server = Hapi.server({
  port: config.port,
  host: config.host,
  routes: {
    cors: {
      origin: ["*"], // an array of origins or 'ignore'
      credentials: true // boolean - 'Access-Control-Allow-Credentials'
    }
  }
});


const init = async () => {

  // 登录验证
  const users = require("./models/user").users;
  await server.register(require("@hapi/cookie"));
  server.auth.strategy("session", "cookie", {

    cookie: {
      name: "sid",

      // Don't forget to change it to your own secret password!
      password: "password-should-be-32-characters",

      // For working via HTTP in localhost
      isSecure: false
    },

    validateFunc: async (request, session) => {

      const account = users.find((user) => (user.id === session.id));

      if (!account) {
        // Must return { valid: false } for invalid cookies
        return { valid: false };
      }

      return { valid: true, credentials: account };
    }
  });

  server.auth.default("session");

  // 配置全局前缀
  server.realm.modifiers.route.prefix = "/mock";
  // 映射路由
  server.route([...routes]);
  await server.start();

  // 全局异常拦截
  server.ext("onPreResponse", function(request, h) {
    const response = request.response;
    if (!response.isBoom) {
      return h.continue;
    }

    const { output: error } = response;
    return fail(error.statusCode, error.payload.error);
  });
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();

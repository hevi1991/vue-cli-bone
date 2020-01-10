const success = require("../vo/Result").success;
module.exports = [
  {
    method: "get",
    path: "/ping",
    handler: (request, h) => {
      return success(`${request.method}`);
    }
  },
  {
    method: "post",
    path: "/pong",
    handler: (request, h) => {
      return success(`${request.method} ${request.payload.name}`);
    }
  }
];

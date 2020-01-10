/*
  自动导入本目录下所有路由
 */
const requireContext = require("require-context");

const req = requireContext(`${__dirname}`, false, /\.js$/);
const requireAll = requireContext => {
  let keys = requireContext.keys().filter(key => !key.includes("index"));
  let routes = [];
  keys.forEach(key => {
    routes.push(...requireContext(key));
  });
  return routes;
};

module.exports = requireAll(req);

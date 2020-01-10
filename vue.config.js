const path = require("path");

const port = 8888;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_PROXY_API,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  chainWebpack: config => {
    // todo: Router守卫、登录缓存、权限路由？...
    // 矢量图标配置loader
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/components/SvgIcon/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/components/SvgIcon/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();

    config
    // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === "development",
        config => config.devtool("cheap-source-map")
      );
  }
};

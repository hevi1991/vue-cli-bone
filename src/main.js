import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "./styles/index.scss";

Vue.config.productionTip = false;

// SvgIcon组件全局注册
import "@/components/SvgIcon";

// 前端路由控制
import "./permission";

// 全局注册过滤器
import * as filters from "./filters"; // global filters
// register global utility filters 注册Vue过滤器，用法：property | filter-methods
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// 插件部分
// vuetify
import vuetify from "./plugins/vuetify";
// 提示
import Toast from "./plugins/toast";

Toast.install(Vue);

const vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

export default vm;

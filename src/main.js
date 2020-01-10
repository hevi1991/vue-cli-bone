import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.scss";

Vue.config.productionTip = false;

// SvgIcon组件全局注册
import "@/components/SvgIcon";

// 前端路由控制
import "./permission";

import * as filters from "./filters"; // global filters
// register global utility filters 注册Vue过滤器，用法：property | filter-methods
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

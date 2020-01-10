import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/Login.vue"),
      hidden: true
    },
    {
      path: "/404",
      component: () => import("@/views/error/Page404"),
      hidden: true
    },
    { path: "*", redirect: "/404", hidden: true }
  ]
});

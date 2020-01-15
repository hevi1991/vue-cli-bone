import Toast from "@/components/Toast";
import Vue from "vue";

/**
 * 基于vuetify v-snackbar进行封装的Vue插件
 */
export default {
  install: function(Vue, options) {
    Vue.prototype.$toast = function(msg, type = "success") {
      // 创建包含组件的Vue子类
      let VueToast = Vue.extend(Toast);
      // 实例化，将组件放置在根DOM元素
      let instance = new VueToast();
      instance.text = Date.now();
      instance.value = true;
      instance.color = "info";
      let vm = instance.$mount();

      // 保存当前弹窗实例
      document.body.appendChild(vm.$el);
    };
  }
};

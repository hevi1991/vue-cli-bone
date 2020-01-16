import Toast from "./Toast";

/**
 * 基于vuetify v-snackbar进行封装的Vue插件
 */
export default {
  install: function(Vue, options) {
    const toast = Vue.prototype.$toast = function(msg, type) {
      // 创建包含组件的Vue子类
      let MyToast = Vue.extend(Toast);
      // 实例化，将组件放置在根DOM元素
      let instance = new MyToast({
        data() {
          return {
            show: true,
            text: msg,
            type: type
          };
        }
      });
      let vm = instance.$mount();

      // 保存当前弹窗实例
      document.body.appendChild(vm.$el);
    };
    // Usage: this.$toast.error(message);
    ["primary", "success", "error"].forEach(type => {
      Vue.prototype.$toast[type] = msg => toast(msg, type);
    });
  }
};

import Vue from "vue";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue"; //Svg组件

Vue.component("svg-icon", SvgIcon);

// 扫描svg文件夹下，所有svg文件
const req = require.context("./icons", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);

/*
yarn add svg-sprite-loader --dev
需要在webpack配置中添加 svg-sprite-loader , 并进行配置。
*/

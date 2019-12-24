/*
 * @Author: Nianko
 * @Date: 2019-12-05 09:35:56
 * @Last Modified by: Nianko
 * @Last Modified time: 2019-12-24 10:50:22
 */

// import Vue from 'vue';
import MiaozaDate from "@/lib/utils/date";

// 定义我们的插件
var Miaoza = {
  // 该插件有一个install方法
  // 方法的第一个参数是传入的Vue，第二个参数可以插件的自定义参数
  install(Vue, options) {
    // 将其注册为vue的组件，'vpay'是组件名，keyboard是我们开发的组件
    // Vue.component('vpay', vpay)
    Vue.prototype.$MiaozaDate = new MiaozaDate();
  }
};

// 最后将插件导出，并在main.js中通过Vue.use()即可使用插件
// module.exports = Miaoza;
export default Miaoza;

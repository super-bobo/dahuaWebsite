
// let u = navigator.userAgent;

// if (u.indexOf('Trident') > -1) {
// 	window.location.href = "http://www.dahuasecurity.com";
// }
// console.log(u)
// if (u.toLowerCase().indexOf("safari") > -1 && u.toLowerCase().indexOf("coolpad") > -1) {
// 	var ver=u.toLowerCase().match(/safari\/([\d.]+)/)[1];
//     console.log(ver)
//     if(ver.split('.')[0] < 537){
//     	window.location.href = "http://www.dahuasecurity.com";
//     }
// }

// if (u.toLowerCase().indexOf("chrome") > -1 && u.toLowerCase().indexOf("coolpad") > -1) {
// 	var ver=u.toLowerCase().match(/chrome\/([\d.]+)/)[1];
//     console.log(ver)
//     if(ver.split('.')[0] < 30){
//     	window.location.href = "http://www.dahuasecurity.com";
//     }
// }

import 'babel-polyfill' //兼容老版本

import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import store from './vuex/store'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)


if ('addEventListener' in document) {//解决点击延迟事件
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false  //是否显示vue提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})



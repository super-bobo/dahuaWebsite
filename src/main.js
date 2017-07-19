// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('font-awesome-webpack')
import FastClick from 'fastclick'
import store from './vuex/store'
import axios from 'axios'
Vue.prototype.$http = axios

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

if ('addEventListener' in document) {//解决点击延迟事件
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const home = r => require.ensure([], () => r(require('@/views/home/')), 'home')
const product = r => require.ensure([], () => r(require('@/views/product/')), 'product')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //产品图
        {
            path: '/product',
            component: product,
            // children: [
            //     {
            //         path: '/product',
            //         component: ''
            //     }
            // ]
        },
    ]
  }]
})

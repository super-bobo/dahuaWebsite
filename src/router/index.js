import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const home = r => require.ensure([], () => r(require('@/views/home/home')), 'home')
const product = r => require.ensure([], () => r(require('@/views/product/product')), 'product')
const subProduct = r => require.ensure([], () => r(require('@/views/product/children/subProduct')), 'product')
const productList = r => require.ensure([], () => r(require('@/views/product/children/productList')), 'product')
const productDetail = r => require.ensure([], () => r(require('@/views/product/children/productDetail')), 'product')
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
            component: home
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //产品列表
        {
            path: '/product',
            component: product,
            children: [
                {
                    path: 'subProduct',
                    component: subProduct
                },
                {
                    path: 'productList',
                    alias: 'subProduct/productList',
                    component: productList
                },
                {
                    path: 'productDetail',
                    alias: 'subProduct/productList/productDetail',
                    component: productDetail
                }
            ]
        },
    ]
  }],
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
  }
})

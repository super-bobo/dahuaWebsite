import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const home = r => require.ensure([], () => r(require('@/views/home/')), 'home')
const floatmenu = r => require.ensure([], () => r(require('@/views/floatmenu/')), 'floatmenu')

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })

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
        //浮动菜单栏
        {
            path: '/floatmenu',
            component: floatmenu
        },
    ]
  }]
})

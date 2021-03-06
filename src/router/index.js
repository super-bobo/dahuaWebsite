import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import store from '../vuex/store'

const home = r => require.ensure([], () => r(require('@/views/home/home')), 'home')

const product = r => require.ensure([], () => r(require('@/views/product/product')), 'product')
const subProduct = r => require.ensure([], () => r(require('@/views/product/subProduct')), 'product')
const thirProduct = r => require.ensure([], () => r(require('@/views/product/thirProduct')), 'product')
const productList = r => require.ensure([], () => r(require('@/views/product/productList')), 'product')
const videoConferencing = r => require.ensure([], () => r(require('@/views/product/videoConferencing')), 'product')
const newProductList = r => require.ensure([], () => r(require('@/views/product/newProductList')), 'product')
const productDetail = r => require.ensure([], () => r(require('@/views/product/productDetail')), 'product')
const productSelect = r => require.ensure([], () => r(require('@/views/product/productSelect')), 'product')

const newsroom = r => require.ensure([], () => r(require('@/views/newsroom/newsroom')), 'newsroom')
const pressRelease = r => require.ensure([], () => r(require('@/views/newsroom/pressRelease')), 'newsroom')
const pressReleaseDetail = r => require.ensure([], () => r(require('@/views/newsroom/pressReleaseDetail')), 'newsroom')
const successStory = r => require.ensure([], () => r(require('@/views/newsroom/successStory')), 'newsroom')
const successStoryList = r => require.ensure([], () => r(require('@/views/newsroom/successStoryList')), 'newsroom')
const successStoryDetail = r => require.ensure([], () => r(require('@/views/newsroom/successStoryDetail')), 'newsroom')
const eventsList = r => require.ensure([], () => r(require('@/views/newsroom/eventsList')), 'newsroom')
const newsletter = r => require.ensure([], () => r(require('@/views/newsroom/newsletter')), 'newsroom')

const aboutUs = r => require.ensure([], () => r(require('@/views/aboutus/aboutUs')), 'aboutus')
const awards = r => require.ensure([], () => r(require('@/views/aboutus/awards')), 'aboutus')
const introductionList = r => require.ensure([], () => r(require('@/views/aboutus/introductionList')), 'aboutus')
const contactUs = r => require.ensure([], () => r(require('@/views/aboutus/contactUs')), 'aboutus')
const career = r => require.ensure([], () => r(require('@/views/aboutus/career')), 'aboutus')

const technologyPartner = r => require.ensure([], () => r(require('@/views/partner/technologyPartner')), 'partner')
const distributionPartner = r => require.ensure([], () => r(require('@/views/partner/distributionPartner')), 'partner')
const IPCSupportList = r => require.ensure([], () => r(require('@/views/partner/IPCSupportList')), 'partner')
const IPCSupportDetail = r => require.ensure([], () => r(require('@/views/partner/IPCSupportDetail')), 'partner')

const cybersecurity = r => require.ensure([], () => r(require('@/views/support/cybersecurity')), 'support')
const cybersecurityList = r => require.ensure([], () => r(require('@/views/support/cybersecurityList')), 'support')
const annoucement = r => require.ensure([], () => r(require('@/views/support/annoucementNotice')), 'support')
const annoucementDetail = r => require.ensure([], () => r(require('@/views/support/annoucementDetail')), 'support')
const notice = r => require.ensure([], () => r(require('@/views/support/notice')), 'support')
const noticeDetail = r => require.ensure([], () => r(require('@/views/support/noticeDetail')), 'support')

const solution = r => require.ensure([], () => r(require('@/views/solution/solution')), 'solution')
const solutionBank = r => require.ensure([], () => r(require('@/views/solution/solutionBank')), 'solution')
const entrance = r => require.ensure([], () => r(require('@/views/solution/entrance')), 'solution')
const keyTechnology = r => require.ensure([], () => r(require('@/views/solution/keyTechnology')), 'solution')

const search = r => require.ensure([], () => r(require('@/views/search/search')), 'search')
const searchList = r => require.ensure([], () => r(require('@/views/search/searchList')), 'search')

const newslettersub = r => require.ensure([], () => r(require('@/views/newsletter/newsletter')), 'newsletter')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        //页面重定向
        { 
            path: '/index.html', 
            redirect: '/home' 
        },


        { 
            path: '/products.html', 
            redirect: '/product' 
        },


        { 
            path: '/press.html', 
            redirect: '/newsroom' 
        },
        { 
            path: '/news.html', 
            redirect: '/newsroom/pressRelease' 
        },
        { 
            path: '/success-stories.html', 
            redirect: '/newsroom/successStory' 
        },
        { 
            path: '/exhibition.html', 
            redirect: '/newsroom/eventsList' 
        },
        { 
            path: '/newsletter.html', 
            redirect: '/newsroom/newsletter'
        },

        { 
            path: '/introduction.html', 
            redirect: '/aboutus/introduction'
        },
        { 
            path: '/contact.html', 
            redirect: '/aboutus/contactUs'
        },
        { 
            path: '/career.html', 
            redirect: '/aboutus/career'
        },
        { 
            path: '/online.html', 
            redirect: '/aboutus/awards'
        },

        { 
            path: '/partner_category/technology-partner-1.html', 
            redirect: '/technologyPartner'
        },
        // { 
        //     path: '/partner_category/distribution-partner-2.html', 
        //     redirect: '/IPCSupportList'
        // },
        { 
            path: '/spartner-2.html', 
            redirect: '/IPCSupportList'
        },

        //solution
        { 
            path: '/solution.html', 
            redirect: '/solution' 
        },
        { 
            path: '/solution.html/:bankId', 
            redirect: '/solutionBank/:bankId' 
        },

        { 
            path: '/support.html', 
            redirect: '/cybersecurity'
        },
        { 
            path: '/cybersecurity.html', 
            redirect: '/cybersecurity'
        },
        { 
            path: '/support.html/annoucement', 
            redirect: '/annoucement' 
        },
        { 
            path: '/notice.html', 
            redirect: '/notice' 
        },
        { 
            path: '/support.html/:cybersecurityKeyword', 
            redirect: '/cybersecurityList/:cybersecurityKeyword' 
        },

        { 
            path: '/aboutus/introduction', 
            redirect: '/aboutUs/introduction/532' 
        },
        { 
            path: '/introduction.html/272', 
            redirect: '/aboutUs/awards' 
        },
        { 
            path: '/introduction.html/:introductionKeyWord', 
            redirect: '/aboutUs/introduction/:introductionKeyWord' 
        },

        //重定向结束

        {
            path: '',
            component: home
        },
        //首页
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
                    path: 'subProduct/:productId',
                    component: subProduct
                },
                {
                    path: 'thirProduct/:productId',
                    component: thirProduct
                },
                {
                    path: 'productList/:productId',
                    alias: 'subProduct/productList/:productId',
                    component: productList
                },
                {
                    path: 'videoConferencing',
                    component: videoConferencing
                },
                {
                    path: 'newProductList',
                    alias: 'subProduct/newProductList',
                    component: newProductList
                },
                {
                    path: 'productDetail/:productId',
                    alias: 'subProduct/productList/productDetail/:productId',
                    component: productDetail
                },
                {
                    path: 'productSelect/:productId',
                    alias: 'subProduct/productSelect/:productId',
                    component: productSelect
                }
            ]
        },
        //关于我们
        {
            path: '/aboutUs',
            component: aboutUs,
            children: [
                {
                    path: 'awards',
                    component: awards
                },
                {
                    path: 'introduction/:introductionKeyWord',
                    component: introductionList
                },
                {
                    path: 'contactUs',
                    component: contactUs
                },
                // {
                //     path: 'career',
                //     component: career
                // }
            ]
        },
        //newsroom
        {
            path: '/newsroom',
            component: newsroom,
            children: [
                {
                    path: 'pressRelease',
                    component: pressRelease
                },
                {
                    path: 'pressReleaseDetail/:pressReleaseId',
                    component: pressReleaseDetail
                },
                {
                    path: 'successStory',
                    component: successStory
                },
                {
                    path: 'successStoryList/:successStoryListId',
                    component: successStoryList
                },
                {
                    path: 'successStoryDetail/:successStoryListId',
                    component: successStoryDetail
                },
                {
                    path: 'eventsList',
                    component: eventsList
                },
                {
                    path: 'newsletter',
                    component: newsletter
                },
            ]
        },
        //partner
        {
            path: '/technologyPartner',
            component: technologyPartner
        },
        {
            path: '/IPCSupportList',
            component: IPCSupportList
        },
        {
            path: '/IPCSupportDetail/:IPCSupportId',
            component: IPCSupportDetail
        },
        {
            path: '/distributionPartner',
            component: distributionPartner
        },

        //support
        {
            path: '/cybersecurity',
            component: cybersecurity
        },
        {
            path: '/cybersecurityList/:cybersecurityKeyword',
            component: cybersecurityList
        },
        {
            path: '/annoucement',
            component: annoucement
        },
        {
            path: '/annoucementDetail/:annoucementId',
            component: annoucementDetail
        },
        {
            path: '/notice',
            component: notice
        },
        {
            path: '/noticeDetail/:noticeId',
            component: noticeDetail
        },


        //solution
        {
            path: '/solution',
            component: solution
        },
        {
            path: '/solutionBank/:bankId',
            component: solutionBank
        },
        {
            path: '/entrance/:bankId/:entranceId',
            component: entrance
        },
        {
            path: '/keyTechnology/:keyId',
            component: keyTechnology
        },


        //search 
        {
            path: '/search/:keyword',
            component: search
        },
        {
            path: '/searchList/:menu/:keyword',
            component: searchList
        },

        //newslettersub 
        {
            path: '/newslettersub',
            component: newslettersub
        },

        //404
        {
            path: '*',
            component: home
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

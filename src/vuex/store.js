import Vue from 'vue'
import Vuex from 'vuex'

import loading from './modules/loading'

import productsMenu from './modules/productsMenu'
import newsEvent from './modules/newsEvent'
import newProducts from './modules/newProducts'
import homeBanner from './modules/homeBanner'
import storyList from './modules/storyList'

import allProducts from './modules/allProducts'
import subProducts from './modules/subProducts'
import productList from './modules/productList'
import newProductList from './modules/newProductList'
import productDetail from './modules/productDetail'
import productSelect from './modules/productSelect'
import productSelectFilter from './modules/productSelectFilter'
import productToFilter from './modules/productToFilter'
import productToFilterMenu from './modules/productToFilterMenu'
import productToCompare from './modules/productToCompare'

import newsroom from './modules/newsroom'
import successStory from './modules/successStory'
import successStoryList from './modules/successStoryList'
import successStoryDetail from './modules/successStoryDetail'
import eventsList from './modules/eventsList'
import newsletter from './modules/newsletter'
import pressRelease from './modules/pressRelease'
import pressReleaseDetail from './modules/pressReleaseDetail'

import introductionList from './modules/introductionList'
import contactUs from './modules/contactUs'
import career from './modules/career'
import awards from './modules/awards'

import technologyPartner from './modules/technologyPartner'
import distributionPartner from './modules/distributionPartner'
import IPCSupportList from './modules/IPCSupportList'

import cybersecurity from './modules/cybersecurity'




Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        loading,

        productsMenu,
        newsEvent,
        newProducts,
        homeBanner,
        storyList,

        allProducts,
        subProducts,
        productList,
        newProductList,
        productDetail,
        productSelect,
        productSelectFilter,
        productToFilter,
        productToFilterMenu,
        productToCompare,

        newsroom,
        successStory,
        successStoryList,
        successStoryDetail,
        eventsList,
        newsletter,
        pressRelease,
        pressReleaseDetail,

        introductionList,
        contactUs,
        career,
        awards,

        technologyPartner,
        distributionPartner,
        IPCSupportList,

        cybersecurity,
    }
})
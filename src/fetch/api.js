import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['accept'] = 'application/json, text/plain, */*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'http://mobiletest.dahuasecurity.com/';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});


export function fetchPost (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error);
    })
  })
}
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error);
    })
  })
}

export default {

    /*获取产品菜单栏*/
    productMenu() {
        return fetchGet('indexApi/home/index_menu')
    },

    /*获取首页banner */
    homeBanner() {
        return fetchGet('indexApi/home/banner')
    },

    /*获取最新产品 */
    newProducts() {
        return fetchGet('indexApi/home/products_index')
    },

    /*获取最新事件 */
    newsEvent() {
        return fetchGet('indexApi/home/news_index')
    },

    /*获取消息列表 */
    storyList() {
        return fetchGet('indexApi/home/story_index')
    },

    /*获取所有产品列表 */
    allProducts() {
        return fetchGet('indexApi/product/main_product')
    },

    /*获取子产品列表 */
    subProducts(id) {
        return fetchGet('indexApi/product/menu_product?id=' + id)
    },

    /*获取videoConferencing列表 */
    videoConferencing() {
        return fetchGet('indexApi/product/video_conferencing')
    },

    /*获取子产品子列表 */
    productList(id) {
        return fetchGet('indexApi/product/product_list?id=' + id)
    },

    /*获取最新子产品子列表 */
    newProductList() {
        return fetchGet('indexApi/product/product_list?new=1')
    },

    /*获取产品详情 */
    productDetail(id) {
        return fetchGet('indexApi/product/product_info?id=' + id)
    },

    /*获取产品删选列表 */
    productSelect(params) {
        return fetchPost('indexApi/product/product_select', params)
    },

    /*获取删选产品列表 */
    productSelectFilter() {
        return fetchGet('indexApi/menu/main_menu')
    },

    /*获取删选后的产品列表 */
    productToFilter(params) {
        return fetchGet('indexApi/menu/second_menu?main_id=' + params.main_id + '&small=' + params.small)
    },

    /*获取删选后的产品选择列表 */
    productToFilterMenu(params) {
        return fetchGet('indexApi/menu/search_menu?search_id=' + params.search_id)
    },

    /*获取产品比较表格列表 */
    productToCompare(params) {
        return fetchGet('indexApi/product/product_compare?compare=' + JSON.stringify(params.compare))
    },

    /*获取newsroom */
    newsroom() {
        return fetchGet('indexApi/newsroom/newsroom')
    },

    /*获取newsroom   successStory */
    successStory(params) {
        return fetchGet('indexApi/newsroom/success_stories')
    },

    /*获取newsroom   successStoryList */
    successStoryList(params) {
        return fetchGet('indexApi/newsroom/banking_list?id=' + params)
    },

    /*获取newsroom   successStoryDetail */
    successStoryDetail(params) {
        return fetchGet('indexApi/newsroom/banking_info?id=' + params)
    },

    /*获取newsroom   eventsList */
    eventsList() {
        return fetchGet('indexApi/newsroom/events_list')
    },

    /*获取newsroom   newsletter */
    newsletter() {
        return fetchGet('indexApi/newsroom/newsletter_list')
    },

    /*获取newsroom   pressRelease*/
    pressRelease(params) {
        return fetchGet('indexApi/newsroom/news_list?date=' + params)
    },

    /*获取newsroom   pressRelease*/
    pressReleaseDetail(params) {
        return fetchGet('indexApi/newsroom/news_info?id=' + params)
    },

    /*获取about us  introductionList*/
    introductionList(params) {
        console.log(params)
        switch (params) {
            case '532':
                return fetchGet('indexApi/about_us/single_page?keyword=introduction')
                break;
             case '542':
                return fetchGet('indexApi/about_us/single_page?keyword=sales')
                break; 
            case '552':
                return fetchGet('indexApi/about_us/single_page?keyword=manufacturing')
                break; 
            case '562':
                return fetchGet('indexApi/about_us/single_page?keyword=globalization')
                break; 
            case '572':
                return fetchGet('indexApi/about_us/single_page?keyword=corevalues')
                break;   
            case '272':
                return fetchGet('indexApi/about_us/awards_certifications')
                break;   
            default:
                return fetchGet('indexApi/about_us/single_page?keyword=introduction')
                break;
        }
    },

    /*获取about us  contactUs*/
    contactUs() {
        return fetchGet('indexApi/about_us/contact_us')
    },

    /*获取about us  career*/
    career(params) {
        return fetchGet('indexApi/about_us/open_positions?country_id='+ params.country_id + '&function=' + params.functions + '&search=' + params.search)
    },

    /*获取about us  awards_certifications*/
    awards() {
        return fetchGet('indexApi/about_us/awards_certifications')
    },


    /*获取partner technologyPartner*/
    technologyPartner(params) {
        return fetchGet('indexApi/partner/technology_partner?menu_id=' + params)
    },

    /*获取partner technologyPartner*/
    distributionPartner(params) {
        return fetchGet('indexApi/partner/distribution_partner?menu_id=' + params)
    },

    /*获取partner IPCSupportList*/
    IPCSupportList() {
        return fetchGet('indexApi/partner/nvr')
    },

    /*获取partner IPCSupportList*/
    IPCSupportDetail(params) {
        return fetchGet('indexApi/partner/nvr_detail?id=' + params)
    },


    /*获取support cybersecurity*/
    cybersecurity() {
        return fetchGet('indexApi/support/single_page?keyword=cybersecurity')
    },

    /*获取support annoucement*/
    annoucement() {
        return fetchGet('indexApi/support/annoucement')
    },

    /*获取support annoucement*/
    annoucementDetail(params) {
        return fetchGet('indexApi/support/annoucement_info?id=' + params)
    },

    /*获取support vulnerability-reporting*/
    vulnerabilityReporting() {
        return fetchGet('indexApi/support/single_page?keyword=vulnerability-reporting')
    },

    /*获取support best-practices*/
    bestPractices() {
        return fetchGet('indexApi/support/single_page?keyword=best-practices')
    },
    /*获取support about-dhcc*/
    aboutDhcc() {
        return fetchGet('indexApi/support/single_page?keyword=about-dhcc')
    },


    /*获取solution banking*/
    solutionBank(params) {
        return fetchGet('indexApi/solution/solution_bank?menu_id=' + params)
    },

    /*获取solution entrance*/
    entrance(params) {
        return fetchGet('indexApi/solution/solution_area?menu_id=' + params.bankId + '&lb_id=' + params.entranceId)
    },

    /*获取solution keytechnology*/
    keyTechnology(params) {
        return fetchGet('indexApi/solution/key_technology?menu_id=' + params)
    },


}

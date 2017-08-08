import api from '../../fetch/api'

const state = {
    homeBanner: [],
    bannerIndex: 0
}

const actions = {

    /**/
    getHomeBanner() {
        api.homeBanner()
            .then(res => {
                // state.homeBanner = res.data.map((item, index) => ({
                //   url: item.url,
                //   img: item.mobile_image
                // }));
                const bannerArr = [];
                for(const arr in res.data){
                    if(res.data[arr].mobile_url && res.data[arr].mobile_image){
                        bannerArr.push({
                            url: res.data[arr].mobile_url,
                            img: res.data[arr].mobile_image
                        })
                    }
                }
                console.log(bannerArr)
                state.homeBanner = bannerArr
            })
    }
}

const getters = {
    homeBanner: state => state.homeBanner,
    bannerIndex: state => state.bannerIndex,
}

const mutations = {
   
}

export default {
    state,
    actions,
    getters,
    mutations
}
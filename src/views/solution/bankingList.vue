<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div v-show="isSecondPage">
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-product-wrapper">
            <div class="dh-sub-title">
              <h3>Newsroom</h3>
            </div>
            <ul class="dh-container dh-product-item">
              <li class="dh-allproduct-list" v-for="(item, index) in allProducts.data">
                <router-link tag='a' :to='"/product/subProduct/" + item.id'>
                  <figure>
                    <img class="dh-width-fluid" :src="item.menu_image" alt="" />
                    <p>{{item.name}}</p>
                  </figure>
                </router-link>
              </li>
            </ul>
            <div class="dh-banking">
              <ul class="dh-banking-item">
                <li class="dh-banking-list">
                  <div class="dh-left-part">
                    <img src="../../assets/images/dh-banking-list-img.png">
                  </div>
                  <div class="dh-right-part">
                    
                  </div>
                  <flexbox :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/3">
                      <div class="flex-demo">1/3</div>
                    </flexbox-item>
                    <flexbox-item :span="2/3">
                      <div class="flex-demo">1/3</div>
                    </flexbox-item>
                  </flexbox>
                </li>
              </ul>
            </div>
          </section>
          <footer-part></footer-part>
        </div>
      </div>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'

import { Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          isSecondPage: true,
        }
    },
    components: {
        headTop,
        footerPart,
        Flexbox,
        FlexboxItem
    },
    // computed: {
    //   ...mapGetters([
    //     'allProducts'
    //   ])
    // },
    // created () {
    //  if(this.allProducts.length == 0) this.$store.dispatch('getAllProducts')
    // },
    methods: {
      getStatus (url) {
        console.log(this.$route.path)
        const urlStr = url.split('/')
        console.log('/'+ (urlStr[urlStr.length - 1]))
        if(((urlStr[urlStr.length - 1]) != "") && (('/'+ urlStr[urlStr.length - 1]) != (this.$route.path))) {
          this.isSecondPage = false
        }else{
          this.isSecondPage = true
        }
      }
    },
    watch: {
      '$route' (to, from) {
      //刷新参数放到这里触发刷新相同界面
        this.getStatus(this.$route.path)
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-aboutus-awards{
      margin-top: 18px;
    }
    .dh-aboutus-tab{
      border-bottom: solid 1px #034585;
      height: 36px!important;
      &.vux-tab{
        display: block;
        margin: 0 4%;
        .vux-tab-item{
          float: left;
          width: auto;
          padding: 0 6%;
          border-bottom: 0;
          line-height: 38px;
          color: #606060;
          background-color: none!important;
        }
        .vux-tab-selected{
          position: relative;
          color: #606060!important;
          &:after{
            content: '';
            display: block;
            box-sizing: border-box;
            height: 36px;
            width: 100%;
            border-top: solid 2px #034585;
            border-left: solid 1px #034585;
            border-right: solid 1px #034585;
            border-bottom: solid 2px #fff;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
    
</style>

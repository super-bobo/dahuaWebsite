<template>
  	<div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <div class="dh-swiper-wrapper">
              <swiper loop auto class="dh-index-swiper" 
                  :list="homeBanner" 
                  :aspect-ratio="4/3" 
                  :index="bannerIndex"
                  :interval="8000"
                  :show-desc-mask="true">
              </swiper>
          </div>
          <div class="dh-container dh-home-container">
              <section class="dh-index-wrapper dh-newproduct-wrapper">
                  <article class="dh-index-title-box">
                      <h2 class="dh-index-title dh-left">New Products</h2>
                      <router-link tag="a" :to="'/product/newProductList'" class="dh-index-morebtn dh-right">more</router-link>
                  </article>
                  <ul class="dh-newproduct-main">
                      <li class="dh-newproduct-list" v-for="item in newProducts.data" v-if="newProducts">
                        <router-link tag="a" :to="'/product/productDetail/' + item.id">
                          <figure>
                            <img class="dh-newproduct-img" :src="item.pro_thumb" alt="" />
                            <figcaption>
                                <h3 class="dh-elip">{{item.name}}</h3>
                                <p>{{item.text}}</p>
                            </figcaption>
                          </figure>
                        </router-link>
                      </li>
                  </ul>
              </section>
              <section class="dh-index-wrapper dh-newletter-wrapper">
                  <article class="dh-index-title-box dh-spe">
                      <h2 class="dh-index-title">Newsletter</h2>
                  </article>
                  <router-link  tag="a" :to="'/newsroom/newsletter'">
                    <figure>
                      <img class="dh-newproduct-img" src="../../assets/images/dh-newsletter-img.png" alt="" />
                      <figcaption>
                          <p>Sign up for dahua newsletter</p>
                      </figcaption>
                    </figure>
                  </router-link>
              </section>
              <section class="dh-index-wrapper dh-events-wrapper">
                  <article class="dh-index-title-box dh-spe">
                      <h2 class="dh-index-title">News & Events</h2>
                  </article>
                  <ul class="dh-events-main">
                    <li class="dh-events-list" v-for="item in newsEvent.data" v-if="newsEvent">
                      <router-link  tag="a" :to="'/newsroom/pressReleaseDetail/' + item.id" class="dh-event-link">
                        <time>[{{item.post_date}}]</time>
                        <p>{{item.name}}</p>
                      </router-link>
                    </li>
                    <li class="dh-events-more">
                      <router-link  tag="a" :to="'/newsroom/pressRelease'" class="dh-index-morebtn">
                        View all news
                      </router-link>
                    </li>
                  </ul>
              </section>
              <section class="dh-index-wrapper dh-stoty-wrapper">
                  <article class="dh-index-title-box dh-spe">
                      <h2 class="dh-index-title">Success Stories</h2>
                  </article>
                  <article>
                    <figure>
                      <img class="dh-width-fluid" src="../../assets/images/dh-story-img.png" alt="" />
                      <figcaption v-if="storyList">
                        <h3>{{storyList.data.name}}</h3>
                        <p>{{storyList.data.messages_e}} …</p>
                        <div class="dh-stoty-more">
                          <router-link  tag="a" :to="'/newsroom/successStoryDetail/' + storyList.data.id" class="dh-index-morebtn">
                            Read the full story
                          </router-link>
                        </div>
                      </figcaption>
                    </figure>
                  </article>
              </section>
          </div>
          <loading></loading>
          <footer-part></footer-part>
        </div>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'
import { Swiper } from 'vux'

import { mapState } from 'vuex'

import { mapGetters } from 'vuex'
export default {
    data(){
        return{
        }
    },
    components: {
        headTop,
        Swiper,
        footerPart
    },
    computed: {
      ...mapGetters([
        'newsEvent',
        'newProducts',
        'homeBanner',
        'bannerIndex',
        'storyList'
      ])
    },
    created() {
      if(this.newsEvent.length == 0) this.$store.dispatch('getNewsEvent')
      if(this.newProducts.length == 0) this.$store.dispatch('getNewProducts')
      if(this.homeBanner.length == 0) this.$store.dispatch('getHomeBanner')
      if(this.storyList.length == 0) this.$store.dispatch('getStoryList') 
    },
    methods: {
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-home-container{
      padding-bottom: 25px;
      img{
        display: block;
      }
    }
    .dh-index-swiper{
      &.vux-slider .vux-indicator,
      &.vux-slider .vux-indicator-right{
        left: 0;
        width: 100%;
        text-align: center;
        a {
          margin: 0 3px;
          float: none;
          .vux-icon-dot{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            &.active{
              background-color: @dh-theme-color;
            }
          }
        }
      }
    }
    .dh-index-wrapper{
      margin-top: 24px;
    }
    .dh-newproduct-wrapper{
        padding: 20px 5%;
        background-color: @dh-bg-color;
        .dh-newproduct-img{
          background-color: #fff;
        }
    }
    @dh-index-title: 26px;
    .dh-index-title-box{
      height: @dh-index-title;
      line-height: @dh-index-title;
      margin-bottom: 12px;
      &.dh-spe{
        padding-left: 5%;
      }
    }
    .dh-index-title{
      font-size: 20px;
      color: @dh-font-color;
      font-weight: bold;
    }
    .dh-index-morebtn{
      display: inline-block;
      font-size: 14px;
      height: @dh-index-title;
      line-height: @dh-index-title;
      border-radius: 5px;
      background-color: @dh-theme-color * 1.4;
      color: #fff;
      padding: 0 12px; 
    }
    .dh-newproduct-main{
      overflow: hidden;
    }
    .dh-newproduct-list{
      width: 48%;
      margin-right: 4%;
      float: left;
      margin-top: 15px;
      &:nth-child(2n){
        margin-right: 0;
      }
      &:nth-child(1){
        margin-top: 0;
      }
      &:nth-child(2){
        margin-top: 0;
      }
      .dh-newproduct-img{
        width: 100%;
      }
      figcaption{
        h3, p{
          margin-top: 5px;
        }
        h3{
          color: @dh-theme-color;
          font-size: 15px;
          font-weight: bold;
        }
        p{
          color: @dh-ligth-color;
          font-size: 12px;
        }
      }
    }
    .dh-newletter-wrapper{
      figure{
        background-color: #699320;
        padding: 16px 0;
        text-align: center;
        .dh-newproduct-img{
          width: 70px;
          display: inline-block;
          margin-left: -10px;
        }
        p{
          color: #f1f1f1;
          font-size: 16px;
          margin-top: 6px;
        }
      }
    }
    .dh-events-list{
      border-bottom: solid 1px #fff;
      .dh-event-link{
        display: block;
        padding: 10px 5%;
        background-color: @dh-bg-color;
        time{
          font-size: 13px;
          color: @dh-ligth-color;
        }
        p{
          font-size: 14px;
          margin-top: 3px;
          color: @dh-font-color;
        }
      }
    }
    .dh-events-more{
      text-align: right;
      background-color: @dh-bg-color;
      padding: 16px 5%;
    }
    .dh-stoty-wrapper{
      figcaption{
        background-color: @dh-bg-color;
        padding: 10px 5%;
        h3{
          font-size: 16px;
          font-weight: bold;
          margin-top: 2px;
          color: @dh-ligth-color;
        }
        p{
          font-size: 15px;
          margin-top: 6px;
          color: @dh-ligth-color;
        }
      }
    }
    .dh-stoty-more{
      padding: 15px 0;
      text-align: right;
    }
</style>

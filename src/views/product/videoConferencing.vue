<template>
    <div class="dh-subpage">
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper" v-if="videoConferencing">
            <div class="dh-sub-title">
              <h3>{{videoConferencing.data["Video Conferencing"].name}}</h3>
            </div>
            <article class="dh-video-conferencing">
              <figure>
                <img class="dh-width-fluid" :src="videoConferencing.data['Video Conferencing'].video_conferencing_img">
                <div class="dh-content1 dh-container">
                  <span>{{videoConferencing.data["Video Conferencing"].firstLetter}}</span>
                  <p>{{videoConferencing.data["Video Conferencing"].lastString}}</p>
                </div>
              </figure>
            </article>
            <div class="dh-video-conferencing dh-container">
              <h3 class="dh-conferencing-title">
                <span class="dh-title-icon"></span>Products
              </h3>
              <div class="dh-product-item" v-for="(item, index) in videoConferencing.data.Products">
                <h4 class="dh-product-title" :id="'#' + item.id">{{item.name}}</h4>
                <ul class="dh-product-subitem">
                  <li class="dh-product-sublist" v-for="(item, index) in item.product_list">
                    <router-link tag='a' :to='"/product/productDetail/" + item.id'>
                      <figure>
                        <div class="dh-product-pic">
                          <img :src="item.pro_thumb" alt="" />
                        </div>
                        <div class="dh-product-text">
                          <h3>{{item.name}}</h3>
                        </div>
                      </figure>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="dh-video-conferencing dh-container">
              <h3 class="dh-conferencing-title">
                <span class="dh-title-icon"></span>Related Solutions
              </h3>
              <ul class="dh-related-item">
                <li class="dh-related-list" v-for="(item, index) in videoConferencing.data['Related Solutions']">
                  <figure>
                    <div class="dh-related-pic">
                      <img class="dh-width-fluid" :src="item.video_conferencing_img" alt="" />
                    </div>
                    <div class="dh-related-text">
                      <h3>{{item.name}}</h3>
                      <p>{{item.messages_e}}</p>
                    </div>
                  </figure>
                </li>
              </ul>
            </div>
          </section>
          <footer-part></footer-part>
        </div>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
        }
    },
    components: {
        headTop,
        footerPart
    },
    computed: {
      ...mapGetters([
        'videoConferencing'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getVideoConferencing')
      },
      scrollToHash (hash) {
        let setTimer = setInterval( () => {
          if(this.videoConferencing){
            let objNode = document.getElementById(hash)
            if(!objNode) return 
            let scrollTop = objNode.offsetTop
            document.body.scrollTop = scrollTop - 62
            clearInterval(setTimer)
          }
        },10)
      }
    },
    mounted () {
      this.$nextTick( () => {
        this.scrollToHash(this.$route.hash)
     })
    },
    watch: {
      '$route' (to, from) {
        this.scrollToHash(this.$route.hash)
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-video-conferencing{
      margin-bottom: 20px;
      .dh-content1{
        color: #606060;
        margin-top: 10px;
        span{
          float: left;
          font-size: 44px;
          line-height: 40px;
          margin-right: 8px;
        }
        p{
          text-align: justify;
        }
      }
      .dh-product-title{
        color: #0e5fae;
        margin-top: 8px;
      }
      .dh-product-subitem{
        overflow: hidden;
      }
      .dh-product-sublist{
        float: left;
        width: 48%;
        margin-right: 4%;
        margin-bottom: 5px;
        &:nth-child(2n){
          margin-right: 0;
        }
        .dh-product-pic{
          position: relative;
          text-align: center;
          margin-top: 10px;
          overflow: hidden;
          &:before{
            content: "";
            display: block;
            width: 100%;
            height: 50%;
            background-color: #f6f6f6;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
          }
          img{
            max-width: 80%;
            margin: -10px auto;
          }
        }
        .dh-product-text{
          h3{
            font-size: 16px;
            text-align: center;
            border: solid 1px #ebedef;
            color: #606060;
            padding: 6px 0;
          }
        }
      }
    }
    .dh-conferencing-title{
      font-size: 18px;
      color: #333;
      font-weight: bold;
      span{
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #0e5fae;
        margin-right: 8px;
      }
    }
    .dh-related-item{
      .dh-related-list{
        margin-top: 12px;
        padding-bottom: 6px;
        .dh-related-text{
          color: #606060;
          text-align: center;
          width: 90%;
          margin: -50px auto 0;
          padding: 15px;
          background-color: #fff;
          position: relative;
          border: 1px solid;
          border-image: linear-gradient( #fff, #eaecee) 30 30;
          h3{
            font-size: 18px;
            font-weight: 500;
          }
          p{
            margin-top: 8px;
          }
        }
      }
      
    }
</style>

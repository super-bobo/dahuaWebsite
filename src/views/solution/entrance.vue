<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper" v-if="entrance">
            <div class="dh-sub-title">
              <h3>{{entrance.data.solution_area_info.title}}</h3>
            </div>
            <div class="dh-entrance dh-container">
              <ul class="dh-area-content">
                <li v-for="item in entrance.data.solution_area_info.content">
                  <img class="dh-width-fluid" :src="item.image">
                  <div v-html="item.content"></div>
                </li>
              </ul>
              <section class="dh-showcase">
                <h3>Product Showcase</h3>
                <ul>
                  <li v-for="item in entrance.data.product_list">
                  <router-link tag="a" :to='"/product/productDetail/" + item.id'>
                      <flexbox :gutter="0" wrap="wrap">
                        <flexbox-item :span="2/3">
                          <div class="dh-product-text">
                            <h4>{{item.name}}</h4>
                            <p>{{item.text}}</p>
                          </div>
                        </flexbox-item>
                        <flexbox-item :span="1/3">
                          <div class="dh-imgbox">
                            <img class="dh-width-fluid" :src="item.pro_thumb">
                          </div>
                        </flexbox-item>
                      </flexbox>
                    </router-link>
                  </li>
                </ul>
              </section>
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
        }
    },
    components: {
        headTop,
        footerPart,
        Flexbox,
        FlexboxItem
    },
    computed: {
      ...mapGetters([
        'entrance'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getEntrance', {
          bankId: this.$route.params.bankId,
          entranceId: this.$route.params.entranceId,
        })
      }
    },
    watch: {
      '$route' (to, from) {
        this.getStatus()
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-entrance-wrapper{
      margin-bottom: 20px;
    }
    .dh-area-content{
      >li{
        margin-top: 20px;
        img{
          display: block;
        }
        div{
          color: #606060;
          font-size: 14px;
          background-color: @dh-bg-color;
          padding: 8px 12px;
        }
      }
    }
    .dh-showcase{
      margin-top: 20px;
      >h3{
        font-weight: bold;
        font-size: 18px;
        color: #606060;
      }
      li{
        margin-top: 12px;
        background-color: @dh-bg-color;
        padding: 0 12px;
        h4,p{
          color: #606060;
        }
        h4{
          font-size: 16px;
        }
        p{
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
</style>

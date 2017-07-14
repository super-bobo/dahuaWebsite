<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div v-show="isSecondPage">
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-product-wrapper">
              <div class="dh-sub-title">
                <h3>newsroom</h3>
              </div>
              <ul class="dh-container dh-product-item" v-if="newsroom">
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='"/newsroom/eventsList"'>
                    <figure>
                      <img class="dh-width-fluid" :src="newsroom.data['Events']" alt="" />
                      <p>Events</p>
                    </figure>
                  </router-link>
                </li>
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='"/newsroom/newsLetter"'>
                    <figure>
                      <img class="dh-width-fluid" :src="newsroom.data['Newsletter']" alt="" />
                      <p>Newsletter</p>
                    </figure>
                  </router-link>
                </li>
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='"/newsroom/pressRelease"'>
                    <figure>
                      <img class="dh-width-fluid" :src="newsroom.data['Press Release']" alt="" />
                      <p>Press Release</p>
                    </figure>
                  </router-link>
                </li>
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='"/newsroom/successStory"'>
                    <figure>
                      <img class="dh-width-fluid" :src="newsroom.data['Success Stories']" alt="" />
                      <p>Success Stories</p>
                    </figure>
                  </router-link>
                </li>
              </ul>
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


import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          isSecondPage: true
        }
    },
    components: {
        headTop,
        footerPart
    },
    computed: {
      ...mapGetters([
        'newsroom'
      ])
    },
    created () {
     this.getStatus(this.$route.path)
     this.$store.dispatch('getNewsroom')
    },
    methods: {
      getStatus (url) {
        const urlStr = url.split('/')
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
    .dh-product-item{
      margin-top: 18px;
      .dh-allproduct-list{
        margin-bottom: 18px;
        img{
          display: block;
        }
        p{
          background-color: #eaecee;
          font-size: 18px;
          height: 35px;
          line-height: 35px;
          padding-left: 16px;
          color: @dh-font-color;
        }
      }
    }
</style>

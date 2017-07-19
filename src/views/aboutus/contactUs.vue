<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Contact Us</h3>
              </div>
              <div class="dh-contactus">
                <section class="dh-content" v-html="contactUs.data.content" v-if="contactUs"></section>
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
        'contactUs'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getContactUs')
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
      .dh-contactus{
      }
      .dh-content{
        margin-top: 12px;
        >P{
          margin: 0 10px;
        }
        *{
          color: #606060;
          font-size: 15px!important;
        }
        .sideMenu{
          margin-top: 20px;
          word-break: break-all;
          td{
            width: auto;
          }
          h3{
            margin: 0 10px;
          }
        }
        img{
          max-width: 100%;
          min-width: 120px;
          height: auto;
        }
      }
</style>

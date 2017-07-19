<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Newsletter</h3>
              </div>
              <div class="dh-newsletter dh-container">
                <flexbox :gutter="0" wrap="wrap">
                  <flexbox-item :span="1/3" v-for="(item, index) in newsletter.data" :key="index" if="newsletter">
                    <a :href="item.images_url" class="dh-newsletter-link">
                      <img :src="item.images_src" class="dh-width-fluid">
                    </a>
                  </flexbox-item>
                </flexbox>
              </div>
            </section>
            <footer-part></footer-part>
          </div>
        </div>
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
        'newsletter'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getNewsletter')
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
    .dh-newsletter{
      margin: 12px 0 15px;
    }
    .dh-newsletter-link{
      display: block;
      margin: 5px;
      img{
        display: block;
      }
    }
</style>

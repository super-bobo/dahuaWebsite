<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-product-wrapper">
            <div class="dh-sub-title">
              <h3>NVR (IPC Support List)</h3>
            </div>
            <div class="dh-partner dh-supportlist">
              <flexbox :gutter="0" wrap="wrap" align="flex-start">
                <flexbox-item :span="1/3" :key="index" v-for="(item, index) in IPCSupportList.data" v-if="IPCSupportList">
                  <!-- <router-link tag="a" :to='"/IPCSupportList/" + item.id'> -->
                    <figure>
                      <img :src="item.image" class="dh-width-fluid">
                      <p>{{item.name}}</p>
                    </figure>
                  <!-- </router-link> -->
                </flexbox-item>
              </flexbox>
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
        'IPCSupportList'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getIPCSupportList')
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-supportlist{
      margin-top: 18px;
      margin-bottom: 10px;
      .vux-flexbox-item{
        margin-bottom: 24px;
        border-right: solid 1px #eaecee;
      }
      figure{
        margin: 5px 20px;
        p{
          font-size: 12px;
          color: #606060;
          text-align: center;
        }
      }
    }
</style>

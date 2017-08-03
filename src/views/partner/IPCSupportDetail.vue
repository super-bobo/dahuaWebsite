<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller" v-if="IPCSupportDetail">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title">
              <h3>{{IPCSupportDetail.data.name}}</h3>
            </div>
            <div class="dh-partner dh-supportlist">
              <flexbox :gutter="0" wrap="wrap" align="flex-start">
                <flexbox-item :span="1/4" :key="index" v-for="(item, index) in IPCSupportDetail.data.partnerMenu">
                  <router-link tag="a" :to='"/IPCSupportDetail/" + item.id'>
                    <figure>
                      <img :src="item.image" class="dh-width-fluid">
                    </figure>
                  </router-link>
                </flexbox-item>
              </flexbox>
            </div>
            <div class="dh-supportdetail">
              <h3 class="dh-title dh-container">{{IPCSupportDetail.data.partnerName}}</h3>
              <div class="dh-supportdetail-box">
                <table class="dh-table" cellpadding="0" cellspacing="0">
                  <tr>
                    <th v-for="(item, index) in supportTableTitle">{{item}}</th>
                  </tr>
                  <tr v-for="(item, index) in IPCSupportDetail.data.partner">
                    <td v-for="(subitem, subindex) in item.message">{{subitem}}</td>
                  </tr>
                </table>
              </div>
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
          supportTableTitle: ['Model', 'IP Search', 'Codec', 'Audio/Video', 'Auto Connect', 'Encode', 'Motion', 'Alarm', 'PTZ', 'Protocol', 'Camera firwmare'],
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
        'IPCSupportDetail'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getIPCSupportDetail', this.$route.params.IPCSupportId)
      },
      reload () {
        window.location.reload();
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
    .dh-supportlist{
      margin-top: 18px;
      margin-bottom: 20px;
      .vux-flexbox-item{
        margin-bottom: 12px;
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
    .dh-supportdetail{
      margin-bottom: 20px;
      .dh-title{
        color: @dh-theme-color;
        font-weight: 500;
      }
      .dh-supportdetail-box{
        width: 100%;
        overflow-x: auto;
      }
      .dh-table{
        margin-top: 6px;
        text-align: center;
        th,td{
          white-space: nowrap;
          padding: 8px 12px;
        }
        th{
          background-color: #a8ddf8;
          
          color: #404040;
          font-size: 14px;
        }
        td{
          font-size: 13px;
          color: #606060;
          border-bottom: dashed 1px #ccc;
        }
      }
    }
</style>

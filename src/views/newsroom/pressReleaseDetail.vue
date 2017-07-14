<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div v-show="isSecondPage">
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-product-wrapper">
              <div class="dh-sub-title">
                <h3>press release</h3>
              </div>
              <div class="dh-container dh-success-storyDetail" v-if="pressReleaseDetail">
                <section class="dh-content-top">
                  <h3>{{pressReleaseDetail.data.name}}</h3>
                  <span>Times：{{pressReleaseDetail.data.post_date}}</span>&nbsp;&nbsp;<span>Browse：{{pressReleaseDetail.data.hits}}</span>
                </section>
                <section class="dh-content" v-html="pressReleaseDetail.data.message"></section>
                <section class="dh-content-bottom">
                  <button class="dh-back-btn" onclick="window.history.go(-1)">Back</button>
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
          isSecondPage: true
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
        'pressReleaseDetail'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getPressReleaseDetail', this.$route.params.pressReleaseId)
      }
    },
    watch: {
      '$route' (to, from) {
      //刷新参数放到这里触发刷新相同界面
        this.getStatus()
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-success-storyDetail{
      .dh-content-top{
        border-bottom: dashed 1px #eaecee;
        padding: 16px 0 10px;
        h3{
          font-size: 16px;
          color: #0e5fae;
          font-weight: bold;
        }
        span{
          color: #606060;
          font-size: 12px;
          margin-top: 8px;
        }
      }
      .dh-content{
        margin-top: 10px;
        *{
          color: #606060;
          font-size: 15px;
        }
        img{
          max-width: 100%;
        }
      }
      .dh-content-bottom{
        margin:10px 0 20px;
        text-align: right;
        .dh-back-btn{
          font-size: 15px;
          color: #fff;
          background-color: #0e5fae;
          border-radius: 5px;
          height: 30px;
          padding: 0 12px;
        }
      }
    }
</style>

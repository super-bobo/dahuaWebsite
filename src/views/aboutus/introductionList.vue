<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper" v-if="introductionList">
              <div class="dh-sub-title">
                <h3>{{introductionList.data.name}}</h3>
              </div>
              <div class="dh-container dh-success-storyDetail">
                <section class="dh-content" v-if="introductionList.data.m_content != ''" v-html="introductionList.data.m_content"></section>
                <section class="dh-content" v-else v-html="introductionList.data.content"></section>
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
        'introductionList'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getIntroductionList', this.$route.params.introductionKeyWord)
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
      .dh-content{
        margin-top: 12px;
        *{
          color: #606060;
          font-size: 15px!important;
        }
        img{
          max-width: 100%;
          min-width: 120px;
        }
      }
    }
</style>

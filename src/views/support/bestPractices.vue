<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Vulnerability Reporting</h3>
              </div>
              <div class="dh-container dh-bestPractices">
                <section v-html="bestPractices.data.content" v-if="bestPractices"></section>
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
        'bestPractices'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getBestPractices')
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-bestPractices{
      margin-top: 20px;
      color: #606060;
      *{
        text-align: left!important;
      }
    }
</style>

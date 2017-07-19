<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title" v-if="annoucementDetail">
                <h3>{{annoucementDetail.data.name}}</h3>
              </div>
              <div class="dh-container dh-annoucementDetail" v-if="annoucementDetail">
                <section v-html="annoucementDetail.data.message"></section>
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
        'annoucementDetail'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getAnnoucementDetail', this.$route.params.annoucementId)
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-annoucementDetail{
      color: #606060;
      *{
        text-align: left!important;
      }
    }
</style>

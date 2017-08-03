<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Annoucement/Notice</h3>
              </div>
              <div class="dh-container dh-annoucementDetail" v-if="annoucementDetail">
                <section class="dh-content-top">
                  <h3>{{annoucementDetail.data.name}}</h3>
                </section>
                <section class="dh-content" v-html="annoucementDetail.data.message"></section>
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

<style lang="less">
    @import '../../assets/styles/common';
    .dh-annoucementDetail{
      color: #606060;
      .dh-content-top{
        border-bottom: dashed 1px #eaecee;
        padding: 16px 0 10px;
        h3{
          font-size: 16px;
          color: #0e5fae;
          font-weight: bold;
        }
      }
      .dh-content{
        margin-top: 10px;
        *{
          text-align: left!important;
        }
        table{
          max-width: 100%;
          table-layout: fixed;
        }
      }
    }
</style>

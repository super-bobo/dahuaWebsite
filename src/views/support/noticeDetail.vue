<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Notice</h3>
              </div>
              <div class="dh-container dh-noticeDetail" v-if="noticeDetail">
                <section class="dh-content-top">
                  <h3>{{noticeDetail.data.name}}</h3>
                </section>
                <section class="dh-content" v-html="noticeDetail.data.message"></section>
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
        'noticeDetail'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getNoticeDetail', this.$route.params.noticeId)
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-noticeDetail{
      color: #606060;
      *{
        text-align: left!important;
      }
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
        table{
          max-width: 100%!important;
          table-layout: fixed;
          td{
            width: auto;
          }
        }
      }
    }
</style>

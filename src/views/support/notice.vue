<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title" v-if="notice">
                <h3>Notice</h3>
              </div>
              <div class="dh-notice">
                <ul class="dh-notice-item" v-if="notice">
                  <router-link tag="li" :to="'/noticeDetail/' + item.id" class="dh-notice-list dh-elip dh-container" v-for="(item, index) in notice.data" :key="index">
                    <i class="fa fa-caret-right" aria-hidden="true"></i> <span>{{item.name}}</span>
                  </router-link>
                </ul>
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
        'notice'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getNotice')
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-notice{
      margin: 20px 0;
      color: #606060;
    }
    .dh-notice-item{
      border-top: solid 2px #eaecee;
    }
    .dh-notice-list{
      border-bottom: solid 1px #eaecee;
      padding-top: 8px;
      padding-bottom: 8px;
      color: #606060;
      i{
        margin-right: 3px;
      }
    }
</style>

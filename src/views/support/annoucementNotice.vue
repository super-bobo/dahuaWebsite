<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title" v-if="annoucement">
                <h3>{{annoucement.data.name}}</h3>
              </div>
              <div class="dh-annoucement">
                <ul class="dh-annoucement-item" v-if="annoucement">
                  <router-link tag="li" :to="'/annoucementDetail/' + item.id" class="dh-annoucement-list dh-elip dh-container" v-for="(item, index) in annoucement.data.annoucementList" :key="index">
                    <i class="fa fa-caret-right" aria-hidden="true"></i> <span>{{item.name}}</span>
                  </router-link>
                </ul>
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
        'annoucement'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getAnnoucement')
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-annoucement{
      margin: 20px 0;
      color: #606060;
    }
    .dh-annoucement-item{
      border-top: solid 2px #eaecee;
    }
    .dh-annoucement-list{
      border-bottom: solid 1px #eaecee;
      padding-top: 8px;
      padding-bottom: 8px;
      color: #606060;
      i{
        margin-right: 3px;
      }
    }
</style>

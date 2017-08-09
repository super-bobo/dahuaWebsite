<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title" v-if="cybersecurityList">
                <h3>{{cybersecurityList.data.name}}</h3>
              </div>
              <div class="dh-container dh-cybersecurityList" v-if="cybersecurityList">
                <section v-if="cybersecurityList.data.m_content != ''" v-html="cybersecurityList.data.m_content"></section>
                <section v-else v-html="cybersecurityList.data.content"></section>
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
        'cybersecurityList'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getCybersecurityList', this.$route.params.cybersecurityKeyword)
      }
    },
    watch: {
      '$route' (to, from) {//监听路由变化
        this.getStatus()
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-cybersecurityList{
      margin: 20px 0;
      color: #606060;
      *{
        text-align: left!important;
      }
      img{
        max-width: 100%;
        height: auto; 
      }
    }
</style>

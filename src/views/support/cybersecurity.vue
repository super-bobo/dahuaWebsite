<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Cybersecurity</h3>
              </div>
              <div class="dh-container dh-cybersecurity">
                <section v-html="cybersecurity.data.content" v-if="cybersecurity"></section>
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
        'cybersecurity'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getCybersecurity')
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-cybersecurity{
      margin: 10px 0 20px;
      color: #606060;
    }
</style>

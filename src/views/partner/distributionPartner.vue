<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title">
              <h3>Distribution Partner</h3>
            </div>
            <div class="dh-distribution-partner">
              <img :src="distributionPartner.data.menu.image" class="dh-width-fluid" v-if="distributionPartner">
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
        'distributionPartner'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getDistributionPartner', 2)
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-distribution-partner{
      margin-top: 20px;
      margin-bottom: 20px;
    }
</style>

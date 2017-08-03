<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>success stories</h3>
              </div>
              <ul class="dh-container dh-product-item">
                <li class="dh-allproduct-list" v-for="(item, index) in successStory.data" v-if="successStory">
                  <router-link tag='a' :to='"/newsroom/successStoryList/" + item.id'>
                    <figure>
                      <img class="dh-width-fluid" :src="item.menu_image" alt="" />
                      <p>{{item.name}}</p>
                    </figure>
                  </router-link>
                </li>
              </ul>
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
        'successStory'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getSuccessStory')
      }
    },
    watch: {
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-product-item{
      margin-top: 18px;
      .dh-allproduct-list{
        margin-bottom: 18px;
        img{
          display: block;
        }
        p{
          background-color: #eaecee;
          font-size: 18px;
          height: 35px;
          line-height: 35px;
          padding-left: 16px;
          color: @dh-font-color;
        }
      }
    }
</style>

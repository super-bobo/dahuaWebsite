<template>
  	<div class="dh-subpage">
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title" v-if="thirProducts">
              <h3>{{thirProducts.data.name}}</h3>
            </div>
            <ul class="dh-container dh-product-item" v-if="thirProducts">
              <li class="dh-product-list" v-for="(item, index) in thirProducts.data.menuList">
                <router-link tag='a' :to='"/product/productList/" + item.id'>
                  <figure>
                    <div class="dh-product-pic">
                      <img :src="item.mobile_image" alt="" />
                    </div>
                    <div class="dh-product-text">
                      <h3>{{item.name}}</h3>
                    </div>
                  </figure>
                </router-link>
              </li>
            </ul>
          </section>
          <footer-part></footer-part>
        </div>
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
        'thirProducts'
      ])
    },
    created () {
      this.getStatus()

    },
    methods: {
      getStatus () {
        this.$store.dispatch('getThirProducts', this.$route.params.productId)
      }
    },
    watch: {
      '$route' (to, from) {
        this.getStatus()
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-product-item{
      margin-top: 18px;
      .dh-product-list{
        margin-bottom: 18px;
        img{
          display: block;
        }
        .dh-product-pic{
          border: solid 1px @dh-bg-color;
          text-align: center;
          padding: 12px 0;
          img{
            max-height: 110px;
            margin: 0 auto;
          }
        }
        .dh-product-text{
          background-color: #eaecee;
          padding: 10px 16px;
          h3{
            font-size: 18px;
            color: #1570a6;
          }
        }
      }
    }
</style>

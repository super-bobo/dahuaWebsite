<template>
  	<div class="dh-subpage">
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title" v-if="newProductList">
              <h3>{{newProductList.data.name}}</h3>
            </div>
            <ul class="dh-container dh-product-item">
              <li class="dh-product-select-enter">
                <router-link tag="a" :to='"/product/productDetail/"'>
                  <div class="dh-toptitle">
                    <h3>Product Selector</h3>
                    <p>Use one of the options below to locate your desired
  product.</p>
                  </div>
                  <div class="dh-img">
                    <img class="dh-width-fluid" src="../../assets/images/dh-selectproduct-img.png">
                  </div>
                </router-link>
              </li>
              <template v-if="newProductList">
                <li class="dh-product-list dh-newproduct" v-for="(item, index) in newProductList.data.product" v-if="index < dateCount.listCount">
                  <router-link tag='a' :to='"/product/productDetail/" + item.id'>
                    <figure>
                      <div class="dh-product-pic">
                        <img :src="item.pro_thumb" alt="" />
                      </div>
                      <div class="dh-product-text">
                        <h3>{{item.name}}</h3>
                        <p>{{item.text}}</p>
                      </div>
                    </figure>
                  </router-link>
                </li>
              </template>
            </ul>
            <load-more :dateCount="dateCount"></load-more>
          </section>
          
          <footer-part></footer-part>
        </div>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'
import loadMore from '@/components/common/loadMore'

import { mapGetters } from 'vuex'

export default {
    data(){
      return{
        dateCount: {
          listCount: 8,
          totalCount: ''
        },
      }
    },
    components: {
        headTop,
        footerPart,
        loadMore
    },
    computed: {
      ...mapGetters([
        'newProductList'
      ])
    },
    created () {
      this.$store.dispatch('getNewProductList')
    },
    mounted () {
      this.$nextTick( () => {
       let timer = setInterval( () => {
        if(this.newProductList){
          console.log(this.newProductList.data.product.length)
          this.dateCount.totalCount = this.newProductList.data.product.length
          clearInterval(timer)
        }
      }, 100)
     })
    },
    methods: {
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-product-item{
      margin-top: 18px;
      .dh-product-list{
        margin-bottom: 18px;
        &.dh-newproduct{
          background: url(../../assets/images/dh-newproducts-icon.png) 0 0 no-repeat;
          background-size: 65px;
        }
        img{
          display: block;
        }
        .dh-product-pic{
          border: solid 1px @dh-bg-color;
          text-align: center;
          padding: 20px 0;
          img{
            height: 110px;
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
          p{
            font-size: 15px;
            color: #606060;
          }
        }
      }
    }
    .dh-product-select-enter{
      background-image:-webkit-linear-gradient(-120deg, #fabb43, #f67d12); 
      background-image:linear-gradient(-120deg, #fabb43, #f67d12);
      padding: 16px;
      margin-bottom: 18px;
      .dh-toptitle{
        padding-left: 30px;
        background: url(../../assets/images/dh-selectproduct-icon.png) 0 5px no-repeat;
        background-size: 21px 17px;
        color: #fff;
        h3{
          font-size: 18px;
          line-height: 28px;
          border-bottom: solid 1px #fff;
        }
        p{
          font-size: 14px;
          margin-top: 8px;
        }
      }
      .dh-img{
        padding: 10px 16px 0;
      }
    }
</style>

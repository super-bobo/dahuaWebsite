<template>
    <div class="dh-subpage">
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-list-wrapper" ref="dh_list_height">
            <load-more :dateCount="dateCount">
              <div slot="content">
                <div class="dh-sub-title">
                  <h3 v-if="productList">{{productList.data.name}}</h3>
                </div>
                <ul class="dh-container dh-product-item" v-if="productList">
                  <li class="dh-product-select-enter">
                    <router-link tag="a" :to='"/product/productSelect/"+listId'>
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
                  <li class="dh-product-list" v-for="(item, index) in productList.data.product" v-if="index < dateCount.listCount">
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
                </ul>
              </div>
            </load-more>
          </section>
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
          listId: '',
          dateCount: {
            listCount: 0,
            totalCount: '',
            listHeight: ''
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
        'productList'
      ])
    },
    created () {
      this.listId = this.$route.params.productId
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getProductList', this.$route.params.productId)
      },
      setTotalCount () {
        this.$nextTick( () => {
          let timer = setInterval( () => {
            if(this.productList){
              console.log(this.productList.data)
              this.dateCount.totalCount = !this.productList.data ? 0 : this.productList.data.product.length
              clearInterval(timer)
            }
          }, 100)
        })
      },
      pushListHeight () {
        this.dateCount.listHeight = this.$refs.dh_list_height.clientHeight
        console.log(this.dateCount.listHeight)
      },
      reload () {
        window.location.reload();
      }
    },
    mounted () {
      this.$nextTick( () => {
       this.setTotalCount()
       this.pushListHeight()
     })
    },
    watch: {
      '$route' (to, from) {
        this.reload()
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
          p{
            font-size: 15px;
            color: #606060;
          }
        }
      }
    }
    .dh-product-select-enter{
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

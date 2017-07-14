<template>
  	<div class="dh-subpage">
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-product-detail-wrapper" v-if="productDetail">
            <div class="dh-product-topdetail">
              <div class="dh-productleft">
                <div class="dh-imgbox"><img class="dh-width-fluid" :src="productDetail.data.pro_img" /></div>
              </div>
              <div class="dh-productright">
                <section class="dh-toptitle">
                  <h3>{{productDetail.data.name}}</h3>
                  <h4>{{productDetail.data.text}}</h4>
                </section>
                <section class="dh-content">
                  <div class="dh-content-description" v-html="productDetail.data.description"></div>
                </section>
              </div>
            </div>
          </section>
          <div>
            <tab class="dh-onetab" :line-width="0" v-model="onetabindex">
              <tab-item active-class="dh-active" :selected="onetabindex === index" v-for="(item, index) in onetablist" @click="onetabindex = index" :key="index">{{item}}</tab-item>
            </tab>
            <section class="dh-oneswiper">
              <div class="dh-oneswiper-item" :style="{marginLeft: '-'+onetabindex+'00%'}">
                <flexbox :gutter="0" wrap="wrap" v-if="productDetail">
                  <flexbox-item :span="1/3">
                    <div  v-if="onetabindex == 0" class="dh-product-swiper dh-technocal" v-html="productDetail.data.technical"></div>
                  </flexbox-item>
                  <flexbox-item :span="1/3">
                    <div  v-if="onetabindex == 1" class="dh-product-swiper dh-oneswiper-list2">
                      <flexbox :gutter="0" wrap="wrap">
                        <flexbox-item :span="1/2" :key="index" v-for="(item, index) in productDetail.data.product_related_info">
                          <flexbox :gutter="0" wrap="wrap" class="dh-oneswiper-subpart">
                            <flexbox-item :span="1/4">
                              <img class="dh-width-fluid" :src="item.pro_thumb">
                            </flexbox-item>
                            <flexbox-item :span="3/4">
                              <h3>{{item.name}}</h3>
                              <p>{{item.menu_name}}</p>
                            </flexbox-item>
                          </flexbox>
                        </flexbox-item>
                      </flexbox>
                    </div>
                  </flexbox-item>
                  <flexbox-item :span="1/3">
                    <div  v-if="onetabindex == 2" class="dh-product-swiper">
                      <section class="dh-twotab">
                        <ul class="dh-twotab-title">
                          <li :class="{active: twotabindex == index}" @click="twotabindex = index" v-for="(item, index) in twotablist">{{item}}</li>
                        </ul>
                        <div class="dh-twotab-content">
                          <ul class="dh-twotab-item" :style="{marginLeft: '-'+twotabindex+'00%'}">
                            <li class="dh-twotab-list" v-for="(itemtwo, indextwo) in twotablist">
                              <div>
                                <table class="dh-twotab-table" cellpadding="0" cellspacing="0">
                                  <colgroup>
                                    <col width="22%">
                                    <col width="22%">
                                    <col>
                                    <col width="22%">
                                  </colgroup>
                                <tr>
                                    <th v-for="(item, index) in tablelist">{{item}}</th>
                                  </tr>
                                  <template v-if="twotabindex == indextwo">
                                    <template  v-for="(item, index) in productDetail.data.product_download_info" v-if="productDetail">
                                      <tr v-if="item.category_id == (indextwo + 1)">
                                        <td>{{itemtwo}}</td>
                                        <td>{{item.post_date}}</td>
                                        <td>{{item.name}}</td>
                                        <td align="center">
                                          <a :href="'http://www.dahuasecurity.com/download/'+item.keywords" target="_blank">
                                            <img v-if="item.extension == 'pdf'" src="../../assets/images/dh-product-pdf.png" :alt="item.extension">
                                            <img v-else src="../../assets/images/dh-product-docx.png" :alt="item.extension">
                                          </a>
                                        </td>
                                      </tr>
                                    </template>
                                  </template>
                                </table>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </flexbox-item>
                </flexbox>
              </div>
            </section>
          </div>
          <footer-part></footer-part>
        </div>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'
import { Tab, TabItem, Flexbox, FlexboxItem } from 'vux'
import '@/assets/images/dh-product-pdf.png'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
           onetablist: ['Specifications', 'Accessories', 'Download'],
           onetabindex: 0,
           twotablist: ['Datasheet', 'User Manual', 'Drawings', 'A&E Document'],
           //tablelist: ['Class', 'Date', 'Title', 'Language', 'Type', 'Download'],
           tablelist: ['Class', 'Date', 'Title', 'Download'],
           twotabindex: 0,
        }
    },
    components: {
        headTop,
        footerPart,
        Tab, 
        TabItem,
        Flexbox,
        FlexboxItem
    },
    computed: {
      ...mapGetters([
        'productDetail'
      ])
    },
    created () {
      console.log(this.$route.params.productId);
      this.$store.dispatch('getProductDetail', this.$route.params.productId)
        
    },
    mounted(){
      
      this.$nextTick(() => {

        })
    },
    methods: {
    },
    watch: {
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-product-topdetail{
        border-top: 2px solid @dh-bg-color;
        width: 100%;
        padding: 12px 0;
        background-color: #fff;
        display: table;
        table-layout: fixed;
        .dh-productleft,
        .dh-productright{
          display: table-cell;
          vertical-align: top;
        }
        .dh-productleft{
          width: 30%;
          .dh-imgbox{
            margin: 0 10%;
          }
        }
        .dh-productright{
          padding-right: 12px;
          .dh-toptitle{
            h3{
              font-size: 16px;
              color: @dh-font-color;
              margin-bottom: 5px;
              font-weight: bold;
            }
            h4{
              font-size: 15px;
              color: @dh-font-color;
              margin-bottom: 8px;
            }
          }
          .dh-content{
            .dh-content-description{
              font-size: 14px;
              color: #606060;
              word-break: break-all;
              img{
                max-width: 100%
              }
            }
          }
        }
      }
    .vux-tab.dh-onetab{
      background-color: #eaecee;
      .vux-tab-item{
        background: none;
        font-size: 15px;
        border-left: solid 1px #fff!important;
        &:first-child{
          border-left: none!important;
        }
      }
      .dh-active{
        color: #606060!important;
        background-color: #f6f6f6;
      }
    }
    .dh-oneswiper{
      background-color: #fff;
      overflow: hidden;
      margin: 5px 0 15px;
    }
    .dh-oneswiper-item{
      width: 300%;
      display: flex;
      .trandtion-ease();
      .dh-oneswiper-list{
        flex-wrap: 1;
      }
      .dh-technocal{
        .div-drop{
          overflow: auto;
        }
      }
    }
    .dh-oneswiper-subpart{
      padding: 10px;
      h3{
        color: #1570a6;
        font-size: 14px;
      }
      p{
        font-size: 13px;
        color: #707070;
      }
    }
    .dh-twotab{
      .dh-twotab-title{
        margin: 10px 10px 15px;
        border-bottom: solid 1px #034585;
        height: 30px;
        line-height: 30px;
        li{
          float: left;
          color: @dh-font-color;
          font-size: 13px;
          text-align: center;
          white-space: nowrap;
          position: relative;
          &:before{
            content: '';
            display: block;
            height: 12px;
            width: 1px;
            background-color: #eaecee;
            position: absolute;
            top: 10px;
            left: 0;
          }
          &:first-child{
            &:before{
              background-color: transparent;
            }
          }
          &:nth-child(1){
            width: 22%;
          }
          &:nth-child(2){
            width: 26%;
          }
          &:nth-child(3){
            width: 21%;
          }
          &:nth-child(4){
            width: 31%;
          }
          &.active{
            &:after{
              content: '';
              display: block;
              box-sizing: border-box;
              border-top: solid 2px #034585;
              border-left: solid 1px #034585;
              border-right: solid 1px #034585;
              border-bottom: solid 2px #fff;
              position: absolute;
              top: -2px;
              right: -1px;
              left: 0;
              bottom: 0;
              z-index: 2;
            }
          }
        }
      }
    }
    .dh-twotab-content{
      overflow: hidden;
      .dh-twotab-item{
        width: 400%;
        display: flex;
        .trandtion-ease();
      }
      .dh-twotab-list{
        flex-wrap: 1;
      }
    }
    .dh-twotab-table{
      width: 100%;
      table-layout: fixed;
      th, td{
        padding: 8px 5px;
        word-break: break-all;
      }
      th{
        background-color: #c3c5c5;
        font-size: 13px;
        font-weight: normal;
      }
      td{
        font-size: 12px;
        border-bottom: solid 1px #eaecee;
      }
    }
</style>

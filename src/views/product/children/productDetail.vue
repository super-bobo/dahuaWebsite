<template>
  	<div class="dh-subpage">
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-product-detail-wrapper">
            <div class="dh-product-topdetail">
              <div class="dh-productleft">
                <img class="dh-width-fluid" src="../../../assets/images/protect-img.png" />
              </div>
              <div class="dh-productright">
                <section class="dh-toptitle">
                  <h3>IPC-HDBW8331E-Z</h3>
                  <h4>3MP WDR IR Dome Network Camera</h4>
                </section>
                <section class="dh-content">
                  <p>
                    > 1/2.8” 3Megapixel progressive scan STARVIS™ CMOS<br>
                    > H.265&H.264 triple-stream encoding<br>
                    > 50/60fps@3M(2048×1536)<br>
                    > WDR(140dB), Day/Night(ICR), 3DNR,AWB,AGC,BLC<br>
                    > Multiple network monitoring: Web viewer, CMS(DSS/PSS) & DMSS<br>
                    > 2.7mm ~13.5mm motorized lens<br>
                    > Max. IR LEDs Length 50m<br>
                    > Micro SD memory,IP67,IK10,PoE+
                  </p>
                </section>
              </div>
            </div>
          </section>
          <div>
             <tab class="dh-onetab" :line-width="0" v-model="index">
              <tab-item active-class="dh-active" :selected="oneTabTitle === item" v-for="(item, index) in list" @click="oneTabTitle = item" :key="index">{{item}}</tab-item>
            </tab>
            <swiper class="dh-oneswiper" v-model="index"  :show-dots="false">
              <swiper-item :key="0">
                <div class="tab-swiper">
                  0
                </div>
              </swiper-item>
              <swiper-item :key="1">
                <div class="tab-swiper">1</div>
              </swiper-item>
              <swiper-item :key="2">
                <div class="tab-swiper">
                  <section class="dh-twotab">
                    <ul class="dh-twotab-title">
                      <li class="active">Datasheet</li>
                      <li>User Manual</li>
                      <li>Drawings</li>
                      <li>A&E Document</li>
                    </ul>
                    <div class="dh-twotab-content">
                      <ul class="dh-twotab-item">
                        <li class="dh-twotab-list">
                          1
                        </li>
                        <li class="dh-twotab-list">
                          2
                        </li>
                        <li class="dh-twotab-list">
                          3
                        </li>
                        <li class="dh-twotab-list">
                          4
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </swiper-item>
            </swiper>
          </div>
          <footer-part></footer-part>
        </div>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

const onetabList = () => ['Specifications', 'Accessories', 'Download']
export default {
    data(){
        return{
           list: onetabList(),
           oneTabTitle: 'Specifications',
           index: 0,
           twotabindex: 0
        }
    },
    components: {
        headTop,
        footerPart,
        Tab, 
        TabItem, 
        Swiper, 
        SwiperItem
    },
    methods: {
    }
}

</script>

<style lang="less">
    @import '../../../assets/styles/common';
    .dh-product-topdetail{
        border-top: 2px solid @dh-bg-color;
        width: 100%;
        padding: 12px 0;
        background-color: #fff;
        display: table;
        .dh-productleft,
        .dh-productright{
          display: table-cell;
          vertical-align: top;
        }
        .dh-productleft{
          width: 25%;
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
            p{
              font-size: 14px;
              color: #606060;
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
    }
    .dh-twotab{
      .dh-twotab-title{
        margin: 10px 10px 15px;
        
        overflow: hidden;
        li{
          box-sizing: border-box;
          float: left;
          color: @dh-font-color;
          font-size: 13px;
          text-align: center;
          padding: 5px 10px;
          white-space: nowrap;
          margin-bottom: -2px;
          position: relative;
          &:after{
              content: "";
              display: block;
              height: 1px;
              width: 100%;
              background-color: @dh-theme-color;
              position: absolute;
              bottom: 0;
              left: 0;
            }
          &.active{
            border-top: solid 2px @dh-theme-color;
            border-left: solid 1px @dh-theme-color;
            border-right: solid 1px @dh-theme-color;
            &:after{
              background-color: #fff;
            }
          }
        }
      }
    }
    .dh-twotab-content{
      overflow: hidden;
      .dh-twotab-item{
        width: 400%;
        overflow: hidden;
        .trandtion-ease();
        margin-left: 0;
      }
      .dh-twotab-list{
        width: 25%;
        float: left;
      }
    }
</style>

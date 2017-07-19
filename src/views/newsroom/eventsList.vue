<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Events</h3>
              </div>
              <div class="dh-press" if="eventsList">
                <div class="dh-tab dh-container">
                   <tab class="dh-aboutus-tab" :line-width="0" v-model="currentIndex">
                    <tab-item active-class="dh-active" :selected="currentIndex == index" v-for="(item, index) in eventsList.data" :key="index">{{item.name}}</tab-item>
                  </tab>
                </div>
                <ul class="dh-press-item dh-container" v-for="(item, index) in eventsList.data">
                  <template v-if="index == currentIndex">
                    <template v-for="(subitem, subindex) in item.events">
                      <li class="dh-press-list dh-first-events-item" v-if="subindex == 0">
                        <flexbox :gutter="0" wrap="wrap">
                          <flexbox-item :span="1/3">
                            <div class="dh-leftpart">
                              <img class="dh-width-fluid" :src="subitem.image">
                            </div>
                          </flexbox-item>
                          <flexbox-item :span="2/3">
                            <div class="dh-rightpart">
                              <h3>{{subitem.name}}</h3>
                              <p v-html="subitem.description"></p>
                            </div>
                          </flexbox-item>
                        </flexbox>
                      </li>
                      <li class="dh-press-list" v-else>
                        <flexbox :gutter="0" wrap="wrap">
                          <flexbox-item :span="2/5">
                            <div class="dh-leftpart">
                              <img class="dh-width-fluid" :src="subitem.image">
                            </div>
                          </flexbox-item>
                          <flexbox-item :span="3/5">
                            <div class="dh-rightpart">
                              <h3>{{subitem.name}}</h3>
                              <p v-html="subitem.description"></p>
                            </div>
                          </flexbox-item>
                        </flexbox>
                      </li>
                    </template>
                  </template>
                </ul>

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

import { Tab, TabItem, Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          currentIndex: 0
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
        'eventsList'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getEventsList')
      }
    },
    watch: {
      '$route' (to, from) {
      //刷新参数放到这里触发刷新相同界面
        this.getStatus()
      }
    }
}

</script>

<style lang="less">
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
    .dh-tab{
      margin: 18px 0;
    }
    .dh-aboutus-tab{
      border-bottom: solid 1px #034585;
      height: 30px!important;
      &.vux-tab{
        .vux-tab-item{
          border-bottom: 0;
          line-height: 30px;
          color: #606060;
          background: transparent!important;
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
        }
        .vux-tab-selected{
          color: #606060!important;
          &:after{
            content: '';
            display: block;
            box-sizing: border-box;
            height: 33px;
            border-top: solid 2px #034585;
            border-left: solid 1px #034585;
            border-right: solid 1px #034585;
            border-bottom: solid 2px #fff;
            position: absolute;
            top: -2px;
            left: 0;
            right: -1px;
            z-index: 2
          }
        }
      }
    }
    .dh-press-item{
      margin-bottom: 18px;
      .dh-press-list{
        padding: 18px 0;
        border-bottom: dashed 1px #eaecee;
        &:first-child{
          padding-top: 0;
        }
      }
      .dh-leftpart{
        margin-right: 8%;
        padding: 5px;
        border: solid 1px @dh-bg-color;
        img{
         display: block;
        }
      }
      .dh-rightpart{
        padding-left: 12px;
        h3{
          font-weight: bold;
          color: #606060;
          font-size: 13px;
        }
        p{
          font-size: 12px;
          color: @dh-font-color;
          margin-top: 3px;
        }
      }
    }
    .dh-first-events-item{
      .dh-rightpart{
        padding-left: 0;
      }
      .vux-flexbox{
        padding: 8px;
        position: relative;
        background-color: #f1f1f1;
        :after{
          content: "";
          display: block;
          width: 100%;
          height: 16px;
          background: url(../../assets/images/dh-events-bgimg.png) center top no-repeat;
          background-size: 100%;
          position: absolute;
          bottom: -12px;
          left: 0;
        }
      }
    }
</style>

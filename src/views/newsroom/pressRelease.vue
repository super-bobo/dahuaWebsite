<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-list-wrapper" ref="dh_list_height">
              <load-more :dateCount="dateCount">
                <div slot="content">
                  <div class="dh-sub-title">
                    <h3>Press Release</h3>
                  </div>
                  <div class="dh-press">
                    <div class="dh-tab dh-container">
                     <tab class="dh-aboutus-tab" :line-width="0" v-model="currentIndex">
                      <tab-item active-class="dh-active" :selected="currentIndex == index" v-for="(item, index) in getDateYear()" :key="index">{{item}}</tab-item>
                    </tab>
                  </div>          
                  <ul class="dh-press-item dh-container" v-if="pressRelease">
                    <li class="dh-press-list" v-for="(item, index) in pressRelease.data" v-if="index < dateCount.listCount">                   
                      <router-link tag="a" :to='"/newsroom/pressReleaseDetail/" + item.id'>
                        <flexbox :gutter="0" wrap="wrap">
                          <flexbox-item :span="1/3">
                            <div class="dh-leftpart">
                              <img class="dh-width-fluid" :src="item.news_img">
                            </div>
                          </flexbox-item>
                          <flexbox-item :span="2/3">
                            <div class="dh-rightpart">
                              <h3>{{item.name}}</h3>
                              <p class="dh-elip">{{item.messages_e}}</p>
                            </div>
                          </flexbox-item>
                        </flexbox>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </load-more>
          </section>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
import headTop from '@/components/header/'

import loadMore from '@/components/common/loadMore'

import { Tab, TabItem, Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          currentIndex: 0,
          currentDate: 'all',
          dateCount: {
            listCount: 0,
            totalCount: '',
            listHeight: ''
          }
        }
    },
    components: {
        headTop,
        Tab, 
        TabItem,
        Flexbox,
        FlexboxItem,
        loadMore
    },
    computed: {
      ...mapGetters([
        'pressRelease'
      ])
    },
    created () {
      this.getStatus()
    },
    mounted () {
      this.$nextTick( () => {
       this.setTotalCount()
       this.pushListHeight()
     })
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getPressRelease', this.currentDate)
      },
      getDateYear () {
        let date=new Date;
        let year=parseInt(date.getFullYear())
        let dateArr = []
        for(let i = year; i > year - 5; i--){
          dateArr.push(i);
        }
        dateArr.unshift('all')
        return dateArr
      },
      setTotalCount () {
        let timer = setInterval( () => {
          if(this.pressRelease){
            this.dateCount.totalCount = Object.values(this.pressRelease.data).length
            console.log(Object.values(this.pressRelease.data).length)
            clearInterval(timer)
          }
        }, 100)
      },
      pushListHeight () {
        this.dateCount.listHeight = this.$refs.dh_list_height.clientHeight
      },
      resizeScroller () {
        this.$nextTick( () => {
          this.dateCount.listCount = 8
        })
      },
    },
    watch: {
      currentIndex: function(current) {//监听 年份切换，获取相应数据
        this.$store.dispatch('getPressRelease', this.getDateYear()[current])
        this.resizeScroller()
      },
      pressRelease: function(){
        this.setTotalCount()
      }
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
          text-transform: capitalize;
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
        border-bottom: solid 1px #eaecee;
        &:first-child{
          padding-top: 0;
        }
      }
      .dh-leftpart{
        margin-right: 8%;
      }
      .dh-rightpart{
        h3{
          font-weight: bold;
          color: #0e5fae;
          font-size: 13px;
        }
        p{
          font-size: 12px;
          color: @dh-font-color;
          margin-top: 3px;
        }
      }
    }
</style>

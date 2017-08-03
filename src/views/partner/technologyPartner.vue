<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-list-wrapper" ref="dh_list_height">
            <load-more :dateCount="dateCount">
              <div slot="content" v-if="technologyPartner">
                <div class="dh-sub-title">
                  <h3>{{technologyPartner.data.menu.name}}</h3>
                </div>
                <div class="dh-partner">
                  <ul class="dh-partner-item dh-container">
                    <li class="dh-partner-list" v-for="(item, index) in technologyPartner.data.list" v-if="index < dateCount.listCount">
                      <flexbox :gutter="0" wrap="wrap" align="flex-start">
                        <flexbox-item :span="2/3">
                          <section class="dh-contentleft">
                            <h3>{{item.name}}</h3>
                            <p>Tel:{{item.tel}}</p>
                            <p>Email:{{item.email}}</p>
                            <p>Url:{{item.url}}</p>
                            <button :class="{disabled: index == showDetail}" @click="showDetail = index">Details</button>
                          </section>
                        </flexbox-item>
                        <flexbox-item :span="1/3">
                          <div  class="dh-contentright">
                            <img :src="item.image" class="dh-width-fluid">
                          </div>
                        </flexbox-item>
                      </flexbox>
                      <div class="dh-content" v-html="item.message" v-if="index == showDetail"></div>
                      <flexbox class="dh-subcontent" :gutter="0" wrap="wrap" align="flex-start">
                        <flexbox-item>
                          <h3 class="dh-subtitle">Supported Products</h3>
                          <p>{{item.text}}</p>
                        </flexbox-item>
                      </flexbox>

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
import footerPart from '@/components/footer/'

import loadMore from '@/components/common/loadMore'

import { Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          showDetail: -1,
          dateCount: {
            listCount: 0,
            totalCount: '',
            listHeight: ''
          }
        }
    },
    components: {
        headTop,
        footerPart,
        Flexbox,
        FlexboxItem,
        loadMore
    },
    computed: {
      ...mapGetters([
        'technologyPartner'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getTechnologyPartner', 1)
      },
      setTotalCount () {
        let timer = setInterval( () => {
          if(this.technologyPartner){
            console.log(this.technologyPartner.data.list.length)
            this.dateCount.totalCount = this.technologyPartner.data.list.length
            clearInterval(timer)
          }
        }, 100)
      },
      pushListHeight () {
        this.dateCount.listHeight = this.$refs.dh_list_height.clientHeight
        console.log(this.dateCount.listHeight)
      },
    },
    mounted () {
      this.$nextTick( () => {
       this.setTotalCount()
       this.pushListHeight()
     })
    },
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-partner-list{
      padding: 20px 0;
      border-bottom: dashed 1px #dadada;
      h3{
        font-weight: 500;
        color: #333;
        &.dh-subtitle{
          font-size: 15px;
          color: #606060;
        }
      }
      p{
        font-size: 14px;
        line-height: 17px;
        color: #606060;
      }
      button{
        padding: 4px 12px;
        background-color: #ee4503;
        font-size: 14px;
        color: #fff;
        margin-top: 8px;
        .trandtion-ease();
        &.disabled{
          background-color: #dadada;
        }
      }
    }
    .dh-contentleft{
      margin-right: 12px;
    }
    .dh-contentright{
      padding: 5px;
      border: solid 1px #eaecee;
    }
    .dh-content{
      margin-top: 15px;
      font-size: 14px;
      color: #606060;
    }
    .dh-subcontent{
      margin-top: 15px;
    }
    .dh-loadmore-btn{
      margin: 20px 0; 
      button{
        width: 100%;
        padding: 5px 0;
        border: solid 1px #90b0d0;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 2px 12px rgba(0, 0, 0, .16);
      }
      
    }
</style>

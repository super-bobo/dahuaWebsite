<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-list-wrapper" ref="dh_list_height">
              <load-more :dateCount="dateCount">
                <div slot="content" v-if="successStoryList">
                  <div class="dh-sub-title">
                    <h3>{{successStoryList.data.name}}</h3>
                  </div>
                  <div class="dh-success-storylist">
                    <ul class="dh-press-item dh-container">
                      <li class="dh-press-list" v-for="(item, index) in successStoryList.data.case" v-if="index < dateCount.listCount">                   
                        <router-link tag="a" :to='"/newsroom/successStoryDetail/" + item.id'>
                          <flexbox :gutter="0" wrap="wrap">
                            <flexbox-item :span="1/3">
                              <div class="dh-leftpart">
                                <img class="dh-width-fluid" :src="item.case_img">
                              </div>
                            </flexbox-item>
                            <flexbox-item :span="2/3">
                              <div class="dh-rightpart">
                                <h3>{{item.name}}</h3>
                                <p class="dh-elip">{{item.messages_e}}</p>
                                <div class="dh-bottom">
                                  <flexbox :gutter="0" wrap="wrap">
                                    <flexbox-item :span="3/5" class="dh-elip">{{item.menu_name}}</flexbox-item>
                                    <flexbox-item class="dh-textright dh-elip">{{item.country}}</flexbox-item>
                                  </flexbox>
                                </div>
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
import footerPart from '@/components/footer/'

import loadMore from '@/components/common/loadMore'

import { Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
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
        'successStoryList'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getSuccessStoryList', this.$route.params.successStoryListId)
      },
      setTotalCount () {
        let timer = setInterval( () => {
          if(this.successStoryList){
            console.log(this.successStoryList.data.case.length)
            this.dateCount.totalCount = this.successStoryList.data.case.length
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
    watch: {
      '$route' (to, from) {
      //刷新参数放到这里触发刷新相同界面
        this.getStatus()
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-press-item{
      margin-bottom: 18px;
      .dh-press-list{
        padding: 18px 0;
        border-bottom: solid 1px #eaecee;
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
          color: #606060;
          margin-top: 3px;
        }
        .dh-bottom{
          font-size: 12px;
          margin-top: 4px;
          color: #333;
          .dh-textright{
            text-align: right;
          }
        }
        
      }
    }
</style>

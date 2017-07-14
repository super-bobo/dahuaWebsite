<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-product-wrapper">
              <div class="dh-sub-title">
                <h3>Awards</h3>
              </div>
              <div class="dh-aboutus-awards">
                <div class="dh-tab dh-container">
                   <tab class="dh-aboutus-tab" :line-width="0" v-model="tabindex">
                    <tab-item active-class="dh-active" :selected="tabindex === index" v-for="(item, index) in list" :key="index">{{item}}</tab-item>
                  </tab>
                </div>
                <div class="dh-awards-content" v-if="awards">
                  <ul class="dh-awards-item" :style="{marginLeft: '-'+tabindex+'00%'}">
                    <li class="dh-awards-list">
                      <flexbox :gutter="0" wrap="wrap" align="flex-start">
                        <flexbox-item :span="1/3" :key="index" v-for="(item, index) in awards.data.awards" v-show="tabindex == 0">
                          <figure>
                            <img class="dh-width-fluid previewer-img" :src="item.images_src" @click="showAwards(index)" />
                            <p>{{item.images_name}}</p>
                          </figure>
                        </flexbox-item>
                      </flexbox>
                    </li>
                    <li class="dh-awards-list">

                      <flexbox :gutter="0" wrap="wrap" align="flex-start">
                        <flexbox-item :span="1/3" :key="index" v-for="(item, index) in awards.data.cerfications" v-show="tabindex == 1">
                          <figure>
                            <img class="dh-width-fluid previewer-img" :src="item.images_src" @click="showCertifications(index)" />
                            <p>{{item.images_name}}</p>
                          </figure>
                        </flexbox-item>
                      </flexbox>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div v-transfer-dom>
                  <previewer :list="awardsImg" ref="previewerAwards" :options="options"></previewer>
                  <previewer :list="certificationsImg" ref="previewerCertifications" :options="options"></previewer>
                </div>
              </div>
            </section>
            <footer-part></footer-part>
          </div>
        </div>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'

import { Tab, TabItem, Flexbox, FlexboxItem, Previewer, TransferDom } from 'vux'

import { mapGetters } from 'vuex'

export default {
  directives: {
    TransferDom
  },
    data(){
        return{
          list: ['Awards', 'Certifications'],
          tabindex: 0,
          awardsImg: '',
          certificationsImg: '',
          options: {
            getThumbBoundsFn (index) {
            let thumbnail = document.querySelectorAll('.previewer-img')[index]
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            }
          }

        }
    },
    mounted () {
      this.$nextTick( () => {
        let timer = setInterval( () => {
          if(this.awards){
            clearInterval(timer)
            this.awardsImg = this.getImgArr(this.awards.data.awards)
            this.certificationsImg = this.getImgArr(this.awards.data.cerfications)
            console.log(this.list1)
            console.log(this.awardsImg)
          }
        },200)
      })
    },
    components: {
        headTop,
        footerPart,
        Tab, 
        TabItem,
        Flexbox,
        FlexboxItem,
        Previewer
    },
    computed: {
      ...mapGetters([
        'awards'
      ])
    },
    created () {
     this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getAwards')
      },
      getImgArr (arr) {
        let currentArr= [];
        arr.forEach( function(element, index) {
          currentArr.push({
            src: element.images_src
          })
        })
        return currentArr
      },
      showAwards (index) {
        this.$refs.previewerAwards.show(index)
      },
      showCertifications (index) {
        this.$refs.previewerCertifications.show(index)
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-tab{
      margin: 18px 0;
    }
    .dh-aboutus-tab{
      border-bottom: solid 1px #034585;
      height: 30px!important;
      &.vux-tab{
        display: block;
        .vux-tab-item{
          border-bottom: 0;
          line-height: 30px;
          color: #606060;
          background: transparent!important;
          position: relative;
          float: left;
          width: auto;
          padding: 0 20px;
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
    .dh-awards-content{
      margin: 0 3.8% 10px;
      overflow: hidden;
    }
    .dh-awards-item{
      width: 200%;
      display: table;
      .trandtion-ease();
    }
    .dh-awards-list{
      display: table-cell;
      width: 50%;
      .vux-flexbox-item{
        width:32%;
        padding: 0 1% 15px;
      }
      p{
        font-size: 12px;
        color: #606060;
        margin-top: 2px;
      }
    }
    
</style>

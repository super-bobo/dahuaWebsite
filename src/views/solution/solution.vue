<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title">
              <h3>Solution</h3>
            </div>
            <div class="dh-solution dh-container">
              <ul class="dh-item">
                <li class="dh-list" v-for="(item, index) in solution.data" v-if="solution">
                  <figure>
                    <img class="dh-width-fluid" :src="item.menu_image">
                    <dl>
                      <dt class="dh-container">
                        <span class="text">{{item.name}}</span>
                        <span class="icon" :class="{open: showIndex === index}" @click="showSubList(index)"></span>
                      </dt>
                      <dd class="dh-container"  :ref="'list' + index">
                        <ul class="dh-subitem">
                          <li class="dh-sublist" v-for="(subitem, subindex) in item.child">
                            <router-link tag="a" :to="'/solution.html/' + subitem.id">{{subitem.name}}</router-link>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                </figure>
                </li>
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

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          showIndex: -1,
        }
    },
    components: {
        headTop,
        footerPart,
    },
    computed: {
      ...mapGetters([
        'solution'
      ])
    },
    created () {
      this.getStatus()
    },
    mounted () {
      this.$nextTick( () => {
        console.log(this.$refs)
     })
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getSolution')
      },
      showSubList (index) {
        for(var i in this.$refs){
          if(i === `list${index}` && this.showIndex !== index){
            console.log(this.$refs[i][0].children["0"].clientHeight)
            this.$refs[i][0].style.height = `${this.$refs[i][0].children[0].clientHeight}px` //获取元素的高度，赋值
          }else{
            this.$refs[i][0].style.height = 0
          }
        }
        this.showIndex = this.showIndex === index ? -1 : index
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-solution{
      margin-bottom: 20px;
      .dh-list{
        margin-top: 20px;
        img{
          display: block;
        }
        dl{
          background-color: #f6f6f6;
        }
        dt{
          @dttext: 50px;
          @iconheight: 24px;
          @iconpadding: 4px;
          border-bottom: solid 1px #fff;
          font-size: 18px;
          line-height: @dttext;
          position: relative;
          .icon{
            width: @iconheight;
            height: @iconheight;
            padding: @iconpadding;
            position: absolute;
            right: 4.8%;
            top: (@dttext - @iconheight)/2;
          }
          .icon:before,
          .icon:after{
            content: "";
            display: block;
            background-color: #333333;
            position: absolute;
            .trandtion-ease();
          }
          .icon:before{
            width: @iconheight - @iconpadding;
            height: 2px;
            left: @iconpadding/2;
            top: (@iconheight - 2)/2;
          }
          .icon:after{
            width: 2px;
            height: @iconheight - @iconpadding;
            left: (@iconheight - 2)/2;
            top: @iconpadding/2;
          }
          .icon.open:before,
          .icon.open:after{
            background-color: #32beff;
          }
          .icon.open:before{
                    transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }
          .icon.open:after{
                    transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
          }
        }
        dd{
          height: 0;
          .trandtion-ease(.3s);
          overflow: hidden;
        }
        .dh-subitem{
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .dh-sublist{
          a{
            display: block;
            padding-left: 16px;
            line-height: 30px;
            color: #666;
            position: relative;
            &:before{
              content: "";
              display: block;
              width: 8px;
              height: 2px;
              background-color: #666;
              position: absolute;
              left: 0;
              top: 14px;
            }
            &:hover,
            &:active{
              color: #32beff;
            }
            &:hover:before,
            &:active:before{
              background-color: #32beff;
            }
          }
        }
      }
    }
</style>

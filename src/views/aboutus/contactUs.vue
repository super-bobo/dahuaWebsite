<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-main-wrapper">
              <div class="dh-sub-title">
                <h3>Contact Us</h3>
              </div>
              <div class="dh-contactus dh-container">
                <section class="dh-content" v-html="contactUs.data.m_content" v-if="contactUs"></section>
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

import { Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
        }
    },
    components: {
        headTop,
        footerPart,
        Flexbox,
        FlexboxItem
    },
    computed: {
      ...mapGetters([
        'contactUs'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getContactUs')
      },

    },
    updated () {
      this.$nextTick ( () => {//点击切换事件
        var itemNode = document.getElementsByClassName('dh-content-item');
        for(let i=0; i<itemNode.length; i++){
          itemNode[i].addEventListener('click', function(e) {
            for(let j=0; j<itemNode.length; j++){
              itemNode[j].setAttribute('class', 'dh-content-item')
              itemNode[j].children[1].style.height = '0px'
            }
            let event = e || window.e;
            if(event.target.tagName.toLowerCase() == 'h3' || event.target.tagName.toLowerCase() == 'em'){
              let contentHeight = this.children[1].getBoundingClientRect().height
              //let scrollTop = document.body.scrollTop
              //console.log(scrollTop)
              if(!!contentHeight){
                this.children[1].style.height = contentHeight + 'px'
                this.children[1].style.height = '0px'
                this.setAttribute('class', 'dh-content-item')
              }else{
                this.children[1].style.height = 'auto'
                contentHeight = this.children[1].getBoundingClientRect().height
                this.children[1].style.height = '0px'
                let justToDo = document.body.offsetHeight
                this.children[1].style.height = contentHeight + 'px'
                this.setAttribute('class', 'dh-content-item dh-show')
                document.body.scrollTop = 0
              }
              
            }
          })
        }
      })
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
      .dh-contactus{
        margin: 12px 0 20px;
        .dh-content-top{
          font-size: 16px;
          color: #606060;
        }
        .dh-content-main{
          margin-top: 10px;
        }
        .dh-content-item{
          border-bottom: solid 1px #fff;
          overflow: hidden;
          >h3{
            font-weight: 500;
            font-size: 16px;
            color: #606060;
            background-color: @dh-bg-color;
            padding: 8px 12px;
            em:before{
              content: "+";
              text-align: center;
              display: inline-block;
              width: 12px;
              margin-right: 4px;
              font-weight: bold;
            }
          }
          >div{
            height: 0;
            transition: height .5s;
            table{
              border: solid 1px @dh-bg-color;
              td{
                font-size: 15px;
                color: #606060;
                span,a{
                  color: #606060!important;
                }
              }
              figure{
                padding: 12px 15px;
                img{
                  width: 100%;
                }
              }
            }
          }
          &.dh-show{
            transition: height .5s;
            h3 em:before{
              content: "-";
            }
          }
        }
      }
</style>

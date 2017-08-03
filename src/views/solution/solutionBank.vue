<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title" v-if="solutionBank">
              <h3>{{solutionBank.data.solution_menu.name}}</h3>
            </div>
            <div class="dh-solution-bank" v-if="solutionBank">
              <img :src="solutionBank.data.solution.video_img" class="dh-width-fluid" v-if="solutionBank.data.solution.video_img != ''">
              <div class="dh-content dh-content1 dh-container">
                <ul>
                  <li v-for="item in solutionBank.data.solution.content1" v-if="solutionBank.data.solution.content1 != ''">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                  </li>
                </ul>
                <div class="dh-download-btn">
                  <a :href="solutionBank.data.solution.brochure">Download brochure</a>
                </div>
              </div>
              <div class="dh-content dh-content2" v-if="solutionBank.data.solution.overview != ''">
                <h3 class="dh-sulution-title dh-container">
                  <span class="dh-title-icon"></span>Solution Overview
                </h3>
                <div class="dh-overview-img">
                  <img :src="solutionBank.data.solution.overview" class="dh-width-fluid">
                </div>
              </div>
              <div class="dh-content dh-content3" v-if="solutionBank.data.solution_area != ''">
                <h3 class="dh-sulution-title dh-container">
                  <span class="dh-title-icon"></span>Solution Details
                </h3>
                <div class="dh-solution-detail">
                  <ul class="dh-container">
                    <li v-for="item in solutionBank.data.solution_area">
                      <router-link tag="a" :to="'/entrance/'+bankId+'/'+item.lb">
                        <img :src="item.img" class="dh-width-fluid">
                        <section class="dh-bottom-title">
                          <h3 class="dh-elip">{{item.title}}</h3>
                        </section>                        
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dh-content dh-content4" v-if="solutionBank.data.solution.content3 != ''">
                <h3 class="dh-sulution-title dh-container">
                  <span class="dh-title-icon"></span>Key Technology
                </h3>
                <div class="dh-keytechnology">
                  <ul>
                    <li class="dh-container" v-for="item in solutionBank.data.solution.content3">
                      <router-link tag="a" :to="'/keyTechnology/' + bankId">
                        <figure>
                          <h3 class="dh-elip">{{item.title}}</h3>
                          <p>{{item.content}}</p>
                          <img :src="item.image" class="dh-width-fluid">
                        </figure>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dh-content dh-content5" v-if="solutionBank.data.solution.content2 != ''">
                <h3 class="dh-sulution-title dh-container">
                  <span class="dh-title-icon"></span>Solution Features
                </h3>
                <div class="dh-features dh-container">
                  <p>{{solutionBank.data.solution.content2}}</p>
                </div>
              </div>
              <div class="dh-content dh-content6">
                <ul >
                  <li v-if="solutionBank.data.solution.img1 != ''">
                    <div class="dh-container">
                      <h3>System Structure</h3>
                    </div>
                    <div class="dh-img"><img class="dh-width-fluid" :src="solutionBank.data.solution.img1"></div>
                  </li>
                  <li v-if="solutionBank.data.solution.img2 != ''">
                    <div class="dh-container">
                      <h3>System Structure</h3>
                    </div>
                    <div class="dh-img"><img class="dh-width-fluid" :src="solutionBank.data.solution.img2"></div>
                  </li>
                </ul>
              </div>
              <div class="dh-content dh-content7" v-if="solutionBank.data.case_list != ''">
                <h3 class="dh-sulution-title dh-container">
                  <span class="dh-title-icon"></span>Success Case
                </h3>
                <ul>
                  <li v-for="item in solutionBank.data.case_list">
                    <img class="dh-width-fluid" :src="item.case_img">
                    <figure class="dh-container">
                      <h3>{{item.name}}</h3>
                      <p>{{item.messages_e}}</p>
                      <div class="dh-download-btn">
                      <router-link tag="a" :to='"/newsroom/successStoryDetail/" + item.id'>Details</router-link>
                    </div>
                    </figure>
                  </li>
                </ul>
              </div>
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
          bankId: '',
        }
    },
    components: {
        headTop,
        footerPart,
    },
    computed: {
      ...mapGetters([
        'solutionBank'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.bankId = this.$route.params.bankId
        this.$store.dispatch('getSolutionBank', this.$route.params.bankId)
      }
    },
    watch: {
      '$route' (to, from) {
        this.getStatus()
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .dh-solution-bank{
      .dh-content{
        margin-top: 18px;
      }
      .dh-content1{
        li{
          margin-top: 12px;
          color: #606060;
        }
        h3{
          font-size: 18px;
          font-weight: bold;
        }
        p{
          margin-top: 8px;
          font-size: 16px;
        }
      }
      .dh-download-btn{
        text-align: right;
        margin-top: 20px;
        a{
          display: inline-block;
          padding: 5px 12px;
          border-radius: 5px;
          background-color: #d01919;
          color: #fff;
          font-size: 12px;
        }
      }
    }
    .dh-sulution-title{
      font-size: 18px;
      color: #333;
      font-weight: bold;
      span{
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #0e5fae;
        margin-right: 8px;
      }
    }
    .dh-overview-img{
      margin-top: 15px;
      padding: 0 2%;
    }
    .dh-solution-detail{
      ul{
        overflow: hidden;
      }
      li{
        width: 48%;
        float: left;
        margin-right: 4%;
        margin-top: 10px;
        position: relative;
        &:nth-child(2n){
          margin-right: 0;
        }
        img{
          display: block;
        }
        .dh-bottom-title{
          width: 100%;
          font-size: 12px;
          background-color: rgba(0, 0, 0, 0.4);
          position: absolute;
          bottom: 0;
          left: 0;
          h3{
            padding: 5px 8px;
            color: #fff;
          }
        }
      }
    }
    .dh-keytechnology{

      li{
        background-color: @dh-bg-color;
        margin-top: 18px;
        padding-bottom: 20px;
        text-align: center;
        h3{
          display: inline-block;
          max-width: 100%;
          padding: 0 42px;
          height: 32px;
          line-height: 32px;
          margin-top: 16px;
          background-color: #0568bb;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          position: relative;
          &:before,
          &:after{
            content: "";
            display: block;
            height: 0;
            width: 0;
            border-color: #0568bb;
            border-width: 16px 12px;
            border-style: solid;
          }
          &:before{
            border-left-color: @dh-bg-color;
            border-top-color: @dh-bg-color;
            position: absolute;
            left: 0;
            top: 0;
          }
          &:after{
            border-right-color: @dh-bg-color;
            border-bottom-color: @dh-bg-color;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
        p{
          color: #606060;
          margin-top: 10px;
          text-align: left;
        }
        img{
          margin-top: 16px;
        }
      }
    }
    .dh-features{
      p{
        color: #606060;
        margin-top: 6px;
      }
    }
    .dh-content6{
      h3{
        display: inline-block;
        padding: 5px 36px 5px 24px;
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
        background-color: #c79213;
        color: #fff;

      }
      .dh-img{
        padding: 12px 1%;
      }
    }
    .dh-content7{
      li{
        margin: 16px 0;
        h3{
          margin-top: 5px;
          font-size: 17px;
          color: #333;
          font-weight: 500;
        }
        p{
          color: #606060;
          font-size: 15px;
          margin-top: 8px;
        }
      }
    }
</style>

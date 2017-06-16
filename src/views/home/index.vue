<template>
  	<div>
        <head-top></head-top>
        <!-- <Scroller class="dh-container-scroller" lock-x scrollbarY> -->
        <scroller>
          <div class="dh-container-scroller">
            <div class="dh-swiper-wrapper">
                <swiper loop auto 
                    :list="swiper_list" 
                    :aspect-ratio="1030/750" 
                    :index="swiper_index"
                    :interval="5000"
                    >
                </swiper>
            </div>
            <div class="dh-container dh-home-container">
                <section class="dh-index-wrapper dh-newproduct-wrapper">
                    <article class="dh-index-title-box">
                        <h2 class="dh-index-title dh-left">New Products</h2>
                        <router-link tag="a" :to="'/home'" class="dh-index-morebtn dh-right">more</router-link>
                    </article>
                    <ul class="dh-newproduct-main">
                        <li class="dh-newproduct-list">
                          <router-link tag="a" :to="'/products/'">
                            <figure>
                              <img class="dh-newproduct-img" src="../../assets/images/protect-img.png" alt="" />
                              <figcaption>
                                  <h3 class="dh-elip">NVR6000/6000D/6000DR</h3>
                                  <p>8/16 Channel 1U 8PoE 
  Network Video Recorder</p>
                              </figcaption>
                            </figure>
                          </router-link>
                        </li>
                        <li class="dh-newproduct-list">
                          <router-link tag="a" :to="'/products/'">
                            <figure>
                              <img class="dh-newproduct-img" src="../../assets/images/protect-img.png" alt="" />
                              <figcaption>
                                  <h3 class="dh-elip">NVR6000/6000D/6000DR</h3>
                                  <p>8/16 Channel 1U 8PoE 
  Network Video Recorder</p>
                              </figcaption>
                            </figure>
                          </router-link>
                        </li>
                        <li class="dh-newproduct-list">
                          <router-link tag="a" :to="'/products/'">
                            <figure>
                              <img class="dh-newproduct-img" src="../../assets/images/protect-img.png" alt="" />
                              <figcaption>
                                  <h3 class="dh-elip">NVR6000/6000D/6000DR</h3>
                                  <p>8/16 Channel 1U 8PoE 
  Network Video Recorder</p>
                              </figcaption>
                            </figure>
                          </router-link>
                        </li>
                        <li class="dh-newproduct-list">
                          <router-link tag="a" :to="'/products/'">
                            <figure>
                              <img class="dh-newproduct-img" src="../../assets/images/protect-img.png" alt="" />
                              <figcaption>
                                  <h3 class="dh-elip">NVR6000/6000D/6000DR</h3>
                                  <p>8/16 Channel 1U 8PoE 
  Network Video Recorder</p>
                              </figcaption>
                            </figure>
                          </router-link>
                        </li>
                    </ul>
                </section>
                <section class="dh-index-wrapper dh-newletter-wrapper">
                    <article class="dh-index-title-box dh-spe">
                        <h2 class="dh-index-title">Newsletter</h2>
                    </article>
                    <router-link  tag="a" :to="'/newsletter/'">
                      <figure>
                        <img class="dh-newproduct-img" src="../../assets/images/dh-newsletter-img.png" alt="" />
                        <figcaption>
                            <p>Sign up for dahua newsletter</p>
                        </figcaption>
                      </figure>
                    </router-link>
                </section>
                <section class="dh-index-wrapper dh-events-wrapper">
                    <article class="dh-index-title-box dh-spe">
                        <h2 class="dh-index-title">News & Events</h2>
                    </article>
                    <ul class="dh-events-main">
                      <li class="dh-events-list">
                        <router-link  tag="a" :to="'/events/'" class="dh-event-link">
                          <time>[2017-06-12]</time>
                          <p>Another Big Step, Dahua Technology Takes HDCVI to the 4.0 Era</p>
                        </router-link>
                      </li>
                      <li class="dh-events-list">
                        <router-link  tag="a" :to="'/events/'" class="dh-event-link">
                          <time>[2017-06-12]</time>
                          <p>Another Big Step, Dahua Technology Takes HDCVI to the 4.0 Era</p>
                        </router-link>
                      </li>
                      <li class="dh-events-list">
                        <router-link  tag="a" :to="'/events/'" class="dh-event-link">
                          <time>[2017-06-12]</time>
                          <p>Another Big Step, Dahua Technology Takes HDCVI to the 4.0 Era</p>
                        </router-link>
                      </li>
                      <li class="dh-events-more">
                        <router-link  tag="a" :to="'/events/'" class="dh-index-morebtn">
                          View all news
                        </router-link>
                      </li>
                    </ul>
                </section>
                <section class="dh-index-wrapper dh-stoty-wrapper">
                    <article class="dh-index-title-box dh-spe">
                        <h2 class="dh-index-title">Success Stories</h2>
                    </article>
                    <article>
                      <figure>
                        <img class="dh-width-fluid" src="../../assets/images/dh-story-img.png" alt="" />
                        <figcaption>
                          <h3>Dahua Professional Surveillance System Transforms Cutral-Có, Argentina into Safe City in 30 Days</h3>
                          <p>HANGZHOU, CHINA/April 18, 2017 — As the second largest city in Neuquén Province and one of Argentina’s most important oil producing regions, Cutral-Có was in need of a solution to safeguard …</p>
                          <div class="dh-stoty-more">
                            <router-link  tag="a" :to="'/events/'" class="dh-index-morebtn">
                              Read the full story
                            </router-link>
                          </div>
                        </figcaption>
                      </figure>
                    </article>
                </section>
            </div>
            <footer-part></footer-part>
          </div>
        </scroller>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'
import { Swiper } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img
}))
export default {
    data(){
        return{
            swiper_list: urlList,
            swiper_index: 0,
        }
    },
    components: {
        headTop,
        Swiper,
        footerPart
    },
    methods: {
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-home-container{
      padding-bottom: 25px;
      img{
        display: block;
      }
    }
    .dh-index-wrapper{
      margin-top: 24px;
    }
    .dh-newproduct-wrapper{
        padding: 20px 5%;
        background-color: @dh-bg-color;
    }
    @dh-index-title: 26px;
    .dh-index-title-box{
      height: @dh-index-title;
      line-height: @dh-index-title;
      margin-bottom: 12px;
      &.dh-spe{
        padding-left: 5%;
      }
    }
    .dh-index-title{
      font-size: 20px;
      color: @dh-font-color;
      font-weight: bold;
    }
    .dh-index-morebtn{
      display: inline-block;
      font-size: 14px;
      height: @dh-index-title;
      line-height: @dh-index-title;
      border-radius: 5px;
      background-color: @dh-theme-color;
      color: #fff;
      padding: 0 12px; 
    }
    .dh-newproduct-main{
      overflow: hidden;
    }
    .dh-newproduct-list{
      width: 48%;
      margin-right: 4%;
      float: left;
      margin-top: 15px;
      &:nth-child(2n){
        margin-right: 0;
      }
      &:nth-child(1){
        margin-top: 0;
      }
      &:nth-child(2){
        margin-top: 0;
      }
      .dh-newproduct-img{
        width: 100%;
      }
      figcaption{
        h3, p{
          margin-top: 5px;
        }
        h3{
          color: @dh-theme-color;
          font-size: 15px;
        }
        p{
          color: @dh-ligth-color;
          font-size: 12px;
        }
      }
    }
    .dh-newletter-wrapper{
      figure{
        background-color: #699320;
        padding: 16px 0;
        text-align: center;
        img{
          width: 70px;
        }
        p{
          color: #fff;
          font-size: 18px;
          margin-top: 3px;
        }
      }
    }
    .dh-events-list{
      border-bottom: solid 1px #fff;
      .dh-event-link{
        display: block;
        padding: 10px 5%;
        background-color: @dh-bg-color;
        time{
          font-size: 13px;
          color: @dh-ligth-color;
        }
        p{
          font-size: 14px;
          margin-top: 3px;
        }
      }
    }
    .dh-events-more{
      text-align: right;
      background-color: @dh-bg-color;
      padding: 16px 5%;
    }
    .dh-stoty-wrapper{
      figcaption{
        background-color: @dh-bg-color;
        padding: 10px 5%;
        h3{
          font-size: 16px;
          font-weight: bold;
          margin-top: 2px;
          color: @dh-ligth-color;
        }
        p{
          font-size: 15px;
          margin-top: 6px;
          color: @dh-ligth-color;
        }
      }
    }
    .dh-stoty-more{
      padding: 15px 0;
      text-align: right;
    }
</style>

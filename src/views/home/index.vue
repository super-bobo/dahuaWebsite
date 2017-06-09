<template>
  	<div>
        <head-top></head-top>
        <Scroller class="dh-container-scroller" lock-x>
            <div>
                <div class="dh-swiper-wrapper">
                    <swiper loop auto 
                        :list="swiper_list" 
                        :aspect-ratio="1030/750" 
                        :index="swiper_index"
                        :interval="5000"
                        >
                    </swiper>
                </div>
                <div class="dh-container">
                    <section class="dh-newproduct-wrapper">
                        <article class="dh-index-title">
                            <h2 class="dh-index-title">New Products</h2>
                            <button class="dh-more-btn">more</button>
                        </article>
                        <ul class="dh-newproduct-main">
                            <li class="dh-newproduct-list">
                                <figure>
                                  <img src="https://static.vux.li/demo/1.jpg" alt="" />
                                  <figcaption>
                                      <h3>NVR6000/6000D/6000DR</h3>
                                      <p>8/16 Channel 1U 8PoE 
Network Video Recorder</p>
                                  </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </Scroller>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import { Scroller, Swiper } from 'vux'

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
        Scroller,
        Swiper
    },
    methods: {
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-newproduct-wrapper{
        padding: 20px 5%;
        background-color: @dh-bg-color;
    }
</style>

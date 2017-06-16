<template>
  	<div>
        <head-top></head-top>
        <!-- <Scroller class="dh-container-scroller" lock-x scrollbarY> -->
        <scroller>
          <div class="dh-container-scroller">
            <section class="dh-product-wrapper">
              <div class="dh-sub-title">
                <h3>All Products</h3>
              </div>
              <ul class="dh-container dh-allproduct-item">
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='""'>
                    <figure>
                      <img class="dh-width-fluid" src="../../assets/images/dh-story-img.png" alt="" />
                      <p>Network Products</p>
                    </figure>
                  </router-link>
                </li>
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='""'>
                    <figure>
                      <img class="dh-width-fluid" src="../../assets/images/dh-story-img.png" alt="" />
                      <p>Network Products</p>
                    </figure>
                  </router-link>
                </li>
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='""'>
                    <figure>
                      <img class="dh-width-fluid" src="../../assets/images/dh-story-img.png" alt="" />
                      <p>Network Products</p>
                    </figure>
                  </router-link>
                </li>
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='""'>
                    <figure>
                      <img class="dh-width-fluid" src="../../assets/images/dh-story-img.png" alt="" />
                      <p>Network Products</p>
                    </figure>
                  </router-link>
                </li>
                <li class="dh-allproduct-list">
                  <router-link tag='a' :to='""'>
                    <figure>
                      <img class="dh-width-fluid" src="../../assets/images/dh-story-img.png" alt="" />
                      <p>Network Products</p>
                    </figure>
                  </router-link>
                </li>
              </ul>
            </section>
            <footer-part></footer-part>
          </div>
        </scroller>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'
export default {
    data(){
        return{
            
        }
    },
    components: {
        headTop,
        footerPart
    },
    methods: {
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-allproduct-item{
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
        }
      }
    }
</style>

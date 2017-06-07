<template>
  	<div>
        <head-top></head-top>
        <scroller class="dh-container-scroller">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../../assets/images/dh-banner01.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/dh-banner02.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../../assets/images/dh-banner03.png">
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </scroller>
    </div>
</template>

<script>
import headTop from '@/components/header/'
export default {
    data(){
        return{
            
        }
    },
    components: {
        headTop,
    }
}

</script>

<style lang="less" scoped>
</style>

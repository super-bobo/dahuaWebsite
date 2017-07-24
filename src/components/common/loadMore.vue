<template>
  <div class="dh-scroller-content">
    <scroller :on-infinite="loadMore" ref="list_scroller" :noDataText="noDateText">
      <slot name="content"></slot>
    </scroller>
    <div @click="scrollToTop" class="dh-scrollTotop" :class="{'dh-isshow': showScrollTop}">
      <svg t="1500601594585" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2480" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#00a6ff" p-id="2481"></path><path d="M514.844444 429.82716a31.604938 31.604938 0 0 0-25.852839 9.039013l-252.207407 252.207407a31.604938 31.604938 0 0 0 0 44.689383 31.604938 31.604938 0 0 0 44.689382 0l233.370864-233.118025 233.307655 233.307655a31.604938 31.604938 0 0 0 44.689382-44.689383l-252.207407-252.207408A31.604938 31.604938 0 0 0 514.844444 429.82716zM284.444444 322.37037h461.432099a31.604938 31.604938 0 0 1 0 63.209877H284.444444a31.604938 31.604938 0 0 1-31.604938-31.604938 31.604938 31.604938 0 0 1 31.604938-31.604939z" fill="#FFFFFF" p-id="2482"></path></svg>
    </div>
  </div>
</template>

<script>

export default {
  props: ['dateCount'],
  data () {
    return {
      noDateText: 'no date',
      startY: '',
      showScrollTop: false
    }
  },
  methods: {
      loadMore (done) {
        setTimeout(() => {
          //console.log(this.$refs.list_scroller)
          console.log(this.dateCount.totalCount)
          if(this.dateCount.listCount >= this.dateCount.totalCount){
            this.$refs.list_scroller.finishInfinite(2)
          }else{
            this.dateCount.listCount += 8
            this.$refs.list_scroller.resize()
            done()
          }
        }, 1000)
      },
      scrollToTop () {
        this.$refs.list_scroller.scrollBy(0, 0, true)
        setTimeout( () => {
          this.$refs.list_scroller.scrollTo(0, 0, true)
          this.showScrollTop = false
        }, 50)
      },
      touchSatrat (event) {
        var event = event || window.event
        this.startY = event.touches[0].clientY
      },
      touchEnd (event) {
        var event = event || window.event,
        moveEndY = event.changedTouches[0].clientY,
        lastY = moveEndY - this.startY
        if(!this.$refs.list_scroller) return 
        if(this.$refs.list_scroller.getPosition().top < this.dateCount.listHeight){
          this.showScrollTop = false
        }else{
          if ( lastY > 0) {//滑动事件，上滑
            this.showScrollTop = true
          }
          else if ( lastY < 0) {//滑动事件，下滑
            this.showScrollTop = false
          }
        }
      }
  },
  mounted () {
    this.$nextTick( () => {
      document.addEventListener('touchstart', this.touchSatrat, false)
      document.addEventListener('touchend', this.touchEnd, false)
   })
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/styles/common';
  .dh-scroller-content{
    height: 100%;
  }
  .dh-scrollTotop{
    height: 40px;
    width: 40px; 
    font-size: 32px;
    position: fixed; 
    bottom: 32px;
    right: 4.8%;
    opacity: 0;
    .trandtion-ease(@time: .5s);
    &.dh-isshow{
      opacity: .6;
    }
  }
</style>
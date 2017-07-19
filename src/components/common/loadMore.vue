<template>
<div>
  <load-more :tip="loadingText" v-show="showLoading"></load-more>
  <load-more :tip="nodateText" :show-loading="false" v-show="showNoDate"></load-more>
  <div class="dh-loadmore-btn dh-container" v-show="showMorebtn">
    <button @click="loadMore">More</button>
  </div>
</div>
</template>

<script>

import { LoadMore } from 'vux'

export default {
  props: ['dateCount'],
  data () {
    return {
      listCount: 8,
      showDetail: -1,
      showLoading: false,
      showMorebtn: true,
      showNoDate: false,
      loadingText: 'Loading...',
      nodateText: 'Have no date'
    }
  },
  methods: {
    loadMore () {
      this.showLoading = true
      this.showMorebtn = false
      console.log(this.dateCount)
      if(this.dateCount.totalCount > this.dateCount.listCount){
        setTimeout( () => {
          this.dateCount.listCount += 8
          this.showLoading = false
          this.showMorebtn = true
        }, 1000)
      }else{
        setTimeout( () => {
          this.showLoading = false
          this.showMorebtn = false
          this.showNoDate = true
        }, 1000)
      }
    }
  },
  components: {
    LoadMore
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/styles/common';
  .dh-loadmore-btn{
    margin: 20px 0; 
    button{
      width: 100%;
      padding: 5px 0;
      border: solid 1px #90b0d0;
      border-radius: 2px;
      background-color: #fff;
      box-shadow: 0 2px 12px rgba(0, 0, 0, .16);
    }

  }
</style>
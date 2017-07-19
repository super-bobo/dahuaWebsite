<template>
  	<div class="dh-loading">
      <loading v-model="isLoading" :text="text"></loading>
    </div>
</template>

<script>
import { Loading } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          isLoading: true,
          text: 'Loading'
        }
    },
    components: {
        Loading
    },
    mounted () {
      this.$nextTick( () => {
       setTimeout( () => {
        this.isLoading = false
      }, 500)
     })
    },
}

</script>

<style lang="less">
   .weui-mask_transparent{
    background-color: #ccc;
   }
</style>

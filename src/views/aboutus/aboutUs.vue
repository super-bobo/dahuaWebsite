<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div v-show="isSecondPage">
      </div>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          isSecondPage: true,
        }
    },
}

</script>
